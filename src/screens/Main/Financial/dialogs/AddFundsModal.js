import styled from "styled-components";
import { AppAssets } from "../../../../../assets/AppAssets";
import { Row } from "../../../../components/AppContainers";
import AppDialog from "../../../../components/AppDialog";
import { BodyLarge, FontFamily } from "../../../../components/AppFonts";
import AppTinyButtonIcon from "../../../../components/AppTinyButtonIcon";
import { KeyboardType } from "../../../../utils/AppEnums";
import { AppColors } from "../../../../utils/Pallete";
import ContainerShadow from "../widgets/ContainerShadow";
import { useState } from "react";
import CurrencyInput from "react-native-currency-input";
import AppInput from "../../../../components/AppInput";
import api, { EditSpentPath } from "../../../../services/ApiService";
import { AppNavigation, AppRoutesKeys } from "../../../../utils/AppRoutes/AppRoutesUtils";
import { ToastAndroid } from "react-native";
import { AppUtils } from "../../../../utils/AppUtils";

const Input = styled.TextInput`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize || '24px'};
  text-align: right;
  height: 80px;
  
`

export default function AddFundsModal({ visible, onClose, navigation, goal }) {

  const [value, setValue] = useState(0)



  async function editFunds() {

    let newSpent = goal.amountSpent + parseFloat(value)

    if (newSpent <= goal.totalAmount) {
      await api.post(EditSpentPath, {}, {
        params: {
          goalId: goal.goalId,
          amount: value
        }
      }).then(response => {
        AppNavigation.popWithData(navigation, AppRoutesKeys.goalsScreen, { refresh: true })
        console.log('====================================');
        console.log(response);
        console.log('====================================');
      }).catch(error => {
        console.log('====================================');
        console.log(error.request);
        console.log('====================================');
      })
    } else {
      ToastAndroid.show(`Sua meta é ${AppUtils.formatNumToCurrency(goal.totalAmount)}, não ultrapasse ela.`, ToastAndroid.LONG)
    }
  }

  return (
    <AppDialog
      paddingInside={16}
      padding={15}
      visible={visible}
      onClose={onClose}
    >
      <ContainerShadow
        width={"100%"}
        backgroundColor={AppColors.white}
        height={40}
        Content={
          <Row justifyContent={'space-between'} width={'100%'} height={'100%'} alignItems={'center'} style={{ padding: 8 }}>

            <AppTinyButtonIcon icon={AppAssets.plusIcon} backgroundColor={AppColors.green} onPress={() => { }} />

            <BodyLarge size={16} color={AppColors.black}>R$</BodyLarge>

            <CurrencyInput
              value={value}
              onChangeValue={setValue}
              renderTextInput={textInputProps =>
                <AppInput
                  isTransparent
                  fontFamily={FontFamily.archivoMedium}
                  borderRadius={8}
                  backgroundColor={AppColors.white}
                  inputWidth={'140px'}
                  textInputProps={textInputProps}
                  placeholder={'0,00'}

                />}
              renderText
              prefix=""
              delimiter="."
              separator=","
              precision={2}
            />

            <AppTinyButtonIcon
              marginLeft={3}
              iconWidth={17}
              icon={AppAssets.paperPlaneIcon}
              backgroundColor={AppColors.yellow}
              onPress={() => editFunds()}
            />

          </Row>

        }
      />
    </AppDialog>
  );
}
