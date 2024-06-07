import React, { useState } from 'react'
import { AppContainer } from '../../../components/AppContainers'
import { AppColors } from '../../../utils/Pallete'
import { Flex, TasksButtons, TasksListMock } from '../../../utils/AppEnums'
import MyDayWidget from './widgets/MyDayWidget'
import { Gap } from '../../../components/AppSpecialComponents'
import MyListsWidget from './widgets/MyListsWidget'
import styled from 'styled-components/native'
import AppSvgIcon, { AppIconName } from '../../../../assets/Icons'
import NewTaskDialog from './widgets/dialogs/NewTaskDialog'
import EditTaskDialog from './widgets/dialogs/EditTaskDialog'
import TasksListWidget from './widgets/TasksListWidget'
import ButtonSelector from '../../../components/ButtonSelector'
import { TitleBlack } from '../../../components/AppFonts'
import { AppNavigation, AppRoutesKeys } from '../../../utils/AppRoutes/AppRoutesUtils'

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

const TaskBox = styled.View`
  width: 100%;
`

export default function ManagementScreen({ navigation }) {

  const [selected, setSelected] = useState(0)

  const [isNewTaskDialogVisible, setIsNewTaskDialogVisible] = useState(false)
  const [isEditTaskDialogVisible, setIsEditTaskDialogVisible] = useState(false)

  const [taskSelected, setTaskSelected] = useState()

  const handleOpenEditModal = (task) => {
    setTaskSelected(task)
    setIsEditTaskDialogVisible(true)
  }

  return (
    <AppContainer justifyContent={Flex.flexStart} backgroundColor={AppColors.background}>
      <MyDayWidget onTap={() => { AppNavigation.push(navigation, AppRoutesKeys.myDayScreen) }} />
      <Gap height={30} />
      <MyListsWidget />
      <Gap height={15} />

      <TaskBox>
        <TitleBlack size={20}>TAREFAS</TitleBlack>
      </TaskBox>
      <Gap height={10} />
      <ButtonSelector
        selected={selected}
        buttonList={TasksButtons}
        mainColor={AppColors.white}
        mainTextColor={AppColors.black}
        handleTabSelected={(val) => {
          setSelected(val)
        }}
      />
      <Gap height={3} />
      <TasksListWidget
        DATA={TasksListMock}
        tapAction={handleOpenEditModal}
        flex={0.85} />


      <FixedButton activeOpacity={0.9} onPress={() => { setIsNewTaskDialogVisible(true) }}>
        <AppSvgIcon name={AppIconName.add} />
      </FixedButton>
      <FixedButtonShadow>
        <AppSvgIcon name={AppIconName.add} />
      </FixedButtonShadow>

      <NewTaskDialog visible={isNewTaskDialogVisible} onClose={() => { setIsNewTaskDialogVisible(false) }} />
      <EditTaskDialog visible={isEditTaskDialogVisible} onClose={() => { setIsEditTaskDialogVisible(false) }} item={taskSelected} />
    </AppContainer>
  )
}