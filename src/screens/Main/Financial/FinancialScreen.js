import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { AppContainer, Row } from "../../../components/AppContainers";
import { AppColors } from "../../../utils/Pallete";
import {
  BodyLarge,
  DualTextWithShadow,
  TextSemiBold,
  TitleBlack,
} from "../../../components/AppFonts";
import Income from "./widgets/Income";
import { AppAssets } from "../../../../assets/AppAssets";
import ContainerShadow from "./widgets/ContainerShadow";
import styled from "styled-components";
import AppTextWithStroke from "../../../components/AppTextWithStroke";
import { Flex } from "../../../utils/AppEnums";
import { Gap } from "../../../components/AppSpecialComponents";
import ProgressBarShadow from "./widgets/ProgressBarShadow";
import SpentBox from "./widgets/SpentBox";
import AppSvgIcon, { AppIconName } from "../../../../assets/Icons";
import SpentModal from "./dialogs/SpentModal";
import { AppNavigation, AppRoutesKeys } from "../../../utils/AppRoutes/AppRoutesUtils";
import { useRoute } from "@react-navigation/native";
import api, { GetFinancial } from "../../../services/ApiService";

const ViewCards = styled.View`
  width: 100%;
`;

const ViewContentCard = styled.View`
  width: 86%;
`;

const FixedButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${AppColors.green};
  border-radius: 9999px;
  border-width: 1px;
  border-color: ${AppColors.black};
  position: absolute;
  bottom: 100px;
  right: 20px;
  z-index: 1;
`;

const FixedButtonShadow = styled.View`
  padding: 15px;
  background-color: ${AppColors.black};
  border-radius: 9999px;
  border-width: 1px;
  border-color: ${AppColors.black};
  position: absolute;
  bottom: 99px;
  right: 18px;
  z-index: 0;
