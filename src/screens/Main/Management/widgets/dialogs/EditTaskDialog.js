import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import AppDialog from '../../../../../components/AppDialog'
import { Flex, NewTaskButtons, TextAlign } from '../../../../../utils/AppEnums'
import { AppColors } from '../../../../../utils/Pallete'
import ButtonSelector from '../../../../../components/ButtonSelector'
import { BodyMedium, FontFamily, TitleBlack } from '../../../../../components/AppFonts'
import { Gap } from '../../../../../components/AppSpecialComponents'
import AppInput from '../../../../../components/AppInput'
import { Row } from '../../../../../components/AppContainers'
import { AppAssets } from '../../../../../../assets/AppAssets'
import AppDropdown from '../../../../../components/AppDropdown'
import AppSvgIcon, { AppIconName } from '../../../../../../assets/Icons'
import AppButton from '../../../../../components/AppButton'
import styled from 'styled-components/native'
import AppDatePicker from '../../../../../components/AppDatePicker'
import AppTimePicker from '../../../../../components/AppTimePicker'

const CheckBox = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    background-color: ${({ isChecked }) => isChecked ? AppColors.yellow : AppColors.white};
    border-width: 1px;
    border-color: ${AppColors.black};
    align-items: center;
    justify-content: center;
`

export default function EditTaskDialog({ visible, onClose, item }) {
    const [selected, setSelected] = useState(0)
    const [priority, setPriority] = useState()

    const [date, setDate] = useState(new Date());
    const [showDate, setShowDate] = useState(false);
    const [dateIsEnabled, setDateIsEnabled] = useState(false)

    const [time, setTime] = useState(new Date());
    const [showTime, setShowTime] = useState(false);
    const [timeIsEnabled, setTimeIsEnabled] = useState(false)

    if (!item) {
        return null
    }
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



    const showDatePicker = () => {
        setShowDate(true);
    };

    const showTimePicker = () => {
        setShowTime(true);
    };
    return (
        <AppDialog
            visible={visible}
            paddingInside={15}
            padding={0}
            isFaded={true}
            justifyContentContainer={Flex.flexEnd}
            justifyContentBox={Flex.flexStart}
            onClose={onClose}
            isAvoiding={true}
        >
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
            <Gap height={20} />
            <TitleBlack   size={20}>{item.name}</TitleBlack>
            <Gap height={20} />
            <AppInput
                borderRadius={10}
                backgroundColor={AppColors.white}
                isTextArea
                placeholder={'Descrição da tarefa'}
                fontFamily={FontFamily.archivoMedium}
            />
            <Gap height={20} />
            <Row alignItems={Flex.center} justifyContent={Flex.spaceBetween} width={'100%'}>
                <Row alignItems={Flex.center} justifyContent={Flex.center}>
                    <Image style={{
                        width: 35,
                        height: 35,
                        resizeMode: 'contain'
                    }} source={priority == 1 ? AppAssets.redPointStar : priority == 2 ? AppAssets.yellowPointStar : priority == 3 ? AppAssets.greenPointStar : AppAssets.emptyPointStar} />
                    <Gap width={11} />
                    <TitleBlack size={20}>PRIORIDADE</TitleBlack>
                </Row>
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
            <Gap height={22} />
            <Row alignItems={Flex.center} justifyContent={Flex.center} width={'100%'}>
                <CheckBox onPress={() => { setDateIsEnabled(!dateIsEnabled) }} isChecked={dateIsEnabled}>
                    {dateIsEnabled ? <AppSvgIcon size={25} name={AppIconName.checkTask} /> : null}
                </CheckBox>
                <Gap width={12} />
                <AppButton
                    mainColor={AppColors.white}
                    isDisabled={dateIsEnabled}
                    onTap={showDatePicker}
                    mainTextColor={AppColors.black}
                    label={date.toLocaleDateString()}
                    borderRadius={5} width={'120px'} />
                <Gap width={12} />
                <CheckBox onPress={() => { setTimeIsEnabled(!timeIsEnabled) }} isChecked={timeIsEnabled}>
                    {timeIsEnabled ? <AppSvgIcon size={25} name={AppIconName.checkTask} /> : null}
                </CheckBox>
                <Gap width={12} />
                <AppButton
                    mainColor={AppColors.white}
                    isDisabled={timeIsEnabled}
                    onTap={showTimePicker}
                    mainTextColor={AppColors.black}
                    label={time.toLocaleTimeString()}
                    borderRadius={5} width={'120px'} />
            </Row>
            <AppDatePicker date={date} setDate={setDate} show={showDate} setShow={setShowDate} />
            <AppTimePicker time={time} setTime={setTime} show={showTime} setShow={setShowTime} />
            <Gap height={20} />
            <AppButton
                justifyContent={Flex.flexStart}
                AppSvgIcon={<Image style={{
                    width: 35,
                    height: 35,
                    resizeMode: 'contain'
                }} source={AppAssets.check} />} FontStyle={BodyMedium} mainColor={AppColors.white} label={'Marcar como concluída'} />
            <Gap height={13} />
            <AppButton
                justifyContent={Flex.flexStart}
                AppSvgIcon={<Image style={{
                    width: 35,
                    height: 35,
                    resizeMode: 'contain'
                }} source={AppAssets.eightPointYellowStarSmall} />} FontStyle={BodyMedium} mainColor={AppColors.white} label={'Adicionar ao Meu Dia'} />
            <Gap height={13} />
            <AppButton
                justifyContent={Flex.flexStart}
                AppSvgIcon={<Image style={{
                    width: 35,
                    height: 35,
                    resizeMode: 'contain'
                }} source={AppAssets.close} />} FontStyle={BodyMedium} mainColor={AppColors.white} label={'Excluir tarefa'} />
            <Gap height={13} />
        </AppDialog>
    )
}