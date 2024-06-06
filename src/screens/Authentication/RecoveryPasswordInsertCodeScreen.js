import React from 'react'
import RecoveryPasswordContainer from './widgets/RecoveryPasswordContainer'
import { BodyMedium, TitleBlack } from '../../components/AppFonts'
import { Gap } from '../../components/AppSpecialComponents'
import { AppColors } from '../../utils/Pallete'
import { Flex } from '../../utils/AppEnums'
import { AppNavigation, AppRoutesKeys } from '../../utils/AppRoutes/AppRoutesUtils'
import AppButton from '../../components/AppButton'
import { AppCodeInput } from '../../components/AppInput'

export default function RecoveryPasswordInsertCodeScreen({ navigation }) {
  return (
    <RecoveryPasswordContainer alignItems={Flex.flexStart} navigation={navigation}>
      <TitleBlack size={32}>RECUPERAÇÃO</TitleBlack>
      <Gap height={20} />
      <BodyMedium color={AppColors.black}>Te mandamos um código no seu email, da uma olhada aí! Precisamos dele pra saber se é você.</BodyMedium>
      <Gap height={10} />
      <AppCodeInput
      label={'Insira o código'}
        onValueChange={(val) => {
          console.log(val)
        }}
      />
      <Gap height={40} />
      <AppButton
        mainColor={AppColors.white}
        label={'CONTINUAR'}
        onTap={() => {
          AppNavigation.push(navigation, AppRoutesKeys.recoveryPasswordInsertNewPasswordEscreen)
        }}
      />
    </RecoveryPasswordContainer>
  )
}