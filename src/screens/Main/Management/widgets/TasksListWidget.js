import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { AppColors } from '../../../../utils/Pallete'
import { H1 } from '../../../../components/AppFonts'
import styled from 'styled-components/native'
import { Gap } from '../../../../components/AppSpecialComponents'
import TaskCardWidget from './TaskCardWidget'

const List = styled.View`
    height: 300px;
    width: 100%;
`

export default function TasksListWidget({ DATA, tapAction }) {
    return (
        <List>
            <FlatList
                endFillColor={AppColors.background}
                data={DATA}
                
                renderItem={({ item }) =>
                (
                    <TaskCardWidget key={Math.random()} item={item}/>
                )
                }
                keyExtractor={item => item.id}
                ItemSeparatorComponent={<Gap height={10} />}
                contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 5 }}
                showsVerticalScrollIndicator={false}
            />
        </List>
    )
}