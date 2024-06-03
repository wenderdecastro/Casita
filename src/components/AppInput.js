import React, { useState } from 'react'
import styled from 'styled-components/native'
import { BodyLarge, FontFamily, H2 } from './AppFonts'
import { AppColors } from '../utils/Pallete'
import AppSvgIcon, { AppIconName } from '../../assets/Icons'
import { Gap } from './AppSpecialComponents'
import { TouchableOpacity } from 'react-native'
import { KeyboardType } from '../utils/AppEnums'

const Input = styled.TextInput`
    height: ${({ isTextArea = false }) => isTextArea ? '80px' : '40px'};
    z-index: 9999;
    border-radius: ${({ borderRadius }) => `${borderRadius}px`};;
    border-width: 1px;
    padding: 8px;
    font-family: ${FontFamily.archivoBold};
    border-color: ${({ borderColor = AppColors.black }) => borderColor};
    background-color: ${({ isEditable = true, backgroundColor }) => isEditable ? backgroundColor : AppColors.gray20};
`

const InputBox = styled.View`
    width: 100%;
`

const BoxShadow = styled.View`
    background-color: ${AppColors.black};
    width: 100%;
    height: ${({ isTextArea = false }) => isTextArea ? '80px' : '40px'};
    border-radius: ${({ borderRadius }) => `${borderRadius}px`};;
    position: absolute;
    bottom: -2px;
    left: 0.6%;
`

const IconBox = styled.View`
    position: absolute;
    z-index: 10000;
    right: 5%;
    top: ${({ label }) => label ? '50%' : '25%'};
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
    keyboardType = KeyboardType.default,
    backgroundColor = AppColors.background,
    borderRadius = 0
}) {
    const handleInputChange = (value) => {
        onChangeText === null ? null : onChangeText(value);
    };

    const [newIsObscure, setNewIsObscure] = useState(isObscureText)
    return (
        <InputBox>
            {label ? (<BodyLarge color={AppColors.black}>{label}</BodyLarge>) : null}

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
                borderRadius={borderRadius}
                backgroundColor={backgroundColor}
                cursorColor={AppColors.black}
            />
            <BoxShadow isTextArea={isTextArea} borderRadius={borderRadius} />
            <IconBox  label={label}>
                {isObscureText ?
                    <TouchableOpacity onPress={() => { setNewIsObscure(!newIsObscure) }}>
                        <AppSvgIcon name={newIsObscure ? AppIconName.eye : AppIconName.eyeOff} color={AppColors.black} />
                    </TouchableOpacity> :
                    SuffixIcon ? SuffixIcon :
                        <Gap />}

            </IconBox>
        </InputBox>

    )
}