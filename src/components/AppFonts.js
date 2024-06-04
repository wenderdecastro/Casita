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

export const Link = styled.Text`
    font-family: ${FontFamily.archivoMedium};
    text-decoration: ${({ textDecoration = TextDecoration.underline }) => textDecoration};
    color: ${({ color = AppColors.blue }) => color};
    font-size: ${({ size = 14 }) => `${size}px`};
`

export const DualTextWithShadow = ({
  primaryText,
  secondaryText,
  primaryTextStyle = {},
  secondaryTextStyle = {},
  rotate = 0, 
  position = 'static', 
  left = 0,
  top = 0, 
  zIndex = -1,
  marginBottom = 10, // Adicionando propriedade para controle do marginBottom
...props
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: position, 
        transform: [{ rotate: `${rotate}deg` }], 
        left: left, 
        top: top,
        zIndex: 1,
        marginBottom: marginBottom, // Aplicando o marginBottom definido
      }}
      {...props}
    >
      <View
        style={{
          position: 'absolute',
          zIndex: 1,
          left: 0,
        }}
      >
        <TitleBlack {...props} style={[secondaryTextStyle]}>
          {secondaryText}
        </TitleBlack>
      </View>

      <View
        style={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <TitleBlack {...props} style={[primaryTextStyle]}>
          {primaryText}
        </TitleBlack>
      </View>
    </View>
  );
};

export const DualTextWithShadowAndStroke = ({
  primaryText,
  secondaryText,
  primaryTextStyle = {},
  secondaryTextStyle = {},
  rotate = 0,
  position = 'static',
  left = 0,
  top = 0,
  zIndex = -1,
  marginBottom = 10,
  color = "#000", // Cor padrão para a borda
  stroke = 1, // Espessura padrão da borda
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
        marginBottom: marginBottom,
      }}
      {...props}
    >
      <View
        style={{
          position: 'absolute',
          zIndex: 1,
          left: 5,
          top: 3,
        }}
      >
        <TitleBlack {...props} style={[secondaryTextStyle]}>
          {secondaryText}
        </TitleBlack>
      </View>

      {/* Aqui é onde aplicamos o TextStroke ao texto primário */}
      <View
        style={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <TextStroke color={color} stroke={stroke}>
          <TitleBlack {...props} style={[primaryTextStyle]} color={AppColors.green}>
            {primaryText}
          </TitleBlack>
        </TextStroke>
      </View>
    </View>
  );
};


