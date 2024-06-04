import React from 'react'
import RecoveryPasswordContainer from './widgets/RecoveryPasswordContainer'
import { BodyMedium, TitleBlack } from '../../components/AppFonts'
import { Gap } from '../../components/AppSpecialComponents'
import { AppColors } from '../../utils/Pallete'
import { Flex } from '../../utils/AppEnums'
import AppInput from '../../components/AppInput'
import AppButton from '../../components/AppButton'
import { AppNavigation, AppRoutesKeys } from '../../utils/AppRoutes/AppRoutesUtils'



export default function RecoveryPasswordInsertEmailScreen({navigation}) {
  return (
    <RecoveryPasswordContainer alignItems={Flex.flexStart} navigation={navigation}>
      <TitleBlack size={32}>RECUPERAÇÃO</TitleBlack>
      <Gap height={20}/>
      <BodyMedium color={AppColors.black}>Poxa, vamos ter que recuperar sua senha... Para isso, precisamos que você insira seu email aqui embaixo!</BodyMedium>
      <Gap height={15}/>
      <AppInput label={'Email'}/>
      <Gap height={40}/>
      <AppButton 
      mainColor={AppColors.white} 
      label={'CONTINUAR'}
      onTap={() => {
        AppNavigation.push(navigation, AppRoutesKeys.recoveryPasswordInsertCodeEscreen)
      }}
      />
    </RecoveryPasswordContainer>
  )
}