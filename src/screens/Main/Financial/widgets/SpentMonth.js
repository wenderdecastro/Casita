import styled from "styled-components";
import { TitleBlack } from "../../../../components/AppFonts";
import SpentItem from "./SpentItem.";

const ViewBox = styled.View`
  align-items: start;
  width: 100%;
`;

export default function SpentMonth({
    month = 'ABRIL'
}) {
    return(
        <ViewBox>
            <TitleBlack>{month}</TitleBlack>
            <SpentItem/>
        </ViewBox>
    )
}