import styled from "styled-components";
import ContainerShadow from "../screens/Main/Financial/widgets/ContainerShadow";
import { AppColors } from "../utils/Pallete";
import { AppAssets } from "../../assets/AppAssets";
import { Image } from "react-native";

const Input = styled.TouchableOpacity`

`

export default function AppTinyButtonIcon({
    backgroundColor = AppColors.red,
    icon = AppAssets.minusIcon,
    iconWidth = 19,
    iconHeight = 15,
    marginLeft,
    onPress,
}) {
    return (
        <Input onPress={onPress}>
            <ContainerShadow  width={'28px'} backgroundColor={backgroundColor} height={28} Content={
                <Image
                source={icon}
                style={{
                  flex: 1,
                  height: iconHeight,
                  width: iconWidth,
                  resizeMode: "contain",
                  marginLeft: marginLeft
                }}
                />

            } />
        </Input>
    )
}