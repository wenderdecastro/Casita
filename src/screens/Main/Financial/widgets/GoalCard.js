import { Image, Text, View } from "react-native";
import { AppColors } from "../../../../utils/Pallete";
import ContainerShadow from "./ContainerShadow";
import { AppAssets } from "../../../../../assets/AppAssets";
import { Row } from "../../../../components/AppContainers";
import { BodyMedium, H1, TitleBlack } from "../../../../components/AppFonts";
import styled from "styled-components";
import { Gap } from "../../../../components/AppSpecialComponents";
import ProgressBarShadow from "./ProgressBarShadow";
import ProgressCardWidget from "../../widgets/ProgressCardWidget";
import AppTextWithStroke from "../../../../components/AppTextWithStroke";

const ViewInfo = styled.View`
  width: 61%;
`;

const ButtonAddFunds = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 50;
  
`;

export default function GoalCard({
  moneyLeftToGoal = 1000,
  progressPercentage,
  total = 5000,
  progressMoney = 4000,
  onPress,
}) {
  return (
    <ContainerShadow
      backgroundColor={AppColors.background}
      left={1}
      bottom={-4}
      width={"100%"}
      height={150}
      Content={
        <>
          <Row>
            <ContainerShadow
              backgroundColor={AppColors.white}
              width={"80px"}
              height={80}
              bottom={-5}
              left={2}
              Content={
                <Image
                  source={AppAssets.steamDeckImage}
                  style={{
                    flex: 1,
                    height: 55,
                    width: 70,
                    resizeMode: "contain",
                  }}
                />
              }
            />
            <Gap width={13} />
            <ViewInfo>
              <TitleBlack>STEAM DECK</TitleBlack>
              <Row width={"100%"} justifyContent={"space-between"}>
                <BodyMedium color={AppColors.black}>FALTAM:</BodyMedium>
                <BodyMedium color={AppColors.black}>
                  R$ {moneyLeftToGoal}
                </BodyMedium>
              </Row>
              <Row>
                <ProgressBarShadow
                  ProgressText={"Yes"}
                  BarWidth="83%"
                  actualProgressColor={AppColors.blue}
                  actualProgress={75}
                />
              </Row>
              <Row width={"100%"} justifyContent={"space-between"}>
                <AppTextWithStroke
                  text={`R$ ${progressMoney},00`}
                  fontSize={14}
                  shadowTop={5}
                  shadowLeft={1.5}
                />
                <AppTextWithStroke
                  text={`R$ ${total},00`}
                  fontSize={14}
                  shadowTop={5}
                  shadowLeft={1.5}
                />
              </Row>
            </ViewInfo>
          </Row>

          <ContainerShadow
            width={"88%"}
            height={35}
            backgroundColor={AppColors.white}
            borderRadius={100}
            bottom={-7}
            left={1}
            Content={
              <ButtonAddFunds onPress={onPress}>
                <Row width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
                    
                  <AppTextWithStroke
                    
                    text={`$`}
                    textColor={AppColors.green}
                    fontSize={25}
                    shadowTop={5}
                    shadowLeft={1.5}
                    marginBottom={10}
                    top={-3}
                    left={8}
                  />

                  <BodyMedium color={AppColors.black} size={14}>
                    Modificar fundos
                  </BodyMedium>
                  <Gap width={10}/>
                </Row>
              </ButtonAddFunds>
            }
          />
        </>
      }
    />
  );
}
