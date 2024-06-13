import { FlatList, Image, View } from "react-native";
import { AppContainer, Row } from "../../../components/AppContainers";
import { BodyMedium, TitleBlack } from "../../../components/AppFonts";
import { Gap } from "../../../components/AppSpecialComponents";
import { Flex, HistoryTypeButtons } from "../../../utils/AppEnums";
import { AppColors } from "../../../utils/Pallete";
import { AppAssets } from "../../../../assets/AppAssets";
import { LeadingBoxButton } from "./GoalsScreen";
import LeadingButtonWidget from "../../Authentication/widgets/LeadingButtonWidget";
import { useState } from "react";
import ButtonSelector from "../../../components/ButtonSelector";
import ContainerShadow from "./widgets/ContainerShadow";
import SpentBox from "./widgets/SpentBox";
import styled from "styled-components";
import SpentBoxHistory from "./widgets/SpentBoxHistory";
import SpentMonth from "./widgets/SpentMonth";

const ViewBox = styled.View`
  width: 100%;
`;

const ViewWidth = styled.View`
  width: 100%;
  height: 100px;
`;

const List = styled.FlatList`
 width: 100%;
`

export const BoxWhite = styled.SafeAreaView`
  padding: ${({
    paddingTop = 20,
    paddingRight = 20,
    paddingBottom = 20,
    paddingLeft = 20,
  }) =>
    `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `};
  align-items: ${({ alignItems = Flex.center }) => alignItems};
  justify-content: ${({ justifyContent = Flex.center }) => justifyContent};
  background-color: ${({ backgroundColor = AppColors.red }) => backgroundColor};
  flex: ${({ flex = 1 }) => flex};
  width: 100%;
  border: 1px solid black;
`;



const DATA = [
  {
    id: 9,
    month: 'ABRIL',
    itens: [
      {
        id:'1',
        icon:'red',
        title:'Conta de luz',
        date:'24/09/2015',
        time:'17:00',
        money: 105,
      },
      {
        id:'2',
        icon:'shop',
        title:'Lista de Compras',
        date:'24/09/2015',
        time:'17:00',
        money: 50
      },
      {
        id:'3',
        icon:'yellow',
        title:'Comida pro gato',
        date:'24/09/2015',
        time:'17:00',
        money: 115
      },
    ],
  },

  {
    id: 10,
    month: 'MARÇO',
    itens: [
      {
        id:'1',
        icon:'red',
        title:'Conta de luz',
        date:'24/09/2015',
        time:'17:00',
        money: 105,
      },
      {
        id:'2',
        icon:'shop',
        title:'Lista de Compras',
        date:'24/09/2015',
        time:'17:00',
        money: 50
      },
      {
        id:'3',
        icon:'yellow',
        title:'Comida pro gato',
        date:'24/09/2015',
        time:'17:00',
        money: 115
      },
    ],
  },
];  

export default function HistoryScreen({ navigation }) {
  const [selected, setSelected] = useState(0);

  return (
    <>
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
          <TitleBlack size={32}>HISTÓRICO</TitleBlack>
        </Row>

        <Gap height={16} />
        <ButtonSelector
          selectedColor={AppColors.green}
          selected={selected}
          isCompact={true}
          buttonList={HistoryTypeButtons}
          mainColor={AppColors.white}
          mainTextColor={AppColors.black}
          handleTabSelected={(val) => {
            setSelected(val);
          }}
        />

        <Gap height={12} />

        <ViewBox>
          <SpentBoxHistory height={131} shadow={true} bottom={-3} left={3} />
        </ViewBox>
        <Gap height={21} />
        <BodyMedium textAlign={"center"} color={AppColors.black}>
          Você já gastou 90% da sua cota de Contas, tome cuidado com os próximos
          gastos!
        </BodyMedium>
      </AppContainer>
      <BoxWhite justifyContent={Flex.auto} backgroundColor={AppColors.white}>
        <List
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SpentMonth     month = {item.month} itens = {item.itens}/>}
        />
        
      </BoxWhite>
    </>
  );
}
