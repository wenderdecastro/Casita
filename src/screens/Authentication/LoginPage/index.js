import { View, Text } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/AppContainers'
import { AppColors } from '../../../utils/Pallete'
import LeadingButtonWidget from '../widgets/LeadingButtonWidget'
import Navigation from '../Navigation'
import styled from 'styled-components'
import { BodyMedium, TitleBlack } from '../../../components/AppFonts'

const LeadingBox = styled.View`
position: absolute;
top: 8%;
left: 8%;
`

export default function LoginScreen({navigation}) {
  return (

    <AppContainer backgroundColor={AppColors.background}>
      <LeadingBox>
        <LeadingButtonWidget navigation={navigation}/>

        <TitleBlack size={32}>LOGIN</TitleBlack>
        <BodyMedium color={AppColors.black}>Já é dos nossos? Se loga aí!</BodyMedium>
      </LeadingBox>
    </AppContainer>
  )
}