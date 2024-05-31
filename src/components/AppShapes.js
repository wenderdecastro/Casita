import styled from "styled-components/native";
import { AppColors } from "../utils/Pallete";
import { View } from "react-native";
import { Flex } from "../utils/AppEnums";

export const TriangleShape = styled.View`
  width: 0;
  height: 0;
  border-left-width: 50px;
  border-right-width: 50px;
  border-bottom-width: 100px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: ${({ backgroundColor = AppColors.yellow }) => backgroundColor};
`
