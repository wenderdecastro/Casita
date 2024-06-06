import { View, Text } from 'react-native'
import React, { useState } from 'react'
import AppDialog from '../../../../../components/AppDialog'
import { Flex, NewTaskButtons } from '../../../../../utils/AppEnums'
import { AppColors } from '../../../../../utils/Pallete'
import ButtonSelector from '../../../../../components/ButtonSelector'
import { FontFamily, TitleBlack } from '../../../../../components/AppFonts'
import { Gap } from '../../../../../components/AppSpecialComponents'
import AppInput from '../../../../../components/AppInput'

export default function EditTaskDialog({ visible, onClose, item }) {
    const [selected, setSelected] = useState(0)
    return (
        <AppDialog
            visible={visible}
            paddingInside={15}
            padding={0}
            isFaded={true}
            justifyContentContainer={Flex.flexEnd}
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
            <TitleBlack size={20}>{item.name}</TitleBlack>
            <Gap height={20} />
            <AppInput 
                  borderRadius={10}
                  backgroundColor={AppColors.white}
                  isTextArea
                  placeholder={'Descrição da tarefa'}
                  fontFamily={FontFamily.archivoMedium}
            />
        </AppDialog>
    )
}