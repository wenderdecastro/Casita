import styled from "styled-components/native";
import { AppColors } from "../utils/Pallete";
import { Flex } from "../utils/AppEnums";

export const AppContainer = styled.SafeAreaView`
padding: ${({
    paddingTop = 20,
    paddingRight = 20,
    paddingBottom = 20,
    paddingLeft = 20 }) => `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `};
align-items: ${({ alignItems = Flex.center }) => alignItems};
justify-content: ${({ justifyContent = Flex.center }) => justifyContent};
background-color: ${({ backgroundColor = AppColors.red }) => backgroundColor};
flex: ${({ flex = 1 }) => flex};
width: 100%;
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
position: ${({position = 'absolute'}) => position};
top: ${({ top = 0 }) => `${top}%`};
left: ${({ left = 0 }) => `${left}%`};
transform: ${({ rotate = 0 }) => `rotate(${rotate}deg)`};
`