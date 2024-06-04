import { View, Text } from 'react-native'
import React from 'react'
import { TitleBlack } from '../../../../components/AppFonts'
import { Gap } from '../../../../components/AppSpecialComponents'



export default function MyListsWidget() {
  return (
    <View>
      <TitleBlack>MINHAS LISTAS</TitleBlack>
      <Gap height={10}/>
    </View>
  )
}