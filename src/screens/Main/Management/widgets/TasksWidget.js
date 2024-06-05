import React from 'react'
import { TitleBlack } from '../../../../components/AppFonts'
import styled from 'styled-components/native'
import { Gap } from '../../../../components/AppSpecialComponents'
import { TasksButtons } from '../../../../utils/AppEnums'
import ButtonSelector from '../../../../components/ButtonSelector'

const TaskBox = styled.View`
  width: 100%;
`

export default function TasksWidget() {
  return (
    <TaskBox>
     <TitleBlack size={20}>TAREFAS</TitleBlack>
     <Gap height={10}/>
     <ButtonSelector
      buttonList={TasksButtons}
     />
    </TaskBox>
  )
}