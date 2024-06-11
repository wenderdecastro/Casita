import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import AppDialog from '../../../../../components/AppDialog'
import { Flex } from '../../../../../utils/AppEnums'
import AppInput from '../../../../../components/AppInput'
import { FontFamily, TitleBlack } from '../../../../../components/AppFonts'
import { AppColors } from '../../../../../utils/Pallete'
import { AppAssets } from '../../../../../../assets/AppAssets'
import { Row } from '../../../../../components/AppContainers'
import AppDropdown from '../../../../../components/AppDropdown'
import { Gap } from '../../../../../components/AppSpecialComponents'
import CurrencyInput from 'react-native-currency-input'
import AppButton from '../../../../../components/AppButton'

export default function NewItemDialog({ visible, onClose, }) {
    const [priority, setPriority] = useState()
    const [value, setValue] = React.useState();
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
    return (
        <AppDialog
            visible={visible}
            padding={15}
            paddingInside={15}
            justifyContentBox={Flex.flexStart}
            justifyContentContainer={Flex.center}
            onClose={onClose}>

            <AppInput
                placeholder={'Nome do item'}
                fontFamily={FontFamily.archivoBold}
                backgroundColor={AppColors.white} />

            <Gap height={15} />

            <Row alignItems={Flex.center} width={'100%'} justifyContent={Flex.spaceBetween}>
                <Image style={{

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

                <CurrencyInput
                    value={value}
                    onChangeValue={setValue}
                    renderTextInput={textInputProps => <AppInput borderRadius={8} backgroundColor={AppColors.white} inputWidth={'140px'} textInputProps={textInputProps} variant='filled' />}
                    renderText
                    prefix="R$"

                    delimiter="."
                    separator=","
                    precision={2}
                />

            </Row>
            <Gap height={15} />
            <AppButton label={'Adicionar'} mainColor={AppColors.white} />

        </AppDialog>
    )
}