import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { AppColors } from "../utils/Pallete";
import { TextDecoration } from "../utils/AppEnums";
import TextStroke from "./AppTextShadow";

export const FontFamily = {
  archivoBold: 'Archivo_700Bold',
  archivoMedium: 'Archivo_500Medium',
  archivoRegular: 'Archivo_400Regular',
  archivoExtraBold: 'Archivo_800ExtraBold',
  archivoBlack: 'Archivo_900Black',
  archivoSemiBold: 'Archivo_600SemiBold',
}

export const TitleExtraLarge = styled.Text`
  font-family: ${FontFamily.archivoExtraBold};
  font-size: ${({ size = 32 }) => `${size}px`};
  color: ${({ color = AppColors.altBlack }) => color};
  text-align: ${({ textAlign = 'auto' }) => textAlign};
  text-decoration: ${({ textDecoration = TextDecoration.none }) => textDecoration};
`;

export const TitleBlack = styled.Text`
  font-family: ${FontFamily.archivoBlack};
  font-size: ${({ size = 16 }) => `${size}px`}; 
  color: ${({ color = AppColors.black }) => color}; 
  text-align: ${({ textAlign = 'auto' }) => textAlign};
`;

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
text-decoration: ${({ textDecoration = TextDecoration.none }) => textDecoration};
`

export const BodySmall = styled.Text`
font-family: ${FontFamily.archivoMedium};
font-size: ${({ size = 12 }) => `${size}px`};
color: ${({ color = AppColors.gray30 }) => color};
text-align: ${({ textAlign = 'auto' }) => textAlign};
`

export const TextSemiBold = styled.Text`
font-family: ${FontFamily.archivoSemiBold};
font-size: ${({ size = 16 }) => `${size}px`};
color: ${({ color = AppColors.black }) => color};
text-align: ${({ textAlign = 'auto' }) => textAlign};
`

export const Link = styled.Text`
    font-family: ${FontFamily.archivoMedium};
    text-decoration: ${({ textDecoration = TextDecoration.underline }) => textDecoration};
    color: ${({ color = AppColors.blue }) => color};
    font-size: ${({ size = 14 }) => `${size}px`};
`

const TextStrokeShadow = ({
  text,
  fontSize = 16,
  primaryColor = "#000",
  rotate = 0,
  position = 'static',
  left = 0,
  top = 0,
  zIndex = -1,
  stroke = 1,
  color = "#000",
  shadowLeft = 5,
  shadowTop = 3,
  ...props
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'static',
        transform: [{ rotate: `${rotate}deg` }],
        left: left,
        top: top,
        zIndex: zIndex,
      }}
      {...props}
    >
      <View
        style={{
          position: 'absolute',
          zIndex: 1,
          left: shadowLeft,
          top: shadowTop,
        }}
      >
        <TitleBlack size={fontSize} color={AppColors.black}>
          {text}
        </TitleBlack>
      </View>

      <View
        style={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <TextStroke color={color} stroke={stroke}>
          <TitleBlack fontSize={fontSize} color={primaryColor}>
            {text}
          </TitleBlack>
        </TextStroke>
      </View>
    </View>
  );
};

export default TextStrokeShadow;
