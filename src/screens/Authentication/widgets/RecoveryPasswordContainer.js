import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../../utils/AppEnums'
import { AppColors } from '../../../utils/Pallete'
import LeadingButtonWidget from './LeadingButtonWidget'
import AppSquare from '../../../components/AppNativeShapes/AppSquare'
import { PositionedImage } from '../../../components/AppContainers'
import { AppAssets } from '../../../../assets/AppAssets'
import AppCircle from '../../../components/AppNativeShapes/AppCircle'

const Container = styled.SafeAreaView`
padding: ${({
    paddingTop = 16,
    paddingRight = 40,
    paddingBottom = 0,
    paddingLeft = 40 }) => `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `};
align-items: ${({ alignItems = Flex.center }) => alignItems};
justify-content: ${({ justifyContent = Flex.center }) => justifyContent};
background-color: ${AppColors.background};
flex: ${({ flex = 1 }) => flex};
width: 100%;
`

export const LeadingBox = styled.View`
position: absolute;
top: 8%;
left: 8%;
`

export default function RecoveryPasswordContainer({ 
    children, 
    paddingTop,
    triangleColor = AppColors.yellow,
    isSquare = true, 
    paddingRight, 
    paddingBottom, 
    paddingLeft, 
    alignItems, 
    justifyContent, 
    flex, 
    navigation }) {
    return (
        <Container
            paddingTop={paddingTop}
            paddingBottom={paddingBottom}
            paddingLeft={paddingLeft}
            paddingRight={paddingRight}
            alignItems={alignItems}
            justifyContent={justifyContent}
            flex={flex}
        >
        <LeadingBox>
            <LeadingButtonWidget navigation={navigation}/>
        </LeadingBox>
        <PositionedImage position={'absolute'} left={80} top={5} source={AppAssets.dotPattern}/>
        <PositionedImage position={'absolute'} left={55} top={80} rotate={30} source={triangleColor == AppColors.yellow ? AppAssets.yellowTriangle : AppAssets.blueTriangle}/>
        <PositionedImage position={'absolute'} left={90} top={70} source={AppAssets.dotStar}/>
        {isSquare ? <AppSquare top={75} rotate={30}/> : <AppCircle circunference={94} top={75}/> }
            {children}
        </Container>
    )
}