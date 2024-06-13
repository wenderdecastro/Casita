import styled from "styled-components";
import { TitleBlack } from "../../../../components/AppFonts";
import SpentItem from "./SpentItem.";
import { FlatList } from "react-native";
import { Gap } from "../../../../components/AppSpecialComponents";

const ViewBox = styled.View`
  align-items: start;
  width: 100%;
`;

export default function SpentMonth({
  month = "ABRIL",
  itens = [],
}) {
  return (
    <ViewBox>
      <TitleBlack size={20}>{month}</TitleBlack>
      <Gap height={5}/>
      <FlatList
        data={itens}
        renderItem={({ item }) => (
            <>
          <SpentItem
            icon={item.icon}
            title={item.title}
            date={item.date}
            time={item.time}
            money={item.money}
          />
          <Gap height={10}/>
            </>
        )}
        keyExtractor={(item) => item.id}
      />
    </ViewBox>
  );
}
