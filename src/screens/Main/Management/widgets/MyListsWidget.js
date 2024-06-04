import { View, Text } from 'react-native'
import React from 'react'
import { DualTextWithShadow, H3, TitleBlack, TitleExtraLarge } from '../../../../components/AppFonts'
import { Gap } from '../../../../components/AppSpecialComponents'
import MyListCardWidget from './MyListCardWidget'
import styled from 'styled-components'
import { Row } from '../../../../components/AppContainers'
import { AppIconName } from '../../../../../assets/Icons'
import { AppColors } from '../../../../utils/Pallete'
import AppTextShadow from '../../../../components/AppTextShadow'
import TextStroke from '../../../../components/AppTextShadow'

const ListBox = styled.View`
    width: 100%;
`

export default function MyListsWidget() {
    return (
        <ListBox>
            <TitleBlack size={20}>MINHAS LISTAS</TitleBlack>
            <Gap height={10} />
            <Row>
                <MyListCardWidget
                    appIconName={AppIconName.shoppingCart}
                    label={'Lista de compras'}
                    tagText={5}
                    tagColor={AppColors.white}
                    tagTextColor={AppColors.black}
                />
                <Gap width={10} />
                <MyListCardWidget
                    appIconName={AppIconName.asterisk}
                    label={'Objetivos'}
                    cardColor={AppColors.yellow}
                    tagText={5}
                    tagTextColor={AppColors.black}
                    tagColor={AppColors.white}
                />
            </Row>
            <Gap height={15} />
            <TextStroke stroke={1} color={'#000000'}>
                <H3 color={AppColors.white}> Ver Todas </H3>
            </TextStroke>
        </ListBox>
    )
}