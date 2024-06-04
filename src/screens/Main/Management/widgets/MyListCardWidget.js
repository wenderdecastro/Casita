import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import { Row } from '../../../../components/AppContainers'
import AppSvgIcon, { AppIconName } from '../../../../../assets/Icons'
import { H1 } from '../../../../components/AppFonts'
import { Gap } from '../../../../components/AppSpecialComponents'
import { AppColors } from '../../../../utils/Pallete'

const CardBox = styled.View`
    width: 100%;
`

const Card = styled.View`
    padding: 10px;
    border-radius: 10px;
`

const Tag = styled.View`
    padding: 4px 4px 4px 4px;
    border-width: 2px;
    border-color: ${AppColors.black};
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ textColor }) => textColor};
    align-self: flex-start;
`

const TagBoxShadow = styled.View`
    background-color: ${AppColors.black};
    border-width: 2px;
    padding: 4px 4px 4px 4px;
    position: absolute;
    z-index: -9999;
    bottom: -4px;
    left: 1.25%;
    align-self: flex-start;
`


export default function MyListCardWidget({ cardColor, appIconName = AppIconName.default, label }) {
    return (
        <CardBox>
            <Card>
                <Row>
                    <AppSvgIcon name={appIconName} />
                    <H1>{label}</H1>
                </Row>
                <Gap height={25} />
            </Card>
        </CardBox>
    )
}