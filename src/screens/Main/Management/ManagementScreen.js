import React from 'react'
import { AppContainer } from '../../../components/AppContainers'
import { AppColors } from '../../../utils/Pallete'
import { Flex } from '../../../utils/AppEnums'
import MyDayWidget from './widgets/MyDayWidget'
import { Gap } from '../../../components/AppSpecialComponents'
import MyListsWidget from './widgets/MyListsWidget'
import TasksWidget from './widgets/TasksWidget'

export default function ManagementScreen() {
  return (
    <AppContainer justifyContent={Flex.flexStart} backgroundColor={AppColors.background}>
      <MyDayWidget/>
      <Gap height={30}/>
      <MyListsWidget/>
      <Gap height={15}/>
      <TasksWidget/>
    </AppContainer>
  )
}