import React, {useState, useRef, useEffect} from 'react'
import RecoveryPasswordContainer from './widgets/RecoveryPasswordContainer'
import { BodyMedium, TitleBlack } from '../../components/AppFonts'
import { Gap } from '../../components/AppSpecialComponents'
import { AppColors } from '../../utils/Pallete'
import { Flex } from '../../utils/AppEnums'
import { AppNavigation, AppRoutesKeys } from '../../utils/AppRoutes/AppRoutesUtils'
import AppButton from '../../components/AppButton'
import { AppCodeInput } from '../../components/AppInput'
import api from '../../services/ApiService'

export default function RecoveryPasswordInsertCodeScreen({ navigation, route }) {
  const {mail} = route.params;
  const [codeInput, setCodeInput] = useState('');

  async function ValidarCodigo() {
    console.log(mail);
    console.log(codeInput);
    await api.post(`/RecuperarSenha/ValidarCodigoRecuperacaoSenha?email=${mail}&codigo=${codeInput}`)
      .then(() => {
        console.log('foi');
        navigation.replace(AppRoutesKeys.recoveryPasswordInsertNewPasswordEscreen, {mail})
      })
      .catch((error) => {
        console.log('nao foi', error);
      });
  }


  return (
    <RecoveryPasswordContainer navigation={navigation}>
      <TitleBlack size={32}>RECUPERAÇÃO</TitleBlack>
      <Gap height={20} />
      <BodyMedium color={AppColors.black}>Te mandamos um código no seu email, da uma olhada aí! Precisamos dele pra saber se é você.</BodyMedium>
      <Gap height={10} />
      <AppCodeInput
        label={'Insira o código'}
        onValueChange={(val) => {
          setCodeInput(val)
        }}
      />
      <Gap height={40} />
      <AppButton
        mainColor={AppColors.white}
        label={'CONTINUAR'}
        onTap={() => {ValidarCodigo()}}
      />
    </RecoveryPasswordContainer>
  )
}