import React from 'react'
import styled from 'styled-components'
import { AppContainer, PositionedImage, Row } from '../../components/AppContainers'
import { AppColors } from '../../utils/Pallete'
import LeadingButtonWidget from './widgets/LeadingButtonWidget'
import { AppAssets } from '../../../assets/AppAssets'
import { BodyLarge, BodyMedium, Link, TitleBlack } from '../../components/AppFonts'
import AppInput from '../../components/AppInput'
import { Flex } from '../../utils/AppEnums'
import AppButton from '../../components/AppButton'

const LeadingBox = styled.View`
position: absolute;
top: 8%;
left: 8%;
`
const BoxTitle = styled.View`
  padding-left: 24px;
`

const BoxInput = styled.View`
width: 100%;
margin-top: 34px;
gap: 25px;
`

const LinkBox = styled.View`
  gap: 8px;
`

const StrokeBottom = styled.View`
width: 180px;
border: black;
`

export default function LoginScreen({navigation}) {
  return (

    <AppContainer backgroundColor={AppColors.background}>
        <LeadingBox>
            <LeadingButtonWidget navigation={navigation}/>
        </LeadingBox>

        <Row width={"100%"} alignItems={'center'} justifyContent={'center'}>
          <PositionedImage source={AppAssets.eightPointYellowStarSmall} />
          <BoxTitle>
            <TitleBlack size={32}>LOGIN</TitleBlack>
            <BodyMedium color={AppColors.black}>Já é dos nossos? Se loga aí!</BodyMedium>
          </BoxTitle>
        </Row>

        <BoxInput>
          <AppInput label={'Email'}></AppInput>
          <LinkBox>
            <AppInput label={'Senha'}></AppInput>
            <Link color={AppColors.blue}>Vai falar que esqueceu?</Link>
          </LinkBox>
        </BoxInput>

        <AppButton mainColor={AppColors.white}/>


        
    </AppContainer>
  )
}