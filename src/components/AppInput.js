import React, { useState } from 'react'
import styled from 'styled-components/native'
import { FontFamily, H2 } from './AppFonts'
import { AppColors } from '../utils/Pallete'
import SvgIcon, { IconName } from '../../assets/Icons'
import { Gap } from './AppSpecialComponents'
import { TouchableOpacity } from 'react-native'
import { KeyboardType } from '../utils/AppEnums'

export const Input = styled.TextInput`
    height: ${({ isTextArea = false }) => isTextArea ? '120px' : '60px'};
    z-index: 9999;
    border-radius: 5px;
    border-width: 2px;
    padding: 16px;
    font-family: ${FontFamily.archivoBold};
    border-color: ${({ borderColor = AppColors.black }) => borderColor};
    background-color: ${({ isEditable = true }) => isEditable ? AppColors.white : AppColors.gray20};
`

const InputBox = styled.View`
    width: 100%;
    gap: 5px;
`

const BoxShadow = styled.View`
    background-color: ${AppColors.black};
    width: 100%;
    height: ${({ isTextArea = false }) => isTextArea ? '120px' : '60px'};
    border-radius: 5px;
    position: absolute;
    bottom: -4px;
    left: 1.25%;
`

const IconBox = styled.View`
    position: absolute;
    z-index: 10000;
    right: 5%;
    top: ${({ label }) => label ? '55%' : '30%'};
`

export default function AppInput({
    label,
    placeholder,
    isEditable = true,
    isTextArea = false,
    isObscureText = false,
    onChangeText = null,
    textValue,
    SuffixIcon,
    keyboardType = KeyboardType.default
}) {
    const handleInputChange = (value) => {
        onChangeText === null ? null : onChangeText(value);
    };

    const [newIsObscure, setNewIsObscure] = useState(isObscureText)
    return (
        <InputBox>
            {label ? (<H2 size={16}>{label}</H2>) : null}

            <Input
            placeholder={placeholder}
                isEditable={isEditable}
                editable={isEditable}
                isTextArea={isTextArea}
                multiline={isTextArea}
                numberOfLines={isTextArea ? 5 : 1}
                textAlignVertical={isTextArea ? 'top' : 'center'}
                onChangeText={handleInputChange}
                value={textValue}
                secureTextEntry={newIsObscure}
                keyboardType={keyboardType}
            />
            <BoxShadow isTextArea={isTextArea} />
            <IconBox  label={label}>
                {isObscureText ?
                    <TouchableOpacity onPress={() => { setNewIsObscure(!newIsObscure) }}>
                        <SvgIcon name={newIsObscure ? IconName.eye : IconName.eyeOff} color={AppColors.black} />
                    </TouchableOpacity> :
                    SuffixIcon ? SuffixIcon :
                        <Gap />}

            </IconBox>
        </InputBox>

    )
}