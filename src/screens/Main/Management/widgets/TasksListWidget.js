import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { AppColors } from '../../../../utils/Pallete'
import { BodyLarge, H1 } from '../../../../components/AppFonts'
import styled from 'styled-components/native'
import { Gap } from '../../../../components/AppSpecialComponents'
import TaskCardWidget from './TaskCardWidget'
import { TextAlign } from '../../../../utils/AppEnums'

const List = styled.View`
    flex: ${({flex}) => flex};
    width: 100%;
`

export default function TasksListWidget({ DATA, tapAction, flex = 1, background = AppColors.background, emptyMessage = '' }) {
    return (
        <List flex={flex}>
            <FlatList
                endFillColor={background}
                data={DATA}
                
                renderItem={({ item }) =>
                (
                    <TaskCardWidget
                    onTap={() => tapAction(item)}
                     key={Math.random()} 
                     item={item}/>
                )
                }
                keyExtractor={item => item.id}
                ListEmptyComponent={<BodyLarge textAlign={TextAlign.center}>{emptyMessage}</BodyLarge>}
                ItemSeparatorComponent={<Gap height={20} />}
                contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 5 }}
                showsVerticalScrollIndicator={false}
            />
        </List>
    )
}