import { View, Text, Image } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import { AppColors } from '../../../../utils/Pallete'
import { Row } from '../../../../components/AppContainers'
import { AppAssets } from '../../../../../assets/AppAssets'
import { Gap } from '../../../../components/AppSpecialComponents'
import { TitleBlack } from '../../../../components/AppFonts'
import { Flex } from '../../../../utils/AppEnums'

const Button = styled.TouchableOpacity`
    padding: 5px;
    background-color: ${AppColors.white};
    border-radius: 10px;
    width: 100%;
    justify-content: center;
    border-width: 1px;
    border-color: ${AppColors.black};
`

const BoxShadow = styled.View`
    background-color: ${AppColors.black};
    padding: 5px;
    width: 100%;
    border-radius: 10px;
    position: absolute;
    bottom: -7%;
    left: 2%;
    z-index: -9999;
`

export default function MyDayWidget({ onTap = null }) {
    return (
        <View style={{
            width: '100%'
        }}>
            <Button onPress={onTap} activeOpacity={0.95}>
                <Row  alignItems={Flex.center}>
                    <Image
                        source={AppAssets.eightPointYellowStarSmall} />
                    <Gap width={17} />
                    <TitleBlack size={32}>MEU DIA</TitleBlack>
                </Row>
            </Button>
            <BoxShadow>
            <Row  alignItems={Flex.center}>
                    <Image
                        source={AppAssets.eightPointYellowStarSmall} />
                    <Gap width={17} />
                    <TitleBlack size={32} color={AppColors.black}>MEU DIA</TitleBlack>
                </Row>
            </BoxShadow>
        </View>
    )
}