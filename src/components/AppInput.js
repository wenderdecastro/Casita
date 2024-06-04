import React, { useState } from 'react'
import styled from 'styled-components/native'
import { BodyLarge, FontFamily, H2 } from './AppFonts'
import { AppColors } from '../utils/Pallete'
import AppSvgIcon, { AppIconName } from '../../assets/Icons'
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field'
import { Gap } from './AppSpecialComponents'
import { TouchableOpacity, View } from 'react-native'
import { KeyboardType } from '../utils/AppEnums'

const Input = styled.TextInput`
    height: ${({ isTextArea = false }) => isTextArea ? '80px' : '40px'};
    z-index: 9999;
    border-radius: ${({ borderRadius }) => `${borderRadius}px`};
    border-width: 1px;
    padding: 8px;
    border-color: ${({ borderColor = AppColors.black }) => borderColor};
    background-color: ${({ isEditable = true, backgroundColor }) => isEditable ? backgroundColor : AppColors.gray20};
    font-family: ${FontFamily.archivoBlack};
    font-size: ${({ fontSize }) => fontSize || '16px'};
    display: flex;
    align-items: center;
    text-align: ${({ textAlign }) => textAlign || 'start'};
`

const InputBox = styled.View`
    width: ${({ inputWidth }) => inputWidth || '100%'};
`;

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
    borderRadius = 0,
    inputWidth,
    fontSize,
    textAlign,
}) {
    const handleInputChange = (value) => {
        onChangeText === null ? null : onChangeText(value);
    };

    const [newIsObscure, setNewIsObscure] = useState(isObscureText)
    return (
        <InputBox inputWidth={inputWidth}>
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
                placeholderTextColor={AppColors.black}
                fontSize={fontSize}
                textAlign={textAlign}
            />
            <BoxShadow isTextArea={isTextArea} borderRadius={borderRadius} />
            <IconBox label={label}>
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

const CELL_COUNT = 5;

const Cell = styled.Text`
    width: 40px;
    height: 40px;
    font-size: 16px;
    border-width: 1px;
    border-color: ${({ isFocused }) => isFocused ? AppColors.blue : AppColors.black};
    text-align: center;
    padding-top: 7px;
    color: ${AppColors.black};
    margin: 0 11px;
    background-color: ${AppColors.background};
    font-family: ${FontFamily.archivoBlack};
`
const CellShadow = styled.View`
    background-color: ${({ isFocused }) => isFocused ? AppColors.blue : AppColors.black};
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: -2px;
    left: 13px;
    z-index: -99999;
`

const CodeBox = styled.View`
    gap: 10px;
    align-items: center;
`

export function AppCodeInput({ onValueChange = null, label }) {
    const [value, setValue] = useState('');

    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });


    const handleValueChange = (newValue) => {
        setValue(newValue);
        setTimeout(() => {
            onValueChange(newValue);
        }, 0);
    };


    return (
        <CodeBox>
            {label ? <BodyLarge color={AppColors.black}>{label}</BodyLarge> : null}
            <CodeField
                ref={ref}
                value={value}
                onChangeText={handleValueChange}
                cellCount={CELL_COUNT}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => {
                    return (
                        <View key={index}>
                            <CellShadow isFocused={isFocused} />
                            <Cell

                                isFocused={isFocused}
                                onLayout={getCellOnLayoutHandler(index)}
                            >
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Cell>
                        </View>
                    );
                }}
            />
        </CodeBox>

    );
}