import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import { Row } from '../../../../components/AppContainers'
import AppSvgIcon, { AppIconName } from '../../../../../assets/Icons'
import { BodyMedium, H1, H3, TitleBlack } from '../../../../components/AppFonts'
import { Gap } from '../../../../components/AppSpecialComponents'
import { AppColors } from '../../../../utils/Pallete'

const CardBox = styled.TouchableOpacity`
    flex: 1;
`

const Card = styled.View`
    padding: 10px;
    border-radius: 10px;
    background-color: ${({ backgroundColor }) => backgroundColor};
    border-width: 1px;
    border-color: ${AppColors.black};
`

const CardBoxShadow = styled.View`
    background-color: ${AppColors.black};
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    position: absolute;
    z-index: -9999;
    bottom: -2px;
    left: 0.5%;
`

const Tag = styled.View`
   padding: 0px 15px 0px 15px;
    border-width: 2px;
    border-color: ${AppColors.black};
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ textColor }) => textColor};
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




export default function MyListCardWidget({
    cardColor = AppColors.green,
    appIconName = AppIconName.default,
    label,
    tagText,
    tagTextColor = AppColors.white,
    tagColor = AppColors.blue,
}) {
    return (
        <CardBox activeOpacity={0.9}>
            <Card backgroundColor={cardColor}>
                <Row>
                    <AppSvgIcon name={appIconName} />
                    <Gap width={5}/>
                    <BodyMedium color={AppColors.black}>{label}</BodyMedium>
                </Row>
                <Gap height={25} />
                {tagText ? <View>
                    <Tag backgroundColor={tagColor}>

                        <TitleBlack size={24} color={tagTextColor}>
                            {tagText}
                        </TitleBlack>


                    </Tag>
                    <TagBoxShadow>
                    <TitleBlack size={24} color={tagTextColor}>
                            {tagText}
                        </TitleBlack>
                    </TagBoxShadow>
                </View> : null}
            </Card>
            <CardBoxShadow>
            <Row>
                    <AppSvgIcon name={appIconName} />
                    <Gap width={5}/>
                    <BodyMedium color={AppColors.black}>{label}</BodyMedium>
                </Row>
                <Gap height={25} />
                {tagText ? <View>
                    <Tag backgroundColor={tagColor}>

                    <TitleBlack size={24} color={tagTextColor}>
                            {tagText}
                        </TitleBlack>


                    </Tag>
                    <TagBoxShadow>
                    <TitleBlack size={24} color={tagTextColor}>
                            {tagText}
                        </TitleBlack>
                    </TagBoxShadow>
                </View> : null}
            </CardBoxShadow>
        </CardBox>
    )
}