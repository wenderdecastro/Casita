import { Image, View } from "react-native";
import styled from "styled-components";
import { AppColors } from "../../../../utils/Pallete";
import { AppAssets } from "../../../../../assets/AppAssets";
import { BodyMedium, H3 } from "../../../../components/AppFonts";
import { Row } from "../../../../components/AppContainers";

const ViewIncome = styled.View`
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border-width: 1px;
    border-color: ${AppColors.black};
    justify-content: center;
    align-items: center;
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
const BoxText = styled.View`

`

const ImageView = styled.View`

`



export default function Income({IconPath = AppAssets.greenArrowUp, Title = 'Entradas', MoneyValue, MoneyPrefix = '+ R$'}){
    return(
        <BoxIncome>
            <ViewIncome>
                <Row gap={4}>
                    <BoxText>
                        <BodyMedium color={AppColors.black}>{Title}</BodyMedium>
                        <H3 color={AppColors.black}>{MoneyPrefix}{MoneyValue}</H3>
                    </BoxText>
                    <ImageView>
                        <Image
                            style={{
                                flex: 1,
                                width: 37,
                                resizeMode: 'contain',
                                marginBottom: 15,
                            }}
                            source={IconPath}
                        />
                    </ImageView>
                </Row>
            </ViewIncome>
            <BoxShadow/>
        </BoxIncome>
    )
}