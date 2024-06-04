import React from 'react'
import { AppContainer } from '../../../components/AppContainers'
import AppButton from '../../../components/AppButton'
import { Gap } from '../../../components/AppSpecialComponents'
import { AppNavigation, AppRoutesKeys } from '../../../utils/AppRoutes/AppRoutesUtils'
import { StackActions } from '@react-navigation/native'
import { AppColors } from '../../../utils/Pallete'

import DualTextWithShadowAndStroke from '../../../components/testetext'

export default function Navigation({ navigation }) {
  return (
    <AppContainer>
      <DualTextWithShadowAndStroke
        primaryText=" CONTAS "
        secondaryText="CONTAS"
        primaryTextStyle={{ fontSize: 18, fontWeight: 'bold', color: AppColors.white }}
        secondaryTextStyle={{ fontSize: 16 }}
        rotate={0}
        position="absolute"
        left={10}
        top={500}
        zIndex={999}
        marginBottom={5}
        color="#000" // Cor da borda
        stroke={1} // Espessura da borda
      />

      <AppButton
        label={'LOGIN'}
        onTap={() => {
          AppNavigation.push(navigation, AppRoutesKeys.loginScreen);
        }}
      />
      <Gap height={30} />
      <AppButton
        label={'TAB NAVIGATOR'}
        onTap={() => {
          const pushAction = StackActions.push(AppRoutesKeys.tabNavigator);
          navigation.dispatch(pushAction);
        }}
      />
      <Gap height={30} />
      <AppButton
        label={'CADASTRO'}
        onTap={() => {
          const pushAction = StackActions.push(AppRoutesKeys.registerUserDataPage);
          navigation.dispatch(pushAction);
        }}
      />
      <Gap height={30} />
      <AppButton
        label={'Landing Page'}
        onTap={() => {
          const pushAction = StackActions.push(AppRoutesKeys.landingPage);
          navigation.dispatch(pushAction);
        }}
      />
      <Gap height={30} />
      <AppButton
        label={'Recuperar senha'}
        onTap={() => {
          AppNavigation.push(navigation, AppRoutesKeys.recoveryPasswordInsertEmailEscreen)
        }}
      />
    </AppContainer>
  )
}