import { View, Text, Image } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import { AppColors } from '../../../utils/Pallete'
import { AppAssets } from '../../../../assets/AppAssets'
import { AppNavigation } from '../../../utils/AppRoutes/AppRoutesUtils'

const Button = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    background-color: ${AppColors.yellow};
    border-color: ${AppColors.black};
    border-width: 1px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`


const BoxShadow = styled.View`
    background-color: ${AppColors.black};
    width: 40px;
    height: 40px;
    border-radius: 10px;
    position: absolute;
    bottom: -7%;
    left: 5%;
    z-index: -9999;
`

export default function LeadingButtonWidget({navigation}) {
    return (
        <View>
            <Button activeOpacity={1} onPress={() => {AppNavigation.pop(navigation)}}>
                <Image style={{
                    flex: 1,
                    width: 22,
                    resizeMode: 'contain'
                }} source={AppAssets.arrowLeft} />
            </Button>
            <BoxShadow></BoxShadow>
        </View>

    )
}