import React from 'react'
import styled from 'styled-components/native'
import { AppColors } from '../utils/Pallete'
import { H1, H2, H3 } from './AppFonts'
import { ActivityIndicator } from 'react-native'



export const LinkTouchableOpacity = styled.TouchableOpacity`
        align-self: ${({ alignSelf = 'auto' }) => alignSelf};
        justify-self: ${({ justifySelf = 'auto' }) => justifySelf};;
`

export function LinkButton({ text, color, size, alignSelf, onTap, textDecoration, justifySelf }) {
    return (
        <LinkTouchableOpacity onPress={onTap} alignSelf={alignSelf} justifySelf={justifySelf}>
            <Link color={color} size={size} textDecoration={textDecoration} >
                {text}
            </Link>
        </LinkTouchableOpacity>

    );
}

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    z-index: 9999;
    background-color: ${({ isOutlined = false, isDisabled = false, mainColor }) => isDisabled ? AppColors.gray20 : isOutlined ? AppColors.white : mainColor};
    border-color: ${AppColors.black};
    border-width: 2px ;
    border-radius: 9999px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 27px;
    flex: ${({ flex = '0 1 auto' }) => flex};
`

const BoxShadow = styled.View`
    background-color: ${AppColors.black};
    width: 100%;
    height: 40px;
    border-radius: 9999px;
    position: absolute;
    bottom: -4px;
    left: 1.25%;
`

const ButtonBox = styled.View`
    width: 100%;
`

export default function AppButton({
    textButton,
    isDisabled = false,
    isLoading = false,
    SvgIcon,
    onTap,
    flex,
    mainColor = AppColors.yellow,
    mainTextColor = AppColors.black
}) {
    return (
        <ButtonBox>
        <Button
            onPress={onTap}
            flex={flex}
            activeOpacity={0.9}
            disabled={isLoading || isDisabled}
            isDisabled={isLoading || isDisabled}
            mainColor={mainColor}
        >
            {isLoading ? <ActivityIndicator color={isOutlined ? AppColors.secondary : AppColors.white} /> :

                <>
                    {SvgIcon ? SvgIcon : null}
                    <H3
                        color={mainTextColor}
                    >{textButton}</H3>
                </>

            }

        </Button>
        <BoxShadow/>
        </ButtonBox>
    )
}