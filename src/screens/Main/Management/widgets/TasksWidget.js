import React, { useState } from 'react'
import { TitleBlack } from '../../../../components/AppFonts'
import styled from 'styled-components/native'
import { Gap } from '../../../../components/AppSpecialComponents'
import { TasksButtons, TasksListMock } from '../../../../utils/AppEnums'
import ButtonSelector from '../../../../components/ButtonSelector'
import { AppColors } from '../../../../utils/Pallete'
import TasksListWidget from './TasksListWidget'

const TaskBox = styled.View`
  width: 100%;
`

export default function TasksWidget() {
  const [selected, setSelected] = useState(0)
  return (
    <TaskBox>
     <TitleBlack size={20}>TAREFAS</TitleBlack>
     <Gap height={10}/>
     <ButtonSelector
     selected={selected}
      buttonList={TasksButtons}
      mainColor={AppColors.white}
      mainTextColor={AppColors.black}
      handleTabSelected={(val) => {
        setSelected(val)
      }}
     />
     <Gap height={26}/>
     <TasksListWidget 
     DATA={TasksListMock}/>
    </TaskBox>
  )
}