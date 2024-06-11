import { View, Text } from 'react-native'
import React from 'react'
import AppSvgIcon, { AppIconName } from '../../assets/Icons'
import { AppColors } from '../utils/Pallete'
import styled from 'styled-components/native'

const CheckBox = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    background-color: ${({ isChecked }) => isChecked ? AppColors.yellow : AppColors.white};
    border-width: 1px;
    border-color: ${AppColors.black};
    align-items: center;
    justify-content: center;
`

export default function AppCheckBox({ isChecked, handleCheck }) {
    return (
        <CheckBox onPress={() => { handleCheck(!isChecked) }} isChecked={isChecked}>
            {isChecked ? <AppSvgIcon size={25} name={AppIconName.checkTask} /> : null}
        </CheckBox>
    )
}