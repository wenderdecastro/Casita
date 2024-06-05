import { View, Text, Image } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import { AppColors } from '../../../../utils/Pallete'
import { AppAssets } from '../../../../../assets/AppAssets'

const CardBox = styled.View`
    padding: 10px;
    border-width: 1px;
    border-color: ${AppColors.black};
    width: 100%;
    height: 40px;
    flex-direction: row;
`

export default function TaskCardWidget({ item }) {
    return (
        <CardBox>
            <View>
                <Image style={{
                    flex: 1,
                    width: 35,
                    height: 35,
                    resizeMode: 'contain'
                }} source={item.priority == 1 ? AppAssets.redPointStar : item.priority == 2 ? AppAssets.yellowPointStar : item.priority == 3 ? AppAssets.greenPointStar : AppAssets.emptyPointStar} />
            </View>
        </CardBox>
    )
}