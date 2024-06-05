import { Image, Text, View } from "react-native";
import React from "react";
import { AppContainer, Row } from "../../../components/AppContainers";
import { AppColors } from "../../../utils/Pallete";
import { BodyLarge, DualTextWithShadow, TextSemiBold, TitleBlack } from "../../../components/AppFonts";
import Income from "./widgets/Income";
import { AppAssets } from "../../../../assets/AppAssets";
import ContainerShadow from "./widgets/ContainerShadow";
import styled from "styled-components";
import AppTextWithStroke from "../../../components/AppTextWithStroke";
import { Flex } from "../../../utils/AppEnums";
import { Gap } from "../../../components/AppSpecialComponents";
import ProgressBarShadow from "./widgets/ProgressBarShadow";

const ViewCards = styled.View`
  width: 100%;
`

const ViewContentCard = styled.View`
  width: 86%;
`

export default function FinancialScreen() {
  return (
    <AppContainer justifyContent={Flex.auto} backgroundColor={AppColors.background}>
      <TitleBlack size={20}>SALDO ATUAL</TitleBlack>
      <TitleBlack size={32}>R$ 3380,00</TitleBlack>

      <Row width={"100%"} justifyContent={Flex.center}>
        <View>
          <AppTextWithStroke
            text={"Ver histórico"}
            shadowTop={10}
            shadowLeft={5}
          />
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

      <Row width={"100%"} justifyContent={"space-between"}>
        <Income MoneyValue="330,00" />

        <Income
          MoneyValue="330,00"
          Title="Despesas"
          IconPath={AppAssets.redArrowDown}
        />
      </Row>

      <ContainerShadow
        width={"100%"}
        height={51}
        marginTop={20}
        Content={<TitleBlack size={20}>MINHAS METAS</TitleBlack>}
      />

      <Gap height={25}/>

      <ViewCards>
        <TitleBlack textAlign={"start"} size={20}>
          CARTÕES
        </TitleBlack>
        <ContainerShadow
          width={"100%"}
          height={189}
          marginTop={20}
          backgroundColor={AppColors.white}
          Content={
            <ViewContentCard>
              <TitleBlack size={20}>CARTÃO  DE CRÉDITO</TitleBlack>
              <Row gap={15}>
                <Image
                  style={{
                    height: 27,
                    width: 27,
                    resizeMode: "contain",
                  }}
                  source={AppAssets.fourPointGreenStar}
                />

                <BodyLarge color={AppColors.black}>Saldo em conta</BodyLarge>
                <Gap width={79}/>
                <TextSemiBold>24/09</TextSemiBold>
              </Row>
              
              <Gap height={18}/>
              <ProgressBarShadow/>
            </ViewContentCard>
          }
        />
      </ViewCards>
    </AppContainer>
  );
}
