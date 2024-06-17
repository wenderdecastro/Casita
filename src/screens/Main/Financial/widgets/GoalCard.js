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
import { AppUtils } from "../../../../utils/AppUtils";


const ViewInfo = styled.View`
  width: 65%;
`;

const ButtonAddFunds = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 50;
  
`;

const CardBox = styled.View`
  padding: 15px;
  width: 100%;
  border-width: 1px;
  border-color: ${AppColors.black};
  border-radius: 10px;
  background-color: ${AppColors.background};
`
const CardBoxShadow = styled.View`
  padding: 15px;
  width: 100%;
  border-width: 1px;
  border-color: ${AppColors.black};
  border-radius: 10px;
  background-color: ${AppColors.black};
  position: absolute;
  z-index: -9999;
  top: 4px;
  left: 3px;
`

export default function GoalCard({
  item,
  onPress,
}) {
  if (!item) {
    return null
  }
  return (
    <View>
      <CardBox>
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
                  source={{ uri: item.photoUrl }}
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
              <TitleBlack>{item.name}</TitleBlack>
              <Row width={"100%"} justifyContent={"space-between"}>
                <BodyMedium color={AppColors.black}>FALTAM:</BodyMedium>
                <BodyMedium color={AppColors.black}>
                  {AppUtils.formatNumToCurrency(item.totalAmount - item.amountSpent)}
                </BodyMedium>
              </Row>
              <Row>
                <ProgressBarShadow
                  ProgressText={"Yes"}
                  actualProgressColor={AppColors.blue}
                  actualProgress={item.amountSpent}
                  total={item.totalAmount}
                />
              </Row>
              <Row width={"100%"} justifyContent={"space-between"}>
                <AppTextWithStroke
                  text={AppUtils.formatNumToCurrency(item.amountSpent)}
                  fontSize={14}
                  shadowTop={5}
                  shadowLeft={1.5}
                />
                <AppTextWithStroke
                  text={AppUtils.formatNumToCurrency(item.totalAmount)}
                  fontSize={14}
                  shadowTop={5}
                  shadowLeft={1.5}
                />
              </Row>
            </ViewInfo>
          </Row>
          <Gap height={5} />
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
                  <Gap width={10} />
                </Row>
              </ButtonAddFunds>
            }
          />
        </>
      </CardBox>
      <CardBoxShadow>
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
                  source={{ uri: item.photoUrl }}
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
              <TitleBlack>{item.name}</TitleBlack>
              <Row width={"100%"} justifyContent={"space-between"}>
                <BodyMedium color={AppColors.black}>FALTAM:</BodyMedium>
                <BodyMedium color={AppColors.black}>
                  R$ {item.totalAmount - item.amountSpent}
                </BodyMedium>
              </Row>
              <Row>
                <ProgressBarShadow
                  ProgressText={"Yes"}
                  actualProgressColor={AppColors.blue}
                  actualProgress={item.amountSpent}
                  total={item.totalAmount}
                />
              </Row>
              <Row width={"100%"} justifyContent={"space-between"}>
                <AppTextWithStroke
                  text={`R$ ${item.amountSpent},00`}
                  fontSize={14}
                  shadowTop={5}
                  shadowLeft={1.5}
                />
                <AppTextWithStroke
                  text={`R$ ${item.totalAmount},00`}
                  fontSize={14}
                  shadowTop={5}
                  shadowLeft={1.5}
                />
              </Row>
            </ViewInfo>
          </Row>
          <Gap height={5} />
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
                  <Gap width={10} />
                </Row>
              </ButtonAddFunds>
            }
          />
        </>
      </CardBoxShadow>
    </View>
  );
}
