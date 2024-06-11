import { View, Text } from 'react-native'
import React from 'react'
import AppDialog from '../../../../../components/AppDialog'
import { Flex } from '../../../../../utils/AppEnums'
import AppInput from '../../../../../components/AppInput'
import { AppColors } from '../../../../../utils/Pallete'
import { Gap } from '../../../../../components/AppSpecialComponents'
import AppButton from '../../../../../components/AppButton'
import { FontFamily } from '../../../../../components/AppFonts'

export default function NewListDialog({ visible, onClose, }) {
    return (
        <AppDialog
            visible={visible}
            padding={15}
            paddingInside={15}
            justifyContentBox={Flex.flexStart}
            justifyContentContainer={Flex.center}
            onClose={onClose}
        >
            <AppInput fontFamily={FontFamily.archivoBold} backgroundColor={AppColors.white} placeholder={'Nome da lista'}/>
            <Gap height={15}/>
            <AppButton label={'CRIAR LISTA'} mainColor={AppColors.white}/>
        </AppDialog>
    )
}