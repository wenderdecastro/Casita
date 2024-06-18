import styled from "styled-components";
import { AppColors } from "../../../../utils/Pallete";
import { AppAssets } from "../../../../../assets/AppAssets";
import { Image, View } from "react-native";
import { Row } from "../../../../components/AppContainers";
import { BodyMedium, TitleExtraLarge } from "../../../../components/AppFonts";
import { Gap } from "../../../../components/AppSpecialComponents";
import AppSvgIcon, { AppIconName } from "../../../../../assets/Icons";
import moment from "moment";

const ViewBox = styled.View`
  width: 100%;
  padding-left: 10px;
  background-color: ${({ backgroundColor = AppColors.background }) =>
    backgroundColor};
  border: 1px solid black;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;

`;

const ViewFlex = styled.View`

`;

export default function SpentItem({
  icon = "red",
  title = "Conta de luz",
  date = "10/06/2024",
  money = 100,
}) {
  const formatDate = (date) => {

    return moment(date).format('DD/MM/YYYY');
  }

  const formatTime = (date) => {

    return moment(date).format('HH:mm');
  }
  return (
    <ViewBox>
      <View >
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
      <View style={{width: '65%'}}>
        <BodyMedium color={AppColors.black}>{title}</BodyMedium>
        <Row alignItems={'center'}>
          <BodyMedium color={AppColors.black}>{formatDate(date)}</BodyMedium>
          <Gap width={6} />
          <AppSvgIcon name={AppIconName.clock} size={17} />
          <TitleExtraLarge size={14}>{formatTime(date)}</TitleExtraLarge>
        </Row>
      </View>
      <Gap width={5}/>
      <ViewFlex>
        <BodyMedium textAlign={'right'} size={14} color={AppColors.black}>R${money}</BodyMedium>
      </ViewFlex>
    </ViewBox>
  );
}
