import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import { AppColors } from '../../utils/Pallete'

const Square = styled.View`
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
    background-color: ${({ backgroundColor = AppColors.red }) => backgroundColor};
    border-width: 1px;
    border-color: ${AppColors.black};
`

const SquareBox = styled.View`
transform: ${({ rotate = 0 }) => `rotate(${rotate}deg)`};
position: absolute;
top: ${({ top }) => `${top}%`};
left: ${({ left }) => `${left}%`};
z-index: -99999;
`
const BoxShadow = styled.View`
    background-color: ${AppColors.black};
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
    position: absolute;
    z-index: -9999;
    bottom: -3px;
    left: 3%;
`

export default function AppSquare({
    width = 94,
    height = 94,
    backgroundColor,
    rotate,
    top = 0,
    left = 0,
}) {
    return (
        <SquareBox rotate={rotate} top={top} left={left}>
            <Square width={width} height={height} backgroundColor={backgroundColor} />
            <BoxShadow width={width} height={height} />
        </SquareBox>
    );
}