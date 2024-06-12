import styled from "styled-components";
import { AppColors } from "../../../../utils/Pallete";
import { AppAssets } from "../../../../../assets/AppAssets";
import { Image, View } from "react-native";
import { Row } from "../../../../components/AppContainers";
import { BodyMedium } from "../../../../components/AppFonts";
import { Gap } from "../../../../components/AppSpecialComponents";

const ViewBox = styled.View`
  width: 100%;
  height: 53px;
  background-color: ${({ backgroundColor = AppColors.background }) =>
    backgroundColor};
  border: 1px solid black;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default function SpentItem({ icon = "red", title = "Conta de luz", date = '10/06/2024' }) {
  return (
    <ViewBox>
      <View>
        {icon == "red" ? (
          <Image
            source={AppAssets.redPointStar}
            style={{
              flex: 1,
              height: 35,
              width: 35,
              resizeMode: "contain",
            }}
          />
        ) : icon == "yellow" ? (
          <Image
            source={AppAssets.yellowPointStar}
            style={{
              flex: 1,
              height: 35,
              width: 35,
              resizeMode: "contain",
            }}
          />
        ) : (
          <Image
            source={AppAssets.shopCarIcon}
            style={{
              flex: 1,
              height: 35,
              width: 35,
              resizeMode: "contain",
            }}
          />
        )}
      </View>
      <Gap width={12} />
      <View>
      <BodyMedium color={AppColors.black}>{title}</BodyMedium>
      <BodyMedium color={AppColors.black}>{date}</BodyMedium>
      </View>
    </ViewBox>
  );
}