`;

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

const InputContainer = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default function FinancialScreen({ navigation, route }) {
  const [spentModalIsVisible, setSpentModalIsVisible] = useState(false);
  const { params } = useRoute()

  const [data, setData] = useState([])

  const [Necessities, setNecessities] = useState({})
  const [Wishes, setWishes] = useState({})
  const [Economies, setEconomies] = useState({})



  const [isLoading, setIsLoading] = useState(true)

  async function getFinancial() {
    setIsLoading(true)
    await api.get(GetFinancial, {
      params: {
        idUser: params.userData.id
      }
    })
      .then(response => {
        console.log(response.data);
        setData(response.data)

        console.log(data);
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
   
      getFinancial()
    
   
  }, [])

  useEffect(() => {
    if (data != null && data != undefined) {
      console.log("data");
      console.log(data);
      setIsLoading(false)
      console.log(params.userData);
    }

  }, [data])


  

  return (
    <>
      {isLoading == true ? <ActivityIndicator color={AppColors.black} size={60} /> :
        <>
          <ScrollContainer>
            <AppContainer
              justifyContent={isLoading ? Flex.auto : Flex.flexStart}
              // justifyContent={Flex.auto}
              backgroundColor={AppColors.background}
            >
              <TitleBlack size={20}>SALDO ATUAL</TitleBlack>
              <TitleBlack size={32}>R$ {route.params.userData.balance}</TitleBlack>

              <Row width={"100%"} justifyContent={Flex.center}>
                <View>
                  <TouchableOpacity
                    onPress={() => AppNavigation.push(navigation, AppRoutesKeys.historyScreen, { userData: params.userData })}
                  >
                    <AppTextWithStroke
                      text={"Ver histórico"}
                      shadowTop={10}
                      shadowLeft={5}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Image
                    source={AppAssets.arrowRight}
                    style={{
                      flex: 1,
                      height: 19,
                      width: 22,
                      resizeMode: "contain",
                    }}
                  />
                </View>
              </Row>

              <Gap height={12} />

              <ContainerShadow
                width={"100%"}
                height={51}
                marginTop={20}
                bottom={-8}
                left={1.2}
                Content={
                  <InputContainer
                    onPress={() => navigation.replace(AppRoutesKeys.goalsScreen)}
                  >
                    <TitleBlack size={20}>MINHAS METAS</TitleBlack>
                  </InputContainer>
                }
              />

              <Gap height={25} />

              <ViewCards>
                {/* <TitleBlack textAlign={"start"} size={20}>
              CARTÕES
            </TitleBlack>
            <ContainerShadow
              width={"100%"}
              height={189}
              marginTop={20}
              backgroundColor={AppColors.white}
              bottom={-3}
              left={1.3}
              Content={
                <ViewContentCard>
                  <TitleBlack size={20}>CARTÃO DE CRÉDITO</TitleBlack>
                  <Row gap={15}>
                    <Image
                      style={{
                        height: 27,
                        width: 27,
                        resizeMode: "contain",
                      }}
                      source={AppAssets.fourPointGreenStar}
                    />

                    <BodyLarge color={AppColors.black}>
                      Saldo em conta
                    </BodyLarge>
                    <Gap width={79} />
                    <TextSemiBold>24/09</TextSemiBold>
                  </Row>

                  <Gap height={18} />

                  <ProgressBarShadow />

                  <Gap height={5} />

                  <Row justifyContent={Flex.spaceBetween}>
                    <TextSemiBold>R$ 45,00</TextSemiBold>
                    <TextSemiBold> / </TextSemiBold>
                    <TextSemiBold>R$ 90,00</TextSemiBold>
                  </Row>

                  <Gap height={20} />

                  <Row justifyContent={Flex.spaceBetween}>
                    <TextSemiBold>Limite total</TextSemiBold>
                    <TextSemiBold>R$ 1200,00</TextSemiBold>
                  </Row>
                </ViewContentCard>
              }
            />

            <Gap height={40} /> */}

                <TitleBlack textAlign={"start"} size={20}>
                  QUANTO POSSO GASTAR?
                
                </TitleBlack>
                

                <Row width={"100%"} justifyContent={"space-between"}>
                  <SpentBox
                    Limit={data ?  0 : data[0].totalAmount - data[0].amountSpent
                    }
                    width={165}
                    leftText={"10%"}
                    textSize={40}
                    Shadow={true}
                    textShadowLeft={3}
                    star={"red"}
                    actualProgressColor={AppColors.red}
                    actualProgress={
                      data ? 0 :
                        data[0].amountSpent == 0 ? 0 :
                          ((data[0].totalAmount / data[0].amountSpent) * 100).toFixed()
                    }
                  />
                  <SpentBox
                    Limit={data ? 0 : data[1].totalAmount - data[1].amountSpent}
                    width={165}
                    leftText={"10%"}
                    textSize={40}
                    Shadow={true}
                    textShadowLeft={3}
                    star={"yellow"}
                    actualProgressColor={AppColors.yellow}
                    actualProgress={data ? 0 :
                      data[1].amountSpent == 0 ? 0 :
                        ((data[1].totalAmount / data[1].amountSpent) * 100).toFixed()}
                  />
                </Row>
              </ViewCards>
              <Gap height={15} />

              <ContainerShadow
                width={"100%"}
                height={"132"}
                justifyContent={"start"}
                alignItens={"center"}
                Content={
                  <>
                    <ContainerShadow
                      height={"47"}
                      width={"100%"}
                      bottom={-9}
                      backgroundColor={AppColors.white}
                      Content={
                        <TitleBlack size={20}>DINHEIRO ECONOMIZADO</TitleBlack>
                      }
                    />

                    <AppTextWithStroke
                      text={data ? 0 : data[2].amountSpent}
                      fontSize={64}
                      shadowTop={3}
                      shadowLeft={0.4}
                    />
                  </>
                }
              />

              <Gap height={200} />
            </AppContainer>
          </ScrollContainer>
          <SpentModal
            onClose={() => {
              setSpentModalIsVisible(false);
            }}
            visible={spentModalIsVisible}
          />

          <FixedButton
            activeOpacity={0.9}
            onPress={() => {
              setSpentModalIsVisible(true);
            }}
          >
            <AppSvgIcon name={AppIconName.add} />
          </FixedButton>
          <FixedButtonShadow>
            <AppSvgIcon name={AppIconName.add} />
          </FixedButtonShadow>
        </>}
    </>
  );
}
