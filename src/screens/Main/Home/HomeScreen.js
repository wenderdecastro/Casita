import React from 'react'
import { AppContainer } from '../../../components/AppContainers'
import { AppColors } from '../../../utils/Pallete'
import { Text } from 'react-native'


export default function HomeScreen() {

  return (
    <AppContainer backgroundColor={AppColors.background}>
      <Text>HomeScreen</Text>
    </AppContainer>
  )
}