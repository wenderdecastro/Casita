import { View, Text, Image } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import { AppColors } from '../../../../utils/Pallete'
import { AppAssets } from '../../../../../assets/AppAssets'
import { Gap } from '../../../../components/AppSpecialComponents'
import { Column } from '../../../../components/AppContainers'
import { BodyMedium, TitleExtraLarge } from '../../../../components/AppFonts'
import moment from 'moment'
import AppSvgIcon, { AppIconName } from '../../../../../assets/Icons'

const CardBox = styled.View`
    padding: 10px;
    border-width: 1.5px;
    border-color: ${AppColors.black};
    width: 100%;
    flex-direction: row;
    border-radius: 10px;
    background-color: ${AppColors.background};
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
    background-color: ${AppColors.blue};
    border-radius: 9999px;
    border-width: 1px;
    border-color: ${AppColors.black};
    padding: 3px 8px 3px 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export default function TaskCardWidget({ item }) {

    var dateFormatted = moment(item.date, 'DD-MM-YYYYTHH:mm:ss');

    var date = dateFormatted.format('DD/MM/YYYY');
    var time = dateFormatted.format('HH:mm');
    return (
        <View>
            <CardBox>
                <View>
                    <Image style={{
                        flex: 1,
                        width: 35,
                        height: 35,
                        resizeMode: 'contain'
                    }} source={item.priority == 1 ? AppAssets.redPointStar : item.priority == 2 ? AppAssets.yellowPointStar : item.priority == 3 ? AppAssets.greenPointStar : AppAssets.emptyPointStar} />
                </View>
                <Gap width={12} />
                <Column>
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
                <Column>
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