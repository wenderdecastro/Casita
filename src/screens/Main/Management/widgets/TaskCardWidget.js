import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import styled from 'styled-components/native'
import { AppColors } from '../../../../utils/Pallete'
import { AppAssets } from '../../../../../assets/AppAssets'
import { Gap } from '../../../../components/AppSpecialComponents'
import { Column, Row } from '../../../../components/AppContainers'
import { BodyMedium, TitleExtraLarge } from '../../../../components/AppFonts'
import moment from 'moment'
import AppSvgIcon, { AppIconName } from '../../../../../assets/Icons'
import { TextDecoration } from '../../../../utils/AppEnums'

const CardBox = styled.View`
    padding: 10px;
    border-width: 1.5px;
    border-color: ${AppColors.black};
    flex-direction: row;
    border-radius: 10px;
    background-color: ${AppColors.background};
    justify-content: space-between;
    align-items: center;
`

const CardShadow = styled.View`
    padding: 10px;
    border-width: 1px;
    border-color: ${AppColors.black};
    background-color: ${AppColors.black};
    width: 100%;
    flex-direction: row;
    border-radius: 10px;
    position: absolute;
    top: 3px;
    left: 1.5px;
    z-index: -99999;
`

const Tag = styled.View`
    background-color: ${({ isChecked }) => isChecked ? AppColors.background : AppColors.blue};
    border-radius: 9999px;
    border-width: 1px;
    border-color: ${AppColors.black};
    padding: 3px 8px 3px 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const CheckBox = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    background-color: ${({ isChecked }) => isChecked ? AppColors.yellow : AppColors.white};
    border-width: 1px;
    border-color: ${AppColors.black};
    align-items: center;
    justify-content: center;
`

export default function TaskCardWidget({ item }) {

    var dateFormatted = moment(item.date, 'DD-MM-YYYYTHH:mm:ss');

    var date = dateFormatted.format('DD/MM/YYYY');
    var time = dateFormatted.format('HH:mm');

    const [isChecked, setIsChecked] = useState(item.isChecked)
    return (
        <View>
            <CardBox>
                <Row style={{ flex: 1 }}>
                    <View>
                        <Image style={{
                            flex: 1,
                            width: 35,
                            height: 35,
                            resizeMode: 'contain'
                        }} source={isChecked ? AppAssets.emptyPointStar : item.priority == 1 ? AppAssets.redPointStar : item.priority == 2 ? AppAssets.yellowPointStar : item.priority == 3 ? AppAssets.greenPointStar : AppAssets.emptyPointStar} />
                    </View>
                    <Gap width={12} />
                    <Column width={'55%'}>
                        <BodyMedium
                            textDecoration={isChecked ? TextDecoration.lineThrough : TextDecoration.none}
                            color={AppColors.black}>{item.name}</BodyMedium>
                        <Gap height={5} />
                        <Tag isChecked={isChecked}>
                            <TitleExtraLarge
                                textDecoration={isChecked ? TextDecoration.lineThrough : TextDecoration.none}
                                color={isChecked ? AppColors.black : AppColors.white}
                                size={14}>{date}</TitleExtraLarge>

                            <Gap width={10} />

                            <AppSvgIcon
                                color={isChecked ? AppColors.black : AppColors.white}
                                name={AppIconName.clock}
                                size={18} />

                            <Gap width={3} />

                            <TitleExtraLarge
                                color={isChecked ? AppColors.black : AppColors.white}
                                textDecoration={isChecked ? TextDecoration.lineThrough : TextDecoration.none}
                                size={14}>{time}</TitleExtraLarge>
                        </Tag>
                    </Column>
                </Row>
                <CheckBox onPress={() => { setIsChecked(!isChecked) }} isChecked={isChecked}>
                    {isChecked ? <AppSvgIcon size={25} name={AppIconName.checkTask}/> : null}
                </CheckBox>
            </CardBox>
            <CardShadow>
                <View>
                    <Image style={{
                        flex: 1,
                        width: 35,
                        height: 35,
                        resizeMode: 'contain'
                    }} source={item.priority == 1 ? AppAssets.redPointStar : item.priority == 2 ? AppAssets.yellowPointStar : item.priority == 3 ? AppAssets.greenPointStar : AppAssets.emptyPointStar} />
                </View>
                <Gap width={12} />
                <Column width={'55%'}>
                    <BodyMedium color={AppColors.black}>{item.name}</BodyMedium>
                    <Gap height={5} />
                    <Tag>
                        <TitleExtraLarge color={AppColors.white} size={14}>{date}</TitleExtraLarge>
                        <Gap width={10} />
                        <AppSvgIcon color={AppColors.white} name={AppIconName.clock} size={18} />
                        <Gap width={3} />
                        <TitleExtraLarge color={AppColors.white} size={14}>{time}</TitleExtraLarge>
                    </Tag>
                </Column>
            </CardShadow>
        </View>
    )
}