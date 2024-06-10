import { FlatList, Image, View } from "react-native";
import { AppContainer, Row } from "../../../components/AppContainers";
import { Flex } from "../../../utils/AppEnums";
import { AppColors } from "../../../utils/Pallete";
import LeadingButtonWidget from "../../Authentication/widgets/LeadingButtonWidget";
import { LeadingBox } from "../../Authentication/widgets/RecoveryPasswordContainer";
import { AppAssets } from "../../../../assets/AppAssets";
import { TitleBlack } from "../../../components/AppFonts";
import { Gap } from "../../../components/AppSpecialComponents";
import GoalCard from "./widgets/GoalCard";
import styled from "styled-components";
import { useState } from "react";
import AddFundsModal from "./dialogs/AddFundsModal";

export const LeadingBoxButton = styled.View`
  position: absolute;
  top: 2%;
`;

export default function GoalsScreen({ navigation }) {
  const [fundsModalIsVisible, setFundsModalIsVisible] = useState(false);
  return (
    <AppContainer
      justifyContent={Flex.auto}
      backgroundColor={AppColors.background}
    >
      <Row width={"100%"}>
        <LeadingBoxButton>
          <LeadingButtonWidget navigation={navigation} />
          <Gap width={32} />
        </LeadingBoxButton>

        <Gap width={70} />
        <View>
          <Image
            source={AppAssets.eightPointGreenStarGoals}
            style={{
              flex: 1,
              height: 45,
              width: 45,
              resizeMode: "contain",
            }}
          />
        </View>
        <Gap width={17} />
        <TitleBlack size={32}>METAS</TitleBlack>
      </Row>

      <Gap height={28} />
      <GoalCard
        onPress={() => {
          setFundsModalIsVisible(true);
        }}
      />

      <Gap height={28} />
      <GoalCard />

      <Gap height={28} />
      <GoalCard />

      <AddFundsModal
        onClose={() => {
          setFundsModalIsVisible(false);
        }}
        visible={fundsModalIsVisible}
      />
    </AppContainer>
  );
}
