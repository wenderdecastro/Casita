import React from "react";
import { View } from "react-native";
import TextStroke from "./AppTextShadow"; // Certifique-se de que o caminho para TextStroke está correto
import { TitleBlack } from "./AppFonts";// Assumindo que TitleBlack é um componente que você tem
import { AppColors } from "../utils/Pallete";

const DualTextWithShadowAndStroke = ({
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

export default DualTextWithShadowAndStroke;