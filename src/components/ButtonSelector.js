import React, { Fragment } from 'react'
import { Flex } from '../utils/AppEnums';
import { Gap } from './AppSpecialComponents';
import styled from 'styled-components/native';
import { Row } from './AppContainers';
import { BodyLarge, BodyMedium } from './AppFonts';
import { AppColors } from '../utils/Pallete';

const ButtonSelecter = styled.TouchableOpacity`
    background-color: ${({backgroundColor }) => backgroundColor};
`

function Button({ isSelected, color, textColor, textButton, flex, onTap }) {
    return (
        <ButtonSelecter onPress={onTap} backgroundColor={color}>
            <BodyLarge color={textColor}>{textButton}</BodyLarge>
        </ButtonSelecter>
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