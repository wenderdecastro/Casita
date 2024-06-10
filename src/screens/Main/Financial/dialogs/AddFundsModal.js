import styled from "styled-components";
import { AppAssets } from "../../../../../assets/AppAssets";
import { Row } from "../../../../components/AppContainers";
import AppDialog from "../../../../components/AppDialog";
import { BodyLarge, FontFamily } from "../../../../components/AppFonts";
import AppTinyButtonIcon from "../../../../components/AppTinyButtonIcon";
import { KeyboardType } from "../../../../utils/AppEnums";
import { AppColors } from "../../../../utils/Pallete";
import ContainerShadow from "../widgets/ContainerShadow";

const Input = styled.TextInput`
  font-family: ${({fontFamily}) => fontFamily};
  font-size: ${({ fontSize }) => fontSize || '24px'};
  text-align: right;
  height: 80px;
  
`

export default function AddFundsModal({ visible, onClose }) {
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
