import React, { useRef } from 'react'
import AppButton from '../../../components/AppButton'
import ToastMessage from '../../../components/AppToastMessage'
import { View } from 'react-native'

export default function teste({ navigation }) {

  const toastRef = useRef(null);

  const showToast = () => {
    console.log(toastRef)
    if (toastRef.current) {
      toastRef.current.show();
    }
  }

  return (
    <View>
      <ToastMessage
        ref={toastRef}
        type='error'
        title='Preenchas os campos'
        description='Esquece de algo ai meu chapa!'
      />
      <AppButton
        label={'TOAST'}
        onTap={() => showToast()}
      />
    </View>
  )
}