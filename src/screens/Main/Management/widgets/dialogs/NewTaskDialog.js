import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import AppDialog from '../../../../../components/AppDialog'
import { TitleBlack } from '../../../../../components/AppFonts'
import { Flex, NewTaskButtons } from '../../../../../utils/AppEnums'
import AppInput from '../../../../../components/AppInput'
import { Row } from '../../../../../components/AppContainers'
import AppDropdown from '../../../../../components/AppDropdown'
import { Gap } from '../../../../../components/AppSpecialComponents'
import { AppAssets } from '../../../../../../assets/AppAssets'
import ButtonSelector from '../../../../../components/ButtonSelector'
import { AppColors } from '../../../../../utils/Pallete'

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
            paddingInside={10}
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
            />
            <Gap height={15} />
            <Row>
                <AppInput
                    inputWidth={'80%'}
                    placeholder={'Descrição da tarefa'}
                    isTextArea />
            </Row>


        </AppDialog>
    )
}