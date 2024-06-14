import { View, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppDialog from '../../../../../components/AppDialog'
import { FontFamily, TitleBlack } from '../../../../../components/AppFonts'
import { Flex, NewTaskButtons } from '../../../../../utils/AppEnums'
import AppInput from '../../../../../components/AppInput'
import { Row } from '../../../../../components/AppContainers'
import AppDropdown from '../../../../../components/AppDropdown'
import { Gap } from '../../../../../components/AppSpecialComponents'
import { AppAssets } from '../../../../../../assets/AppAssets'
import ButtonSelector from '../../../../../components/ButtonSelector'
import { AppColors } from '../../../../../utils/Pallete'
import styled from 'styled-components/native'
import AppSvgIcon, { AppIconName } from '../../../../../../assets/Icons'
import AppDatePicker from '../../../../../components/AppDatePicker'
import AppButton from '../../../../../components/AppButton'
import AppTimePicker from '../../../../../components/AppTimePicker'
import api, { PostTaskPath } from '../../../../../services/ApiService'
import moment from 'moment'
import { AppNavigation, AppRoutesKeys } from '../../../../../utils/AppRoutes/AppRoutesUtils'
import { tokenDecode } from '../../../../../services/TokenService'

const SendButton = styled.TouchableOpacity`
    border-radius: 10px;
    border-width: 1px;
    border-color: ${AppColors.black};
    background-color: ${({ isDisabled }) => isDisabled ? AppColors.gray20 : AppColors.yellow};
    align-items: center;
    justify-content: center;
    flex: 1;
`
const SendButtonShadow = styled.View`
    border-radius: 10px;
    border-width: 1px;
    border-color: ${AppColors.black};
    background-color: ${AppColors.black};
    align-items: center;
    justify-content: center;
    flex: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -9999;
    top: 3px;
    left: 3px;
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

export default function NewTaskDialog({ visible, onClose, userId, navigation }) {


    const data = [
        {
            value: 'Alta',
            key: 1,
        },
        {
            value: 'Média',
            key: 2,
        },
        {
            value: 'Baixa',
            key: 3,
        },
    ]

    const [isLoading, setIsLoading] = useState(false)

    const [priority, setPriority] = useState()
    const [selected, setSelected] = useState(1)

    const [date, setDate] = useState(new Date());
    const [showDate, setShowDate] = useState(false);
    const [dateIsDisabled, setDateIsDisabled] = useState(true)

    const [time, setTime] = useState(new Date());
    const [showTime, setShowTime] = useState(false);
    const [timeIsDisabled, setTimeIsDisabled] = useState(true)

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()

    const showDatePicker = () => {
        setShowDate(true);
    };

    const showTimePicker = () => {
        setShowTime(true);
    };

    const formatDate = (date) => {

        return moment(date).format('YYYY-MM-DD');
    }

    const formatTime = (time) => {

        return moment(time).format('HH:mm:ss');
    }

    async function PostTask() {
        const token = await tokenDecode()
        const userId = token.id
        setIsLoading(true)
        await api.post(PostTaskPath, {
            priorityId: priority,
            name: title,
            frequencyId: selected,
            description: description,
            dueDate: dateIsDisabled ? null : formatDate(date),
            dueTime: timeIsDisabled ? null : `${formatTime(time)}.0000000`,
            isConcluded: false,
        }, {
            params: {
                userId: userId, 
                if(isMyDay) {
                    listType: 2
                }
            }
        })
            .then((response) => {
                console.log(response)
                setIsLoading(false)
                AppNavigation.popWithData(navigation, AppRoutesKeys.managementScreen, { refresh: true })
            })
            .catch(error => {
                console.log(error.request)
                setIsLoading(false)
            })
    }

    return (
        <AppDialog
            visible={visible}
            padding={15}
            paddingInside={15}
            justifyContentBox={Flex.flexStart}
            justifyContentContainer={Flex.center}
            onClose={onClose}
        >
            <Row alignItems={Flex.center}>
                <TitleBlack size={20}>NOVA TAREFA</TitleBlack>
                <Image style={{
                    flex: 1,
                    width: 35,
                    height: 35,
                    resizeMode: 'contain'
                }} source={priority == 1 ? AppAssets.redPointStar : priority == 2 ? AppAssets.yellowPointStar : priority == 3 ? AppAssets.greenPointStar : AppAssets.emptyPointStar} />
                <View style={{ width: 120 }}>
                    <AppDropdown
                        data={data}
                        placeholder={'Prioridade'}
                        handleValueSelected={(val) => {
                            setPriority(val)
                            console.log(val)
                        }}
                    />

                </View>
            </Row>
            <Gap height={10} />
            <Row alignItems={Flex.center} justifyContent={Flex.flexStart} width={'100%'}>
                <CheckBox onPress={() => { setDateIsDisabled(!dateIsDisabled) }} isChecked={!dateIsDisabled}>
                    {!dateIsDisabled ? <AppSvgIcon size={25} name={AppIconName.checkTask} /> : null}
                </CheckBox>
                <Gap width={12} />
                <AppButton
                    mainColor={AppColors.white}
                    isDisabled={dateIsDisabled}
                    onTap={showDatePicker}
                    mainTextColor={AppColors.black}
                    label={moment(date).format('DD/MM/YYYY')}
                    borderRadius={5} width={'120px'} />
                <Gap width={12} />
                <CheckBox onPress={() => { setTimeIsDisabled(!timeIsDisabled) }} isChecked={!timeIsDisabled}>
                    {!timeIsDisabled ? <AppSvgIcon size={25} name={AppIconName.checkTask} /> : null}
                </CheckBox>
                <Gap width={12} />
                <AppButton
                    mainColor={AppColors.white}
                    isDisabled={timeIsDisabled}
                    onTap={showTimePicker}
                    mainTextColor={AppColors.black}
                    label={moment(time).format('HH:mm')}
                    borderRadius={5} width={'120px'} />
            </Row>
            <AppDatePicker date={date} setDate={setDate} show={showDate} setShow={setShowDate} />
            <AppTimePicker time={time} setTime={setTime} show={showTime} setShow={setShowTime} />
            <Gap height={10} />
            <ButtonSelector
                selected={selected}
                isCompact={true}
                buttonList={NewTaskButtons}
                mainColor={AppColors.white}
                mainTextColor={AppColors.black}
                handleTabSelected={(val) => {
                    setSelected(val)
                }}
            />
            <Gap height={10} />
            <AppInput
                backgroundColor={AppColors.white}
                textValue={title}
                placeholder={'Titulo da tarefa. Ex: Fazer as compras'}
                fontFamily={FontFamily.archivoBold}
                onChangeText={(val) => {
                    setTitle(val)
                }}
            />
            <Gap height={15} />
            <Row>
                <AppInput
                    inputWidth={'80%'}
                    textValue={description}
                    placeholder={'Descrição da tarefa'}
                    isTextArea
                    fontFamily={FontFamily.archivoMedium}
                    onChangeText={(val) => {
                        setDescription(val)
                    }}
                />
                <Gap width={10} />
                <View style={{ flex: 1 }}>
                    <SendButton isDisabled={!priority || !title} activeOpacity={!priority || !title ? 1 : 0.9} onPress={!priority || !title ? null : () => {
                        PostTask()
                    }}>
                        {isLoading ? <ActivityIndicator color={AppColors.black} /> : <AppSvgIcon name={AppIconName.send} />}
                    </SendButton>
                    <SendButtonShadow>
                        <AppSvgIcon name={AppIconName.send} />
                    </SendButtonShadow>
                </View>
            </Row>


        </AppDialog>
    )
}