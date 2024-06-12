import styled from "styled-components";

import { Image, View } from "react-native";
import { AppAssets } from "../../../../../assets/AppAssets";
import { Row } from "../../../../components/AppContainers";
import { BodyLarge } from "../../../../components/AppFonts";
import { AppColors } from "../../../../utils/Pallete";
import AppTextWithStroke from "../../../../components/AppTextWithStroke";
import ContainerShadow from "./ContainerShadow";

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
  width: ${({ width }) => `${width}`};
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

const ViewBox = styled.View`
  width: 100%;
`;

const ViewInfo = styled.View`
  width: auto;
  height: 100%;
  left: 3%;
  position: absolute;
  z-index: 1;
`;

const ViewSpent = styled.View`
  align-items: center;
`;

export default function SpentBoxHistory({
  width = "100%",
  height = 131,
  backgroundColor,
  Content,
  marginTop,
  bottom = -3,
  left = 2,
  shadow = false,
  total = 100,
  actualProgress = 80,
  spent = 270,
  limit = 300,
  actualProgressColor = AppColors.red,
}) {
  const progressPercentage = (actualProgress / total) * 100;
  return (
    <ViewBox>
      <BoxIncome width={width} height={height} marginTop={marginTop}>
        <ViewIncome backgroundColor={backgroundColor}></ViewIncome>

        <ProgressBar
          progress={progressPercentage}
          progressBarColor={actualProgressColor}
        />

        <ViewInfo>
          <Row alignItems={"center"}>
            <ViewSpent>
              <AppTextWithStroke
                text={`${spent},00`}
                fontSize={24}
                shadowTop={4}
                shadowLeft={3}
              />
              <ContainerShadow
                width={"90px"}
                height={3}
                backgroundColor={AppColors.white}
                borderRadius={0}
              />
              <AppTextWithStroke
                text={`${limit},00`}
                fontSize={24}
                shadowTop={4}
                shadowLeft={3}
              />
            </ViewSpent>
            {actualProgress == 100 ? (
              <AppTextWithStroke
                text={`${progressPercentage}%`}
                fontSize={80}
                shadowTop={4}
                shadowLeft={0}
              />
            ) : (
              <AppTextWithStroke
                text={`${progressPercentage}%`}
                fontSize={96}
                shadowTop={4}
                shadowLeft={2}
              />
            )}
          </Row>
        </ViewInfo>

        {shadow == true ? <BoxShadow bottom={bottom} left={left} /> : <></>}
      </BoxIncome>
    </ViewBox>
  );
}
