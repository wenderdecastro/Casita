import { View, Text } from 'react-native'
import React from 'react'
import { AppColors } from '../../utils/Pallete'
import styled from 'styled-components/native'

const Circle = styled.View`
    width: ${({ circunference }) => `${circunference}px`};
    height: ${({ circunference }) => `${circunference}px`};
    background-color: ${({ backgroundColor = AppColors.green }) => backgroundColor};
    border-width: 1px;
    border-color: ${AppColors.black};
    border-radius: 9999px;
`

const CircleBox = styled.View`
position: absolute;
top: ${({ top }) => `${top}%`};
left: ${({ left }) => `${left}%`};
z-index: -99999;
`

const BoxShadow = styled.View`
    background-color: ${AppColors.black};
    width: ${({ circunference }) => `${circunference}px`};
    height: ${({ circunference }) => `${circunference}px`};
    position: absolute;
    z-index: -9999;
    bottom: -3px;
    left: 3%;
    border-radius: 9999px;
`

export default function AppCircle({ circunference = 94, backgroundColor, top = 0, left = 0 }) {
    return (
        <CircleBox top={top} left={left}>
            <Circle circunference={circunference} backgroundColor={backgroundColor}/>
            <BoxShadow circunference={circunference}/>
        </CircleBox>
    )
}