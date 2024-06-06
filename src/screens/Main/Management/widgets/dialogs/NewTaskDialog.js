import { View, Image } from 'react-native'
import React, { useState } from 'react'
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

const SendButton = styled.TouchableOpacity`
    border-radius: 10px;
    border-width: 1px;
    border-color: ${AppColors.black};
    background-color: ${AppColors.yellow};
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

export default function NewTaskDialog({ visible, onClose, }) {
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

    const [priority, setPriority] = useState()
    const [selected, setSelected] = useState(0)

    return (
        <AppDialog
            visible={visible}
            padding={15}
            paddingInside={15}
            isFaded={true}
            justifyContentBox={Flex.flexStart}
            onClose={onClose}
            isAvoiding={true}
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
                placeholder={'Titulo da tarefa. Ex: Fazer as compras'}
                fontFamily={FontFamily.archivoBold}
            />
            <Gap height={15} />
            <Row>
                <AppInput
                    inputWidth={'80%'}
                    placeholder={'Descrição da tarefa'}
                    isTextArea
                    fontFamily={FontFamily.archivoMedium}
                />
                <Gap width={10} />
                <View style={{ flex: 1 }}>
                    <SendButton activeOpacity={0.9}>
                        <AppSvgIcon name={AppIconName.send} />
                    </SendButton>
                    <SendButtonShadow>
                        <AppSvgIcon name={AppIconName.send} />
                    </SendButtonShadow>
                </View>
            </Row>


        </AppDialog>
    )
}