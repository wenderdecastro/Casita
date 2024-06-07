import { useState } from "react";
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

const Input = styled.TextInput`
  font-family: ${({fontFamily}) => fontFamily};
  font-size: ${({ fontSize }) => fontSize || '24px'};
  text-align: right;
  height: 80px;
  
`

export default function SpentModal({ visible, onClose }) {
  const [selected, setSelected] = useState(0);
  const [selectedPeriod, setSelectedPeriod] = useState(0);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

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
      />

      <Gap height={12} />

      <ContainerShadow
        width={"100%"}
        backgroundColor={AppColors.white}
        height={40}
        Content={
          <Row justifyContent={'space-between'} width={'100%'} height={'100%'} alignItems={'center'} style={{padding: 8}}>
            
            <AppTinyButtonIcon />
            
            <BodyLarge style={{height: 38}} size={24} color={AppColors.black}>R$</BodyLarge>
            
            <Input  keyboardType={KeyboardType.numeric} fontFamily={FontFamily.archivoMedium} >380,00</Input>
            
            
            
            <AppTinyButtonIcon marginLeft={3} iconWidth={17} icon={AppAssets.paperPlaneIcon} backgroundColor={AppColors.yellow}/>
            
          </Row>
          
        }
      />
    </AppDialog>
  );
}
