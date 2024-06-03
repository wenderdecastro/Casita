import React from 'react'
import { AppContainer } from '../../../components/AppContainers'
import AppButton from '../../../components/AppButton'
import { Gap } from '../../../components/AppSpecialComponents'
import { AppNavigation, AppRoutesKeys } from '../../../utils/AppRoutes/AppRoutesUtils'
import { StackActions } from '@react-navigation/native'

export default function Navigation({ navigation }) {
  return (
    <AppContainer>
      <AppButton label={'LOGIN'} />
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