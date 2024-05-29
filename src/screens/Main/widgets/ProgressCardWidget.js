import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import { AppColors } from '../../../utils/Pallete'
import { BodyLarge, H1, H2, H3 } from '../../../components/AppFonts'
import { Gap } from '../../../components/AppSpecialComponents'
import { Row } from '../../../components/AppContainers'
import { Flex } from '../../../utils/AppEnums'

const CardBox = styled.View`
    width: 100%;
    padding: 21px 34px 20px 32px;
    border-color: ${AppColors.altBlack};
    border-width: 2px;
    background-color: ${AppColors.secondary};
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
    background-color: ${({ progressBarColor }) => progressBarColor};
    position: absolute;
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

export default function ProgressCardWidget({
    title,
    subtitle,
    total = 0,
    actualProgress = 0,
    actualProgressColor = AppColors.green,
    tagText,
    tagTextColor = AppColors.white,
    tagColor = AppColors.blue,
}) {
    const progressPercentage = (actualProgress / total) * 100;
    return (
        
        <CardBox>
            <H2>{title}</H2>
            <Gap height={5} />
            <BodyLarge>{subtitle}</BodyLarge>
            <Gap height={5} />
            <Row width={'80%'} alignItems={Flex.center} >
                <GoalBar />
                <ProgressBar progress={progressPercentage} progressBarColor={actualProgressColor}/>
                <Gap width={5} />
                <BodyLarge color={AppColors.altBlack}>{`${progressPercentage.toFixed(0)}%`}</BodyLarge>
            </Row>
            <Gap height={5} />
             {tagText ? <View>
            <Tag backgroundColor={tagColor}>

                <H3 color={tagTextColor}>
                    {tagText}
                </H3>

                
            </Tag>
            <TagBoxShadow>
            <H3 color={AppColors.black}>
                    {tagText}
                </H3>
            </TagBoxShadow>
            </View> : null }
        </CardBox>
    )
}