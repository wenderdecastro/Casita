import styled from "styled-components";
import { AppColors } from "../../../../utils/Pallete";
import AppTextWithStroke from "../../../../components/AppTextWithStroke";
import { BodyLarge } from "../../../../components/AppFonts";
import { Image, View } from "react-native";
import { Row } from "../../../../components/AppContainers";
import { AppAssets } from "../../../../../assets/AppAssets";

const ViewIncome = styled.View`
  background-color: ${({ backgroundColor = AppColors.white }) =>
    backgroundColor};
  width: 100%;
  height: 100%;
  border-radius: 15px;
  border-width: 1px;
  border-color: ${AppColors.black};
  justify-content: center;
  align-items: center;
`;

const BoxShadow = styled.View`
  background-color: ${AppColors.black};
  border-radius: 15px;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: -7%;
  left: 1.5%;
  z-index: -9999;
`;

const BoxIncome = styled.View`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  margin-top: ${({ marginTop }) => `${marginTop}px`};
  flex-direction: column-reverse;
`;

const ProgressBar = styled.View`
  width: 100%;
  height: ${({ progress = 0 }) => `${progress}%`};
  border-radius: 10px;
  border-color: ${AppColors.altBlack};
  border-width: 1px;
  background-color: ${({ progressBarColor }) => progressBarColor};
  position: absolute;
`;

const ViewNumber = styled.View`
  width: auto;
  height: 100%;
  position: absolute;
  bottom: -25%;
  left: 2%;
  z-index: 1;
`;

export default function SpentBox({
  width = 100,
  height = 131,
  backgroundColor,
  Content,
  marginTop,
  bottom = -3,
  left = 2,
  Shadow = false,
  total = 100,
  actualProgress = 80,
  Limit = 30,
  actualProgressColor = AppColors.red,
  title = "Contas",
  star = 'red',
}) {
  const progressPercentage = (actualProgress / total) * 100;
  return (
    <View>
      <BoxIncome width={width} height={height} marginTop={marginTop}>
        <ViewIncome backgroundColor={backgroundColor}></ViewIncome>

        <ProgressBar
          progress={progressPercentage}
          progressBarColor={actualProgressColor}
        />
        <ViewNumber>
          <AppTextWithStroke
            text={`R$ ${Limit}`}
            fontSize={24}
            shadowTop={6}
            shadowLeft={5}
          />
        </ViewNumber>
        {Shadow == true ? <BoxShadow bottom={bottom} left={left} /> : <></>}
      </BoxIncome>
      <Row>
        {
            star == 'red' ? (
                <Image
                style={{
                    height: 27,
                    width: 20,
                    resizeMode: "contain",
                }}
                source={AppAssets.smallRedStarFinance}
                />
            ) : star == 'yellow' ? (                
                <Image
                    style={{
                        height: 27,
                        width: 20,
                        resizeMode: "contain",
                    }}
                    source={AppAssets.smallYellowStarFinance}
                />) : (
                    <Image
                        style={{
                            height: 27,
                            width: 20,
                            resizeMode: "contain",
                        }}
                        source={AppAssets.smallGreenStarFinance}
                    />
                )
        }
        <BodyLarge size={18} color={AppColors.black}>
          {title}
        </BodyLarge>

      </Row>
    </View>
  );
}
