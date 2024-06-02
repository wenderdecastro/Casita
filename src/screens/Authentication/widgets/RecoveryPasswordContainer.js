import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../../utils/AppEnums'
import { AppColors } from '../../../utils/Pallete'

const Container = styled.SafeAreaView`
padding: ${({
    paddingTop = 20,
    paddingRight = 20,
    paddingBottom = 20,
    paddingLeft = 20 }) => `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `};
align-items: ${({ alignItems = Flex.center }) => alignItems};
justify-content: ${({ justifyContent = Flex.center }) => justifyContent};
background-color: ${AppColors.secondary};
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