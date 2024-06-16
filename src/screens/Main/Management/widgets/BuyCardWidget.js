import React, { useState } from 'react'
import { Column, Row } from '../../../../components/AppContainers'
import { AppAssets } from '../../../../../assets/AppAssets'
import { BodyMedium } from '../../../../components/AppFonts'
import AppCheckBox from '../../../../components/AppCheckBox'
import { Image } from 'react-native'
import { AppColors } from '../../../../utils/Pallete'
import { Flex } from '../../../../utils/AppEnums'

export default function BuyCardWidget({ item }) {
    const [isChecked, setIsChecked] = useState(false)
    return (
        <Row justifyContent={Flex.spaceBetween} alignItems={Flex.center}>
            <Row>
                <Image style={{
                    width: 35,
                    height: 35,
                    resizeMode: 'contain'
                }} source={isChecked ? AppAssets.emptyPointStar : item.priority == 1 ? AppAssets.redPointStar : item.priority == 2 ? AppAssets.yellowPointStar : item.priority == 3 ? AppAssets.greenPointStar : AppAssets.emptyPointStar} />

                <Column>
                    <BodyMedium color={AppColors.black}>{item.name}</BodyMedium>
                    <BodyMedium color={AppColors.black}>{item.price}</BodyMedium>
                </Column>
            </Row>

            <AppCheckBox isChecked={isChecked} handleCheck={setIsChecked}/>
        </Row>
    )
}