import { View, Text } from 'react-native'
import React from 'react'
import { AppColors } from '../../../../utils/Pallete'
import styled from 'styled-components/native'
import { Column, Row } from '../../../../components/AppContainers'
import { BodyMedium, TitleBlack } from '../../../../components/AppFonts'
import { Gap } from '../../../../components/AppSpecialComponents'

const CardBox = styled.TouchableOpacity`
    width: 100%;    
    border-radius: 10px;
    border-width: 1px;
    border-color: ${AppColors.black};
    padding: 15px;
    background-color: ${AppColors.background};
`

const CardShadow = styled.View`
    padding: 15px;
    border-width: 1px;
    border-color: ${AppColors.black};
    background-color: ${AppColors.black};
    width: 100%;   
    border-radius: 10px;
    position: absolute;
    top: 3px;
    left: 1.5px;
    z-index: -99999;
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

const Tag = styled.View`
   padding: 0px 15px 0px 15px;
    border-width: 2px;
    border-color: ${AppColors.black};
    background-color: ${AppColors.white};
    color: ${AppColors.black};
    align-self: flex-end;
`

const TagBoxShadow = styled.View`
    background-color: ${AppColors.black};
    border-width: 2px;
    padding: 0px 15px 0px 15px;
    position: absolute;
    z-index: -9999;
    bottom: -4px;
    right: -1.25%;
`

export default function ListCardWidget({
    title,
    total = 0,
    actualProgress = 0,
    tagText,
    onTap
}) {
    const progressPercentage = (actualProgress / total) * 100;
    return (

        <View style={{width: '100%'}}>
            <CardBox activeOpacity={0.9} onPress={onTap} >
                <Row >
                    <Column>
                        <Row >
                            <BodyMedium color={AppColors.black}>{`${progressPercentage}%`}</BodyMedium>
                            <Gap width={6} />
                            <BodyMedium color={AppColors.black}>{title}</BodyMedium>
                        </Row>
                        <Gap height={10} />
                        <Row width={'80%'} >
                            <GoalBar />
                            <ProgressBar progress={progressPercentage} />
                        </Row>

                    </Column>

                    {tagText ? <View>
                        <Tag>

                            <TitleBlack size={24}>
                                {tagText}
                            </TitleBlack>


                        </Tag>
                        <TagBoxShadow>
                            <TitleBlack size={24}>
                                {tagText}
                            </TitleBlack>
                        </TagBoxShadow>
                    </View> : null}
                </Row>
            </CardBox>
            <CardShadow>
                <Row >
                    <Column>
                        <Row >
                            <BodyMedium color={AppColors.black}>{`${progressPercentage}%`}</BodyMedium>
                            <Gap width={6} />
                            <BodyMedium color={AppColors.black}>{title}</BodyMedium>
                        </Row>
                        <Gap height={10} />
                        <Row width={'80%'} >
                            <GoalBar />
                            <ProgressBar progress={progressPercentage} />
                        </Row>

                    </Column>

                    {tagText ? <View>
                        <Tag>

                            <TitleBlack size={24}>
                                {tagText}
                            </TitleBlack>


                        </Tag>
                        <TagBoxShadow>
                            <TitleBlack size={24}>
                                {tagText}
                            </TitleBlack>
                        </TagBoxShadow>
                    </View> : null}
                </Row>
            </CardShadow>
        </View>

    )
}