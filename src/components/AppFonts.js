import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { AppColors } from "../utils/Pallete";

export const FontFamily = {
    archivoBold: 'Archivo_700Bold',
    archivoMedium: 'Archivo_500Medium',
    archivoRegular: 'Archivo_400Regular',
    archivoExtraBold: 'Archivo_800ExtraBold',
    archivoBlack: 'Archivo_900Black'
}

export const TitleExtraLarge = styled.Text`
  font-family: ${FontFamily.archivoExtraBold};
  font-size: ${({ size = 32 }) => `${size}px`};
  color: ${({ color = AppColors.altBlack }) => color};
  text-align: ${({ textAlign = 'auto' }) => textAlign};
`;

export const TitleBlack = styled.Text`
font-family: ${FontFamily.archivoBlack};
font-size: ${({ size = 16 }) => `${size}px`};
color: ${({ color = AppColors.black }) => color};
text-align: ${({ textAlign = 'auto' }) => textAlign};
`

export const H1 = styled.Text`
font-family: ${FontFamily.archivoBold};
font-size: ${({ size = 24 }) => `${size}px`};
color: ${({ color = AppColors.altBlack }) => color};
text-align: ${({ textAlign = 'auto' }) => textAlign};
`
export const H2 = styled.Text`
font-family: ${FontFamily.archivoBold};
font-size: ${({ size = 20 }) => `${size}px`};
color: ${({ color = AppColors.altBlack }) => color};
text-align: ${({ textAlign = 'auto' }) => textAlign};
`
export const H3 = styled.Text`
font-family: ${FontFamily.archivoBold};
font-size: ${({ size = 16 }) => `${size}px`};
color: ${({ color = AppColors.altGray }) => color};
text-align: ${({ textAlign = 'auto' }) => textAlign};
`

export const BodyLarge = styled.Text`
font-family: ${FontFamily.archivoMedium};
font-size: ${({ size = 16 }) => `${size}px`};
color: ${({ color = AppColors.gray30 }) => color};
text-align: ${({ textAlign = 'auto' }) => textAlign};
`

export const BodyMedium = styled.Text`
font-family: ${FontFamily.archivoMedium};
font-size: ${({ size = 14 }) => `${size}px`};
color: ${({ color = AppColors.gray30 }) => color};
text-align: ${({ textAlign = 'auto' }) => textAlign};
`

export const BodySmall = styled.Text`
font-family: ${FontFamily.archivoMedium};
font-size: ${({ size = 12 }) => `${size}px`};
color: ${({ color = AppColors.gray30 }) => color};
text-align: ${({ textAlign = 'auto' }) => textAlign};
`
export const DualTextWithShadow = ({ primaryText, secondaryText, primaryTextStyle = 'TitleBlack', secondaryTextStyle = 'BodyLarge',...props }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <View style={{ position: 'absolute', zIndex: 1, left: 1}}>
        <TitleBlack {...props} style={[secondaryTextStyle]}>
          {secondaryText}
        </TitleBlack>
      </View>

      <View style={{ position: 'relative', zIndex: 2 }}>
        <TitleBlack {...props} style={[primaryTextStyle]}>
          {primaryText}
        </TitleBlack>
      </View>
    </View>
  );
};
