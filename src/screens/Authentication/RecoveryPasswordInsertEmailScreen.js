import { View, Text } from 'react-native'
import React from 'react'
import RecoveryPasswordContainer from './widgets/RecoveryPasswordContainer'
import { BodyMedium, TitleBlack } from '../../components/AppFonts'
import { Gap } from '../../components/AppSpecialComponents'
import { AppColors } from '../../utils/Pallete'
import { Flex } from '../../utils/AppEnums'
import AppInput from '../../components/AppInput'
import AppButton from '../../components/AppButton'

export default function RecoveryPasswordInsertEmailScreen() {
  return (
    <RecoveryPasswordContainer alignItems={Flex.flexStart}>
      <TitleBlack size={32}>RECUPERAÇÃO</TitleBlack>
      <Gap height={20}/>
      <BodyMedium color={AppColors.black}>Poxa, vamos ter que recuperar sua senha... Para isso, precisamos que você insira seu email aqui embaixo!</BodyMedium>
      <Gap height={15}/>
      <AppInput label={'Email'} isObscureText/>
      <Gap height={40}/>
      <AppButton mainColor={AppColors.white} label={'CONTINUAR'}/>
    </RecoveryPasswordContainer>
  )
}