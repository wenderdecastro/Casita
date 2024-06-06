import React, { useState } from 'react'
import { AppContainer } from '../../../components/AppContainers'
import { AppColors } from '../../../utils/Pallete'
import { Flex } from '../../../utils/AppEnums'
import MyDayWidget from './widgets/MyDayWidget'
import { Gap } from '../../../components/AppSpecialComponents'
import MyListsWidget from './widgets/MyListsWidget'
import TasksWidget from './widgets/TasksWidget'
import styled from 'styled-components/native'
import AppSvgIcon, { AppIconName } from '../../../../assets/Icons'
import NewTaskDialog from './widgets/dialogs/NewTaskDialog'

const FixedButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${AppColors.yellow};
  border-radius: 9999px;
  border-width: 1px;
  border-color: ${AppColors.black};
  position: absolute;
  bottom: 100px;
  right: 20px;
  z-index: 1;
`

const FixedButtonShadow = styled.View`
  padding: 15px;
  background-color: ${AppColors.black};
  border-radius: 9999px;
  border-width: 1px;
  border-color: ${AppColors.black};
  position: absolute;
  bottom: 99px;
  right: 18px;
  z-index: 0;
`

export default function ManagementScreen() {

  const [isNewTaskDialogVisible, setIsNewTaskDialogVisible] = useState(false)

  return (
    <AppContainer justifyContent={Flex.flexStart} backgroundColor={AppColors.background}>
      <MyDayWidget />
      <Gap height={30} />
      <MyListsWidget />
      <Gap height={15} />
      <TasksWidget />

      <FixedButton activeOpacity={0.9} onPress={() => { setIsNewTaskDialogVisible(true)}}>
        <AppSvgIcon name={AppIconName.add} />
      </FixedButton>
      <FixedButtonShadow>
        <AppSvgIcon name={AppIconName.add} />
      </FixedButtonShadow>

    <NewTaskDialog visible={isNewTaskDialogVisible} onClose={() => {setIsNewTaskDialogVisible(false)}} />
    </AppContainer>
  )
}