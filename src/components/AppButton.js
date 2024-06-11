import React from 'react'
import styled from 'styled-components/native'
import { AppColors } from '../utils/Pallete'
import { H3, TitleBlack } from './AppFonts'
import { ActivityIndicator } from 'react-native'
import { Flex } from '../utils/AppEnums'


export const Button = styled.TouchableOpacity`
    width: ${({ width }) => width || '100%'};
    padding-left: ${({ justifyContent }) => justifyContent != Flex.center ? '5px' : '0px'};
    height: 45px;
    z-index: 9999;
    background-color: ${({ isOutlined = false, isDisabled = false, mainColor }) => isDisabled ? AppColors.gray20 : isOutlined ? AppColors.white : mainColor};
    border-color: ${AppColors.black};
    border-width: 1px ;
    border-radius: ${({ borderRadius = 9999 }) => `${borderRadius}px`};
    align-items: center;
    justify-content: ${({ justifyContent }) => justifyContent};
    flex-direction: row;
    gap: 10px;
    flex: ${({ flex = '0 1 auto' }) => flex};
`

const BoxShadow = styled.View`
    background-color: ${AppColors.black};
    width: ${({ width }) => width || '100%'};
    height: 45px;
    border-radius: ${({ borderRadius = 9999 }) => `${borderRadius}px`};
    position: absolute;
    bottom: -3px;
    left: 0.6%;
`

const ButtonBox = styled.View`
    width: ${({ width }) => width || '100%'};
`

export default function AppButton({
    label,
    isDisabled = false,
    isLoading = false,
    AppSvgIcon,
    onTap,
    flex,
    mainColor = AppColors.yellow,
    mainTextColor = AppColors.black,
    borderRadius,
    width,
    FontStyle = TitleBlack,
    justifyContent = Flex.center
}) {
    return (
        <ButtonBox width={width}>
            <Button
                onPress={onTap}
                flex={flex}
                activeOpacity={0.9}
                disabled={isLoading || isDisabled}
                isDisabled={isLoading || isDisabled}
                mainColor={mainColor}
                borderRadius={borderRadius}
                width={width}
                justifyContent={justifyContent}
            >
                {isLoading ? <ActivityIndicator color={mainTextColor} /> :

                    <>
                        {AppSvgIcon ? AppSvgIcon : null}
                        <FontStyle
                            color={mainTextColor}
                        >{label}</FontStyle>
                    </>

                }

            </Button>
            <BoxShadow width={width} borderRadius={borderRadius} />
        </ButtonBox>
    )
}