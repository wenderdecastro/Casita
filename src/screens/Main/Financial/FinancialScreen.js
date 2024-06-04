import { Text } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/AppContainers'
import { AppColors } from '../../../utils/Pallete'
import { DualTextWithShadow, TitleBlack } from '../../../components/AppFonts'
import Income from './widgets/Income'

export default function FinancialScreen() {
  return (
    <AppContainer backgroundColor={AppColors.background}>
      <TitleBlack size={20}>SALDO ATUAL</TitleBlack>
      <TitleBlack size={32}>R$ 3380,00</TitleBlack>

      <DualTextWithShadow 
      primaryText={'Ver histórico'} 
      secondaryText={'Ver histórico'} 
      primaryTextStyle={{fontSize:16, color:AppColors.white}} 
      secondaryTextStyle={{fontSize:18, color:AppColors.black}}
      />
      
      <Income/>
    </AppContainer>
  )
}