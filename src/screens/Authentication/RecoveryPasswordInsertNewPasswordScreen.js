import { View, Text } from 'react-native'
import React from 'react'
import RecoveryPasswordContainer from './widgets/RecoveryPasswordContainer'
import { AppColors } from '../../utils/Pallete'
import { BodyMedium, TitleBlack } from '../../components/AppFonts'
import { Gap } from '../../components/AppSpecialComponents'
import AppInput from '../../components/AppInput'
import { Flex } from '../../utils/AppEnums'
import AppButton from '../../components/AppButton'
import { AppNavigation, AppRoutesKeys } from '../../utils/AppRoutes/AppRoutesUtils'

export default function RecoveryPasswordInsertNewPasswordScreen({navigation}) {
  return (
    <RecoveryPasswordContainer alignItems={Flex.flexStart} navigation={navigation} triangleColor={AppColors.blue} isSquare={false}>
      <TitleBlack size={32}>RECUPERAÇÃO</TitleBlack>
      <Gap height={20} />
      <BodyMedium color={AppColors.black}>Ufa! Agora que sabemos que é você mesmo, pode inserir sua nova senha!</BodyMedium>
      <Gap height={15} />
      <AppInput label={'Nova senha'} isObscureText/>
      <Gap height={15} />
      <AppInput label={'Confirmar senha'} isObscureText/>
      <Gap height={40}/>
      <AppButton 
      mainColor={AppColors.white} 
      label={'REDEFINIR SENHA'}
      onTap={() => {
        AppNavigation.push(navigation, AppRoutesKeys.navigator)
      }}
      />
    </RecoveryPasswordContainer>
  )
}