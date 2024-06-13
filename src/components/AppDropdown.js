import React, { useEffect } from 'react'
import { SelectList } from 'react-native-dropdown-select-list';
import styled from 'styled-components/native';
import { AppColors } from '../utils/Pallete';
import { Flex } from '../utils/AppEnums';
import { FontFamily } from './AppFonts';
import AppSvgIcon, { AppIconName } from '../../assets/Icons';

export const DropdownBox = styled.View`
        width: 100%;
        gap: 10px;
        
`

const BoxShadow = styled.View`
    background-color: ${AppColors.black};
    width: 100%;
    height: 50px;
    z-index: -9999;
    border-radius: 5px;
    position: absolute;
    bottom: -3px;
    left: 1%;
`

export default function AppDropdown({
    data,
    handleValueSelected = null,
    placeholder,
    label,
    isDisabled = false,
    selected = null
}
) {



    return (
        <DropdownBox pointerEvents={isDisabled ? 'none' : 'auto'}>
            {label ? (<TextSemiBold size={16}>{label}</TextSemiBold>) : null}
            <SelectList
                setSelected={(val) => handleValueSelected(val)}
                data={data}
                save="key"
                search={false}
                defaultOption={selected}
                dropdownStyles={{
                    backgroundColor: "white",
                    position: "absolute",
                    top: 36,
                    width: "100%",
                    zIndex: 99999,
                    borderColor: AppColors.black,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderTopWidth: 0,
                    borderTopRightRadius: 0,
                    borderTopLeftRadius: 0,
                    
                }}
                dropdownTextStyles={{
                    color: AppColors.black
                }}
                boxStyles={{
                    borderColor: AppColors.black,
                    borderRadius: 5,
                    height: 50,
                    borderWidth: 1,
                    alignItems: Flex.center,
                    backgroundColor: isDisabled ? AppColors.gray20 : AppColors.white,
                }}
                inputStyles={{
                    color: AppColors.black
                }}
                fontFamily={FontFamily.archivoBold}
                placeholder={placeholder}
                arrowicon={<AppSvgIcon name={AppIconName.arrowDown} color={AppColors.black}  size={30}/>}
                
            />
            <BoxShadow/>
        </DropdownBox>
    )
}