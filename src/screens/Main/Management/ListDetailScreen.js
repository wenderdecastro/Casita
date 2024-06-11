import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { Flex, TasksListMock } from '../../../utils/AppEnums'
import { AppContainer, Row } from '../../../components/AppContainers'
import { AppColors } from '../../../utils/Pallete'
import { Gap } from '../../../components/AppSpecialComponents'
import { TitleBlack } from '../../../components/AppFonts'
import TasksListWidget from './widgets/TasksListWidget'
import { AppAssets } from '../../../../assets/AppAssets'
import AppSvgIcon, { AppIconName } from '../../../../assets/Icons'
import NewTaskDialog from './widgets/dialogs/NewTaskDialog'
import styled from 'styled-components/native'

const FixedButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${AppColors.yellow};
  border-radius: 9999px;
  border-width: 1px;
  border-color: ${AppColors.black};
  position: absolute;
  bottom: 30px;
  right: 20px;
  z-index: 0;
`

const FixedButtonShadow = styled.View`
  padding: 15px;
  background-color: ${AppColors.black};
  border-radius: 9999px;
  border-width: 1px;
  border-color: ${AppColors.black};
  position: absolute;
  bottom: 29px;
  right: 18px;
  z-index: -1;
`

export default function ListDetailScreen() {

  const [isNewTaskDialogVisible, setIsNewTaskDialogVisible] = useState(false)
  return (
    <AppContainer alignItems={Flex.flexStart} justifyContent={Flex.flexStart} backgroundColor={AppColors.background}>
      <Row alignItems={Flex.center}>
        <Image style={{
          width: 45,
          height: 45,
          resizeMode: 'contain',

        }} source={AppAssets.eightPointBlueStar} />
        <Gap width={13} />
        <TitleBlack size={32}>LISTA 1</TitleBlack>
      </Row>
      <Gap height={30} />
      <TitleBlack size={20}>TAREFAS</TitleBlack>
      <TasksListWidget
        DATA={TasksListMock}
        tapAction={() => { }}
        flex={0.9}
      />
    <FixedButton activeOpacity={0.9} onPress={() => {setIsNewTaskDialogVisible(true)}}>
        <AppSvgIcon name={AppIconName.add} />
      </FixedButton>
      <FixedButtonShadow>
        <AppSvgIcon name={AppIconName.add} />
      </FixedButtonShadow>
      <NewTaskDialog visible={isNewTaskDialogVisible} onClose={() => { setIsNewTaskDialogVisible(false) }} />
    </AppContainer>
  )
}