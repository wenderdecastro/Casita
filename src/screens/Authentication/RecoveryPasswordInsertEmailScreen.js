import React, { useState } from 'react'
import RecoveryPasswordContainer from './widgets/RecoveryPasswordContainer'
import { BodyMedium, TitleBlack } from '../../components/AppFonts'
import { Gap } from '../../components/AppSpecialComponents'
import { AppColors } from '../../utils/Pallete'
import { Flex } from '../../utils/AppEnums'
import AppInput from '../../components/AppInput'
import AppButton from '../../components/AppButton'
import { AppNavigation, AppRoutesKeys } from '../../utils/AppRoutes/AppRoutesUtils'
import api from '../../services/ApiService';

export default function RecoveryPasswordInsertEmailScreen({ navigation }) {

  const [mail, setMail] = useState('enzo.quarelo@gmail.com')
  const [isLoading, setIsLoading] = useState(false)


  async function SendMail() {
    setIsLoading(true)
    try {
      await api.post(`/RecuperarSenha?email=${mail}`)
      navigation.replace(AppRoutesKeys.recoveryPasswordInsertCodeEscreen, {mail})
    } catch (error) {
      setIsLoading(false)
    }
    setIsLoading(false)
  }


  return (
    <RecoveryPasswordContainer alignItems={Flex.flexStart} navigation={navigation}>
      <TitleBlack size={32}>RECUPERAÇÃO</TitleBlack>
      <Gap height={20} />
      <BodyMedium color={AppColors.black}>Poxa, vamos ter que recuperar sua senha... Para isso, precisamos que você insira seu email aqui embaixo!</BodyMedium>
      <Gap height={15} />
      <AppInput label={'Email'}  textValue={mail} onChangeText={(txt) => setMail(txt)}/>
      <Gap height={40} />
      <AppButton
        mainColor={AppColors.white}
        label={'CONTINUAR'}
        onTap={() => {SendMail()}}
        isLoading={isLoading}
      />
    </RecoveryPasswordContainer>
  )
}