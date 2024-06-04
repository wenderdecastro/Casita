import styled from "styled-components/native";
import { AppColors } from "../utils/Pallete";
import { TextDecoration } from "../utils/AppEnums";

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
`

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