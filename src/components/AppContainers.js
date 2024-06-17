import styled from "styled-components/native";
import { AppColors } from "../utils/Pallete";
import { Flex } from "../utils/AppEnums";

export const AppContainer = styled.SafeAreaView`
padding: ${({
    paddingTop = 40,
    paddingRight = 20,
    paddingBottom = 20,
    paddingLeft = 20 }) => `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `};
align-items: ${({ alignItems = Flex.center }) => alignItems};
justify-content: ${({ justifyContent = Flex.center }) => justifyContent};
<<<<<<< HEAD
background-color: ${({backgroundColor = AppColors.red}) => backgroundColor};
=======
background-color: ${({ backgroundColor = AppColors.red }) => backgroundColor};
>>>>>>> 7db73e9fd61b5d4ce2d22e1b5b7b226f637a0c58
flex: ${({ flex = 1 }) => flex};
width: ${({ width = '100%' }) => `${width}`};
height: ${({ height = '100%' }) => `${height}`};
`

export const Column = styled.View`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    flex-direction: column;
    align-items: ${({ alignItems }) => alignItems};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-self: ${({ alignSelf }) => alignSelf};
`
export const Row = styled.View`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    flex-direction: row;
    flex-wrap: ${({ isWrap = false }) => isWrap ? 'wrap' : 'nowrap'};
    align-items: ${({ alignItems }) => alignItems};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-self: ${({ alignSelf }) => alignSelf};
    gap: ${({ gap = 0 }) => `${gap}px`};
`

export const PositionedImage = styled.Image`
position: ${({ position }) => position};
top: ${({ top = 0 }) => `${top}%`};
left: ${({ left = 0 }) => `${left}%`};
transform: ${({ rotate = 0 }) => `rotate(${rotate}deg)`};
z-index: -99999;
`