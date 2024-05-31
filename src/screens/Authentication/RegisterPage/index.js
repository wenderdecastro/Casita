import { View, Text } from 'react-native'
import React from 'react'

import { AppContainer } from '../../../components/AppContainers'
import { AppColors } from '../../../utils/Pallete'
import { TriangleShape } from '../../../components/AppShapes'

export default function RegisterScreen() {
  return (
    <AppContainer backgroundColor={AppColors.secondary}>
      <Text>RegisterScreen</Text>
      <TriangleShape/>
    </AppContainer>
  )
}