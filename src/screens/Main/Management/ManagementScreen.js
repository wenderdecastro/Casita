import { View, Text } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/AppContainers'
import { AppColors } from '../../../utils/Pallete'

export default function ManagementScreen() {
  return (
    <AppContainer backgroundColor={AppColors.background}>
      <Text>ManagementScreen</Text>
    </AppContainer>
  )
}