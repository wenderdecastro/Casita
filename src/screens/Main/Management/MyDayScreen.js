import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { AppContainer, Row } from '../../../components/AppContainers'
import { AppColors } from '../../../utils/Pallete'
import { AppAssets } from '../../../../assets/AppAssets'
import { BodyMedium, TitleBlack } from '../../../components/AppFonts'
import { Flex, TasksListMock } from '../../../utils/AppEnums'
import { Gap } from '../../../components/AppSpecialComponents'
import TasksListWidget from './widgets/TasksListWidget'
import MyDayBottomSheet from './widgets/MyDayBottomSheet'
import styled from 'styled-components'
import AppInput from '../../../components/AppInput'
import AppButton from '../../../components/AppButton'
import AppSvgIcon, { AppIconName } from '../../../../assets/Icons'
import NewTaskDialog from './widgets/dialogs/NewTaskDialog'

const ButtonBox = styled.View`
    border-radius: 10px;
    border-width: 1px;
    border-color: ${AppColors.black};
    background-color: ${AppColors.background};
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    bottom: 30px;
    left: 15px;
    right: 15px;
    text-align: center;
    padding: 10px;
    flex-direction: row;
`

const FixedButton = styled.TouchableOpacity`
  padding: 8px;
  background-color: ${AppColors.yellow};
  border-radius: 9999px;
  border-width: 1px;
  border-color: ${AppColors.black};
`

const FixedButtonShadow = styled.View`
  padding: 8px;
  background-color: ${AppColors.black};
  border-radius: 9999px;
  border-width: 1px;
  border-color: ${AppColors.black};
  position: absolute;
  bottom: 0px;
  right: -3px;
  z-index: -999;
`

export default function MyDayScreen() {
    const [isNewTaskDialogVisible, setIsNewTaskDialogVisible] = useState(false)

    return (
        <AppContainer alignItems={Flex.flexStart} justifyContent={Flex.flexStart} backgroundColor={AppColors.yellow}>
            <Row alignItems={Flex.center}>
                <Image style={{
                    width: 45,
                    height: 45,
                    resizeMode: 'contain',

                }} source={AppAssets.eightPointBlueStar} />
                <Gap width={13} />
                <TitleBlack size={32}>MEU DIA</TitleBlack>
            </Row>
            <Gap height={30} />
            <TitleBlack size={20}>TAREFAS</TitleBlack>
            <TasksListWidget
                DATA={TasksListMock}
                tapAction={() => { }}
                flex={0.9}
            />

            <MyDayBottomSheet />
            <ButtonBox>
                <View style={{ flex: 7 }}>
                    <AppButton
                        onTap={() => {
                            setIsNewTaskDialogVisible(true)
                        }}
                        mainColor={AppColors.white}
                        FontStyle={BodyMedium}
                        justifyContent={Flex.flexStart}
                        label={'Qual a boa de hoje paizão?'}
                    />

                </View>
                <Gap width={10}/>
                <View style={{ flex: 1 }}>
                    <FixedButton activeOpacity={0.9}>
                        <AppSvgIcon name={AppIconName.add} />
                    </FixedButton>
                    <FixedButtonShadow>
                        <AppSvgIcon name={AppIconName.add} />
                    </FixedButtonShadow>
                </View>
            </ButtonBox>
            <NewTaskDialog visible={isNewTaskDialogVisible} onClose={() => { setIsNewTaskDialogVisible(false) }} />
        </AppContainer>
    )
}