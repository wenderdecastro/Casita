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
import AppSquare from '../../components/AppNativeShapes/AppSquare'
import { AppRoutesKeys } from '../../utils/AppRoutes/AppRoutesUtils'
import { StackActions } from '@react-navigation/native'

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

const BoxButton = styled.View`
padding-top: 22px;
width: 100%;
gap: 25px;
`

export default function LoginScreen({ navigation }) {
  return (

    <AppContainer backgroundColor={AppColors.background}>
      <PositionedImage position={'absolute'} left={0} top={0} source={AppAssets.greenTriangle} />
      <PositionedImage position={'absolute'} left={81} top={7} source={AppAssets.dotPattern} />
      <PositionedImage position={'absolute'} left={81} top={82} source={AppAssets.dotStar} />
      <AppSquare width={350} height={150} rotate={25} backgroundColor={AppColors.blue} top={85} left={-40} />

      <LeadingBox>
        <LeadingButtonWidget navigation={navigation} />
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
          <Link color={AppColors.blue}
            onPress={() => {
              const pushAction = StackActions.push(AppRoutesKeys.recoveryPasswordInsertEmailEscreen);
              navigation.dispatch(pushAction);
            }}>Vai falar que esqueceu?</Link>
        </LinkBox>
      </BoxInput>

      <BoxButton>
        <AppButton mainColor={AppColors.white} label={'LOGIN'} />
        <Row justifyContent={'center'} gap={28}>
          <BodyLarge color={AppColors.black}>Não tem conta?</BodyLarge>
          <Link size={16} color={AppColors.blue}
            onPress={() => {
              const pushAction = StackActions.push(AppRoutesKeys.registerUserDataPage);
              navigation.dispatch(pushAction);
            }}
          >Cadastre-se</Link>
        </Row>
      </BoxButton>


    </AppContainer>
  )
}