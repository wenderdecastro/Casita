import { View, Text } from 'react-native'
import React from 'react'
import { AppColors } from '../../../../utils/Pallete'
import styled from 'styled-components/native'
import { Column, Row } from '../../../../components/AppContainers'
import { BodyMedium } from '../../../../components/AppFonts'

const CardBox = styled.TouchableOpacity`
    width: 100%;    
    border-radius: 10px;
    border-width: 1px;
    border-color: ${AppColors.black};
    padding: 12px;
    background-color: ${AppColors.background};
`

const GoalBar = styled.View`
    width: 100%;
    height: 10px;
    border-radius: 9999px;
    border-color: ${AppColors.altBlack};
    border-width: 2px;
    background-color: ${AppColors.gray20};
`
const ProgressBar = styled.View`
    width: ${({ progress = 0 }) => `${progress}%`};
    height: 10px;
    border-radius: 9999px;
    border-color: ${AppColors.altBlack};
    border-width: 2px;
    background-color: ${AppColors.blue};
    position: absolute;
`

export default function ListCardWidget({
    title,
    total = 0,
    actualProgress = 0,
    tagText,
}) {
    const progressPercentage = (actualProgress / total) * 100;
    return (

        <CardBox >
            <Row >
                <Column>
                    <Row >
                        <BodyMedium>{`${progressPercentage}%`}</BodyMedium>
                        <BodyMedium>{title}</BodyMedium>
                    </Row>

                    <View>
                        <GoalBar />
                        <ProgressBar progress={progressPercentage} />
                    </View>
                </Column>
            </Row>
        </CardBox>
    )
}