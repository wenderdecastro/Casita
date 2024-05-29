import React from 'react'
import { AppContainer } from '../../../components/AppContainers'
import AppButton from '../../../components/AppButton'
import { Gap } from '../../../components/AppSpecialComponents'
import { AppRoutesKeys } from '../../../utils/AppRoutes/AppRoutesUtils'
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
    </AppContainer>
  )
}