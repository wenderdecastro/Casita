import React, { useRef } from 'react'
import { AppContainer } from '../../../components/AppContainers'
import AppButton from '../../../components/AppButton'
import { Gap } from '../../../components/AppSpecialComponents'
import { AppNavigation, AppRoutesKeys } from '../../../utils/AppRoutes/AppRoutesUtils'
import { StackActions } from '@react-navigation/native'
import ToastMessage from '../../../components/AppToastMessage'

export default function Navigation({ navigation }) {

  const toastRef = useRef(null);

  const showToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  }

  return (
    <AppContainer>
      <ToastMessage
        ref={toastRef}
        type='warning'
        title='Preenchas os campos'
        description='Esquece de algo ai meu chapa!'
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
      <Gap height={30} />
      <AppButton
        label={'TOAST'}
        onTap={() => showToast()}
      />
    </AppContainer>
  )
}