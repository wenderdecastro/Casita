import { Image, Text } from 'react-native'
import React from 'react'
import { AppContainer, Row } from '../../../components/AppContainers'
import { AppColors } from '../../../utils/Pallete'
import { DualTextWithShadow, TitleBlack } from '../../../components/AppFonts'
import Income from './widgets/Income'
import { AppAssets } from '../../../../assets/AppAssets'
import ContainerShadow from './widgets/ContainerShadow'
import styled from 'styled-components'

const ViewCards = styled.View`
  width: 100%;
`

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

      <Row width={'100%'} justifyContent={'space-between'}>
      <Income
        MoneyValue='330,00'
      />

      <Income
        MoneyValue='330,00'
        Title='Despesas'
        IconPath={AppAssets.redArrowDown}
      />
      </Row>

      <ContainerShadow width={'100%'} height={51} marginTop={20} Content={
        <TitleBlack size={20}>MINHAS METAS</TitleBlack>
      }>
      </ContainerShadow>

      <ViewCards>
        <TitleBlack textAlign={'start'} size={20}>CARTÕES</TitleBlack>
      </ViewCards>

    </AppContainer>
  )
}