import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { AppColors } from "../../../utils/Pallete";
import { AppContainer, Column, Row } from "../../../components/AppContainers";
import {
  BodyLarge,
  BodyMedium,
  FontFamily,
  H3,
  TitleBlack,
} from "../../../components/AppFonts";
import { PositionedImage } from "../../../components/AppContainers";
import { AppAssets } from "../../../../assets/AppAssets";
import { Flex } from "../../../utils/AppEnums";
import AppInput from "../../../components/AppInput";
import AppButton from "../../../components/AppButton";
import { Gap } from "../../../components/AppSpecialComponents";
import AppTextWithStroke from "../../../components/AppTextWithStroke";
import { useRoute } from "@react-navigation/native";
import {
  AppNavigation,
  AppRoutesKeys,
} from "../../../utils/AppRoutes/AppRoutesUtils";
import CurrencyInput from "react-native-currency-input";
import api, { UserPath } from "../../../services/ApiService";

export default function ProfileScreen({ navigation }) {
  const { params } = useRoute();
  const [mail, setMail] = useState();
  const [income, setIncome] = useState();

  function GoToNewPassword() {
    AppNavigation.push(
      navigation,
      AppRoutesKeys.recoveryPasswordInsertNewPasswordEscreen,
      { mail, screenType: "Profile" }
    );
  }

  async function ChangeIncome() {
    console.log(income);
    console.log(params.userData.id);
    try {
      await api.patch(`${UserPath}?userId=${params.userData.id}`, {
        monthlyIncome: income,
      }).then(response => {
        console.log(response);
      })
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log(params);
    setMail(params.userData.email);
  }, []);
  return (
    <ScrollView>
      <AppContainer
        backgroundColor={AppColors.background}
        justifyContent={Flex.auto}
      >
        <Row width={"100%"} alignItems={"center"} justifyContent={"start"}>
          <PositionedImage source={AppAssets.eightPointGreenStarSmall} />
          <TitleBlack size={32} style={{ marginLeft: 12 }}>
            PERFIL
          </TitleBlack>
        </Row>

        <Gap height={30} />
        <Column
          width={"100%"}
          height={"220px"}
          justifyContent={"space-between"}
        >
          <H3 color={AppColors.black} size={24}>
            Informações pessoais
          </H3>
          <BodyMedium>
            Essa informação é particular e não será compartilhada com outras
            pessoas.
          </BodyMedium>
          <AppInput
            fontSize={"16px"}
            fontFamily={FontFamily.archivoMedium}
            label={"Email"}
            placeholder={params.userData.email}
            backgroundColor={AppColors.white}
          />
          <AppButton
            onTap={() => {
              GoToNewPassword();
            }}
            mainColor={AppColors.white}
            label={"ALTERAR SENHA"}
          />
        </Column>

        <Gap height={60} />
        <TitleBlack size={18} textAlign={"start"} style={{ width: "100%" }}>
          RENDA MENSAL
        </TitleBlack>
        <Gap height={20} />

        <Row
          alignItems={"center"}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <Column>
            <AppTextWithStroke text={" RENDA "} fontSize={20} shadowLeft={1} />
            <BodyLarge color={AppColors.black} style={{ marginLeft: 10 }}>
              Sua renda mensal
            </BodyLarge>
          </Column>

          <CurrencyInput
            value={income}
            onChangeValue={setIncome}
            renderTextInput={(textInputProps) => (
              <AppInput
              backgroundColor={AppColors.white}
              inputWidth={"120px"}
              borderRadius={10}
              placeholder={params.userData.monthlyIcome}
              textInputProps={textInputProps}
            />
            )}
            renderText
            prefix=""
            delimiter="."
            separator=","
            precision={2}
          />
        </Row>

        <Gap height={10} />
        <Row
          alignItems={"center"}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <Column>
            <AppTextWithStroke text={" CONTAS "} fontSize={20} shadowLeft={1} />
            <BodyLarge color={AppColors.black} style={{ marginLeft: 10 }}>
              Cartões, dividas, etc.
            </BodyLarge>
          </Column>
          <AppInput
            inputWidth={"120px"}
            placeholder={params.userData.necessities}
            isEditable={false}
            SuffixIcon={
              <PositionedImage
                position={"relative"}
                top={-18}
                source={AppAssets.percentage}
              />
            }
          />
        </Row>

        <Gap height={10} />
        <Row
          alignItems={"center"}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <Column>
            <AppTextWithStroke
              text={" DESEJOS "}
              fontSize={20}
              shadowLeft={1}
            />
            <BodyLarge color={AppColors.black} style={{ marginLeft: 10 }}>
              Seus gastos pessoais.
            </BodyLarge>
          </Column>
          <AppInput
            inputWidth={"120px"}
            placeholder={params.userData.wants}
            isEditable={false}
            SuffixIcon={
              <PositionedImage
                position={"relative"}
                top={-18}
                source={AppAssets.percentage}
              />
            }
          />
        </Row>

        <Gap height={10} />
        <Row
          alignItems={"center"}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <Column>
            <AppTextWithStroke
              text={" ECONIMIAS "}
              fontSize={20}
              shadowLeft={1}
            />
            <BodyLarge color={AppColors.black} style={{ marginLeft: 10 }}>
              Quanto deseja guardar.
            </BodyLarge>
          </Column>
          <AppInput
            inputWidth={"120px"}
            placeholder={params.userData.savings}
            isEditable={false}
            SuffixIcon={
              <PositionedImage
                position={"relative"}
                top={-18}
                source={AppAssets.percentage}
              />
            }
          />
        </Row>

        <Gap height={40} />
        <AppButton
          onTap={() => ChangeIncome()}
          mainColor={AppColors.white}
          label={"SALVAR"}
        />
        <Gap height={80} />
      </AppContainer>
    </ScrollView>
  );
}
