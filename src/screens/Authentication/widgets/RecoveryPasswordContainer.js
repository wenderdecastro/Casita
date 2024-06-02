import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../../utils/AppEnums'
import { AppColors } from '../../../utils/Pallete'

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

export default function RecoveryPasswordContainer({children}) {
    return (
        <Container>
           {children}
        </Container>
    )
}