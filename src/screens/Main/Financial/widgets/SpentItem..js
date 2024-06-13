import styled from "styled-components";
import { AppColors } from "../../../../utils/Pallete";
import { AppAssets } from "../../../../../assets/AppAssets";
import { Image, View } from "react-native";
import { Row } from "../../../../components/AppContainers";
import { BodyMedium, TitleExtraLarge } from "../../../../components/AppFonts";
import { Gap } from "../../../../components/AppSpecialComponents";
import AppSvgIcon, { AppIconName } from "../../../../../assets/Icons";

const ViewBox = styled.View`
  width: 100%;
  height: 53px;
  padding-left: 10px;
  background-color: ${({ backgroundColor = AppColors.background }) =>
    backgroundColor};
  border: 1px solid black;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;

`;

const ViewFlex = styled.View`
width: 130px;
`;

export default function SpentItem({
  icon = "red",
  title = "Conta de luz",
  date = "10/06/2024",
  time = "17:00",
  money = 100,
}) {
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
        <Row alignItems={'center'}>
          <BodyMedium color={AppColors.black}>{date}</BodyMedium>
          <Gap width={6}/>
          <AppSvgIcon name={AppIconName.clock} size={17} />
          <TitleExtraLarge size={14}>{time}</TitleExtraLarge>
        </Row>
      </View>
      <ViewFlex>
      <BodyMedium textAlign={'right'} size={14} color={AppColors.black}>R${money}</BodyMedium>
      </ViewFlex> 
    </ViewBox>
  );
}
