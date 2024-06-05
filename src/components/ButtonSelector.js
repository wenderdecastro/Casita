import React, { Fragment } from 'react'
import { Flex } from '../utils/AppEnums';
import { Gap } from './AppSpecialComponents';
import styled from 'styled-components/native';
import { Row } from './AppContainers';
import { BodyLarge, BodyMedium, H1 } from './AppFonts';
import { AppColors } from '../utils/Pallete';

const ButtonSelecter = styled.TouchableOpacity`
    background-color: ${({ backgroundColor, isSelected = false }) => !isSelected ? AppColors.yellow : backgroundColor};
    padding: 9px 20px 9px 20px;
    border-width: 1px;
    border-color: ${AppColors.black};
    align-items: center;
`

const ButtonBox = styled.View`
    flex: 1;
`
const ButtonShadow = styled.View`
    padding: 9px 20px 9px 20px;
    width: 100%;
    background-color: ${AppColors.black};
    position: absolute;
    top: 5px;
    left: 3px;
    z-index: -9999;
`

function Button({ isSelected, color, textColor, textButton, flex, onTap }) {
    return (
        <ButtonBox>
            <ButtonSelecter activeOpacity={1} isSelected={isSelected} onPress={onTap} backgroundColor={color}>
                <H1 size={14} color={textColor}>{textButton}</H1>
            </ButtonSelecter>
            <ButtonShadow>
                <H1 size={14} color={textColor}>{textButton}</H1>
            </ButtonShadow>
        </ButtonBox>
    )
}

export default function ButtonSelector({
    selected,
    handleTabSelected,
    mainColor = AppColors.black,
    mainTextColor,
    buttonList = [],
    spacing = 10
}) {
    return (
        <>
            <Row justifyContent={Flex.spaceBetween} width={'100%'}>
                {buttonList.map((buttonPreferences, index) => {
                    const isLastItem = index === buttonList.length - 1;
                    return <Fragment key={index}>

                        <Button

                            isSelected={selected !== buttonPreferences.type}
                            textButton={buttonPreferences.text}
                            flex={1}
                            onTap={() => {
                                handleTabSelected(buttonPreferences.type)
                            }}
                            color={mainColor}
                            textColor={mainTextColor}
                        />
                        {!isLastItem && <Gap width={spacing} />}
                    </Fragment>
                })}
            </Row>
        </>
    )
}