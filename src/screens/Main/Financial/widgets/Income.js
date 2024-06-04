import { View } from "react-native";
import styled from "styled-components";
import { AppColors } from "../../../../utils/Pallete";

const ViewIncome = styled.View`
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border-width: 1px;
    border-color: ${AppColors.black};
`

const BoxShadow = styled.View`
background-color: ${AppColors.black};
border-radius: 10px;
width: 100%;
height: 100%;
position: absolute;
bottom: -5%;
left: 4%;
z-index: -9999;
`

const BoxIncome = styled.View`
    width: 156px;
    height: 70px;
`

export default function Income(){
    return(
        <BoxIncome>
            <ViewIncome>
            </ViewIncome>
            <BoxShadow/>
        </BoxIncome>
    )
}