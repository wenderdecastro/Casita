import React from 'react'
import styled from 'styled-components/native'
import { AppColors } from '../utils/Pallete'
import { H3, TitleBlack } from './AppFonts'
import { ActivityIndicator } from 'react-native'


export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 45px;
    z-index: 9999;
    background-color: ${({ isOutlined = false, isDisabled = false, mainColor }) => isDisabled ? AppColors.gray20 : isOutlined ? AppColors.white : mainColor};
    border-color: ${AppColors.black};
    border-width: 1px ;
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
    height: 45px;
    border-radius: 9999px;
    position: absolute;
    bottom: -3px;
    left: 0.6%;
`

const ButtonBox = styled.View`
    width: 100%;
`

export default function AppButton({
    label,
    isDisabled = false,
    isLoading = false,
    AppSvgIcon,
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
            {isLoading ? <ActivityIndicator color={AppColors.white} /> :

                <>
                    {AppSvgIcon ? AppSvgIcon : null}
                    <TitleBlack
                        color={mainTextColor}
                    >{label}</TitleBlack>
                </>

            }

        </Button>
        <BoxShadow/>
        </ButtonBox>
    )
}