import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
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
import api, { ConcludeTaskPath, MyDayTaskPath } from '../../../../services/ApiService'

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
    background-color: ${({ isChecked, hasPassedTime }) => isChecked ? AppColors.background : hasPassedTime ? AppColors.red : AppColors.blue};
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

export default function TaskCardWidget({ item, onTap }) {

    var date = moment(item.dueDate).format('DD/MM/YYYY');

    const [isChecked, setIsChecked] = useState(item.isConcluded)

    async function concludeTask() {
        api.patch(`${ConcludeTaskPath}/${item.id}`).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error.request);
        })
    }



    function hasPassedDueDate(dueDate) {
        if (!dueDate) {
            return false;
        }
        const currentDate = moment();


        const dueDateTime = moment(dueDate, 'YYYY-MM-DD');


        return currentDate.isAfter(dueDateTime);
    }


    function hasPassedDueTime(dueTime) {
        if (!dueTime) {
            return false;
        }


        const currentTime = moment().format('HH:mm:ss');


        return currentTime > dueTime;
    }

    function verifyDate() {
        if (item.dueDate != null || item.dueTime != null) {
            if (item.dueDate != null) {
                return hasPassedDueDate(date)
            } else if (item.dueTime != null) {
                return hasPassedDueTime(item.dueTime)
            }
        }

        return false
    }

    return (
        <TouchableOpacity activeOpacity={0.9} onPress={isChecked ? null : onTap}>
            <CardBox>
                <Row style={{ flex: 1 }}>
                    <View>
                        <Image style={{
                            flex: 1,
                            width: 35,
                            height: 35,
                            resizeMode: 'contain'
                        }} source={isChecked ? AppAssets.emptyPointStar : item.priorityId == 1 ? AppAssets.redPointStar : item.priorityId == 2 ? AppAssets.yellowPointStar : item.priorityId == 3 ? AppAssets.greenPointStar : AppAssets.emptyPointStar} />
                    </View>
                    <Gap width={12} />
                    <Column width={'55%'}>
                        <BodyMedium
                            textDecoration={isChecked ? TextDecoration.lineThrough : TextDecoration.none}
                            color={AppColors.black}>{item.name}</BodyMedium>
                        <Gap height={5} />
                        {item.dueDate != null || item.dueTime != null ? <>

                            <Tag hasPassedTime={verifyDate()} isChecked={isChecked}>
                                {item.dueDate != null ? <><TitleExtraLarge
                                    textDecoration={isChecked ? TextDecoration.lineThrough : TextDecoration.none}
                                    color={isChecked ? AppColors.black : AppColors.white}
                                    size={14}>{date}</TitleExtraLarge></> : null}

                                <Gap width={10} />

                                {item.dueTime != null ? <><AppSvgIcon
                                    color={isChecked ? AppColors.black : AppColors.white}
                                    name={AppIconName.clock}
                                    size={18} />

                                    <Gap width={3} />

                                    <TitleExtraLarge
                                        color={isChecked ? AppColors.black : AppColors.white}
                                        textDecoration={isChecked ? TextDecoration.lineThrough : TextDecoration.none}
                                        size={14}>{item.dueTime.slice(0, 5)}</TitleExtraLarge></> : null}
                            </Tag></> : null}
                    </Column>
                </Row>
                <CheckBox
                    onPress={async () => {
                        setIsChecked(!isChecked)
                        await concludeTask()
                    }} isChecked={isChecked}>
                    {isChecked ? <AppSvgIcon size={25} name={AppIconName.checkTask} /> : null}
                </CheckBox>
            </CardBox>
            <CardShadow>
                <Row style={{ flex: 1 }}>
                    <View>
                        <Image style={{
                            flex: 1,
                            width: 35,
                            height: 35,
                            resizeMode: 'contain'
                        }} source={isChecked ? AppAssets.emptyPointStar : item.priorityId == 1 ? AppAssets.redPointStar : item.priorityId == 2 ? AppAssets.yellowPointStar : item.priorityId == 3 ? AppAssets.greenPointStar : AppAssets.emptyPointStar} />
                    </View>
                    <Gap width={12} />
                    <Column width={'55%'}>
                        <BodyMedium
                            textDecoration={isChecked ? TextDecoration.lineThrough : TextDecoration.none}
                            color={AppColors.black}>{item.name}</BodyMedium>
                        <Gap height={5} />
                        {item.dueDate != null || item.dueTime != null ? <>

                            <Tag isChecked={isChecked}>
                                {item.dueDate != null ? <><TitleExtraLarge
                                    textDecoration={isChecked ? TextDecoration.lineThrough : TextDecoration.none}
                                    color={isChecked ? AppColors.black : AppColors.white}
                                    size={14}>{date}</TitleExtraLarge><Gap width={10} /></> : null}



                                {item.dueTime != null ? <><AppSvgIcon
                                    color={isChecked ? AppColors.black : AppColors.white}
                                    name={AppIconName.clock}
                                    size={18} />

                                    <Gap width={3} />

                                    <TitleExtraLarge
                                        color={isChecked ? AppColors.black : AppColors.white}
                                        textDecoration={isChecked ? TextDecoration.lineThrough : TextDecoration.none}
                                        size={14}>{item.dueTime.slice(0, 5)}</TitleExtraLarge></> : null}
                            </Tag></> : null}
                    </Column>
                </Row>
                <CheckBox
                    onPress={async () => {
                        setIsChecked(!isChecked)
                        await concludeTask()
                    }} isChecked={isChecked}>
                    {isChecked ? <AppSvgIcon size={25} name={AppIconName.checkTask} /> : null}
                </CheckBox>
            </CardShadow>
        </TouchableOpacity>
    )
}