import { useRef, useState } from "react";
import { ToastAndroid } from "react-native";
import AppDialog from "../../../../components/AppDialog";
import { KeyboardType, NewTaskButtons, SpentTypeButtons } from "../../../../utils/AppEnums";
import ButtonSelector from "../../../../components/ButtonSelector";
import { AppColors } from "../../../../utils/Pallete";
import { Gap } from "../../../../components/AppSpecialComponents";
import AppButton from "../../../../components/AppButton";
import { AntDesign } from "@expo/vector-icons";
import ButtonDate from "../widgets/ButtonDate";
import AppSvgIcon, { AppIconName } from "../../../../../assets/Icons";
import AppInput from "../../../../components/AppInput";
import { BodyLarge, FontFamily } from "../../../../components/AppFonts";
import ContainerShadow from "../widgets/ContainerShadow";
import AppTinyButtonIcon from "../../../../components/AppTinyButtonIcon";
import { Row } from "../../../../components/AppContainers";
import styled from "styled-components";
import { AppAssets } from "../../../../../assets/AppAssets";
import api, { TransactionPath } from "../../../../services/ApiService";
import ToastMessage from "../../../../components/AppToastMessage";
import { AppNavigation, AppRoutesKeys } from "../../../../utils/AppRoutes/AppRoutesUtils";
import CurrencyInput from "react-native-currency-input";

const Input = styled.TextInput`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize || '24px'};
  text-align: right;
  height: 80px;
  
`

export default function SpentModal({ visible, onClose, navigation }) {
  const [selected, setSelected] = useState(0);
  const [selectedPeriod, setSelectedPeriod] = useState(0);

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const [transactionValue, setTransactionValue] = useState(0)
  const [description, setDescription] = useState('');


  async function AddTransaction() {

    console.log(transactionValue);
    console.log(description);

    if (description == '') {
      ToastAndroid.show('Sua transação precisa de uma descrição!', ToastAndroid.SHORT);
      return;

    }

    if (transactionValue == 0) {
      ToastAndroid.show('Insira um valor válido!', ToastAndroid.SHORT);
      return;
    }


    await api.post(TransactionPath, {
      name: description,
      frequencyId: selectedPeriod + 1,
      transactionTypeId: 2,
      value: transactionValue,
      transactionTypeId: selected + 1
    })
      .then((response) => {
        console.log(response)
        AppNavigation.popWithData(navigation, AppRoutesKeys.financialScreen, { refresh: true })
      })
      .catch(error => {
        console.log(error.request)
      })
  }


  return (
    <AppDialog
      paddingInside={16}
      padding={15}
      visible={visible}
      onClose={onClose}
    >

      <ButtonSelector
        selectedColor={AppColors.green}
        selected={selected}
        isCompact={true}
        buttonList={SpentTypeButtons}
        mainColor={AppColors.white}
        mainTextColor={AppColors.black}
        handleTabSelected={(val) => {
          setSelected(val);
        }}
      />
      <Gap height={14} />

      <ButtonDate
        mainColor={AppColors.background}
        mainTextColor={AppColors.black}
        borderRadius={5}
        label={`${date.toLocaleDateString()}  `}
        icon={<AppSvgIcon name={AppIconName.clock} size={15} />}
        secundaryLabel={` ${time.toLocaleTimeString()}`}
      />

      <Gap height={12} />

      <ButtonSelector
        selected={selectedPeriod}
        isCompact={true}
        buttonList={NewTaskButtons}
        mainColor={AppColors.white}
        mainTextColor={AppColors.black}
        handleTabSelected={(val) => {
          setSelectedPeriod(val);
        }}
      />

      <Gap height={12} />

      <AppInput
        backgroundColor={AppColors.white}
        placeholder={"Descrição do pagamento"}
        fontFamily={FontFamily.archivoBold}
        onChangeText={(txt) => setDescription(txt)}
        textValue={description}
      />

      <Gap height={12} />

      <ContainerShadow
        width={"100%"}
        backgroundColor={AppColors.white}
        height={40}
        Content={
          <Row justifyContent={'space-between'} width={'100%'} height={'100%'} alignItems={'center'} style={{ padding: 8 }}>

            <AppTinyButtonIcon />

            <BodyLarge style={{ height: 38 }} size={24} color={AppColors.black}>R$</BodyLarge>

            <CurrencyInput
              value={transactionValue}
              onChangeValue={setTransactionValue}
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



            <AppTinyButtonIcon onPress={() => AddTransaction()} marginLeft={3} iconWidth={17} icon={AppAssets.paperPlaneIcon} backgroundColor={AppColors.yellow} />

          </Row>

        }
      />
    </AppDialog>
  );
}
