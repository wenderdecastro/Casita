import { View, Text } from 'react-native'
import React, { useState } from 'react'
import AppDialog from '../../../../../components/AppDialog'
import { Flex } from '../../../../../utils/AppEnums'
import AppInput from '../../../../../components/AppInput'
import { AppColors } from '../../../../../utils/Pallete'
import { Gap } from '../../../../../components/AppSpecialComponents'
import AppButton from '../../../../../components/AppButton'
import { FontFamily } from '../../../../../components/AppFonts'
import api from '../../../../../services/ApiService'




export default function NewListDialog({ visible, onClose, }) {

async function NewList(params) {

    const resApi = await api.post(`/TaskList`, {name: listName},{ headers: {
        'Content-Type': 'application/json'}
    })
    console.log("UMTESTEEEEEEEEEEE", resApi.status);
}

const [listName, setListName] = useState("")

    return (
        <AppDialog
            visible={visible}
            padding={15}
            paddingInside={15}
            justifyContentBox={Flex.flexStart}
            justifyContentContainer={Flex.center}
            onClose={onClose}
        >
            <AppInput fontFamily={FontFamily.archivoBold} backgroundColor={AppColors.white}  textValue={listName} onChangeText={setListName} placeholder={'Nome da lista'}/>
            <Gap height={15}/>
            <AppButton onTap={NewList} label={'CRIAR LISTA'} mainColor={AppColors.white}/>
        </AppDialog>
    )
}