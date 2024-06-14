import { ActivityIndicator, FlatList, Image, View } from "react-native";
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
import { useEffect, useState } from "react";
import AddFundsModal from "./dialogs/AddFundsModal";
import AppSvgIcon, { AppIconName } from "../../../../assets/Icons";
import AddGoalModal from "./dialogs/AddGoalModal";
import { useRoute } from "@react-navigation/native";
import api, { GetGoalsPath } from "../../../services/ApiService";
import { isLoading } from "expo-font";

export const LeadingBoxButton = styled.View`
  position: absolute;
  top: 2%;
`;

const FixedButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${AppColors.green};
  border-radius: 9999px;
  border-width: 1px;
  border-color: ${AppColors.black};
  position: absolute;
  bottom: 50px;
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
  bottom: 49px;
  right: 18px;
  z-index: 0;
`;

const List = styled.View`
    flex: ${({ flex }) => flex};
    width: 100%;
`

export default function GoalsScreen({ navigation }) {
  const [fundsModalIsVisible, setFundsModalIsVisible] = useState(false);
  const [addFundsModalIsVisible, setAddFundsModalIsVisible] = useState(false);

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false);


  const { params } = useRoute()

  useEffect(() => {
    getGoals()
  }, [])

  useEffect(() => {
    if (params.refresh) {
      getGoals()
    }
  }, [params])

  async function getGoals() {
    setIsLoading(true)
    await api.get(GetGoalsPath, {
      params: {
        id: params.userData.id
      }
    }).then(response => {
      console.log('====================================');
      console.log(response);
      console.log('====================================');
      setData(response.data)
      setIsLoading(false)
    }).catch(error => {
      console.log('====================================');
      console.log(error.request);
      console.log('====================================');
      setIsLoading(false)
    })

    setIsLoading(false)
  }
  return (
    <AppContainer
      justifyContent={Flex.auto}
      backgroundColor={AppColors.background}

    >
      {isLoading ? <ActivityIndicator /> : data ?
        <>
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
          <List>
            <FlatList
              endFillColor={AppColors.background}
              data={data}

              renderItem={({ item }) =>
              (
                <GoalCard
                  item={item}
                  onPress={() => {
                    setFundsModalIsVisible(true)
                  }}
                />
              )
              }
              keyExtractor={item => item.id}
              ItemSeparatorComponent={<Gap height={20} />}
              contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 5 }}
              showsVerticalScrollIndicator={false}
            />
          </List>


          <AddFundsModal
            onClose={() => {
              setFundsModalIsVisible(false);
            }}
            visible={fundsModalIsVisible}
          />

          <AddGoalModal
            userId={params.userData.id}
            onClose={() => {
              setAddFundsModalIsVisible(false);
            }}
            visible={addFundsModalIsVisible}
          />
          <FixedButton
            activeOpacity={0.9}
            onPress={() => {
              setAddFundsModalIsVisible(true);
            }}
          >
            <AppSvgIcon name={AppIconName.add} />
          </FixedButton>
          <FixedButtonShadow>
            <AppSvgIcon name={AppIconName.add} />
          </FixedButtonShadow>
        </> : <></>}
    </AppContainer>
  );
}
