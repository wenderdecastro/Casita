import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import { FontFamily, H1 } from './AppFonts'
import { AppColors } from '../utils/Pallete'
import TextStroke from './AppTextShadow'

const ShadowBox = styled.View`
    position: absolute;
    top: ${({ top }) => `${top}%`};
    left: ${({ left }) => `${left}%`};
    z-index: -9999;
`

export default function AppTextWithStroke({
    text,
    fontSize = 16,
    FontStyle = H1,
    stroke = 1,
    textColor = AppColors.white,
    shadowTop = 5,
    shadowLeft = 5
}) {
    return (
        <View>
            <TextStroke stroke={stroke} color={AppColors.black}>
                <FontStyle style={{
                    fontSize: fontSize,
                    color: textColor,
                    letterSpacing: 1
                }}>{` ${text} `}</FontStyle>
            </TextStroke>
            <ShadowBox top={shadowTop} left={shadowLeft}>
                <TextStroke stroke={stroke} color={AppColors.black}>
                    <FontStyle style={{
                        fontSize: fontSize,
                        color: AppColors.black,
                        fontFamily: FontFamily.archivoExtraBold,
                        letterSpacing: .5
                    }}>
                        {` ${text} `}
                    </FontStyle>
                </TextStroke>
            </ShadowBox>
        </View >
    )
}