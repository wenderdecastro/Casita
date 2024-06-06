import styled from "styled-components";
import { AppColors } from "../utils/Pallete";
import { PositionedImage } from "./AppContainers";
import { AppAssets } from "../../assets/AppAssets";
import { TitleBlack, BodyMedium } from "./AppFonts";
import { Column } from "./AppContainers";
import { useState, forwardRef, useImperativeHandle, useRef, useEffect } from "react";
import { Animated, View, Easing } from "react-native";

const Toast = styled.View`
    width: 100%;
    height: 80px;
    z-index: 9999;
    background-color: ${AppColors.white};
    border-color: ${AppColors.black};
    border-width: 1px ;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
`

const BoxShadow = styled.View`
    background-color: ${AppColors.black};
    width: 100%;
    height: 80px;
    border-radius: 10px;
    position: absolute;
    bottom: -3px;
    left: 1%;
`

const Icon = styled.View`
    width: 45px;
    height: 45px;
    z-index: 9999;
    background-color: ${({ color = AppColors.green }) => color};
    border-color: ${AppColors.black};
    border-width: 1px ;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`

const IconShadow = styled.View`
    background-color: ${AppColors.black};
    width: 45px;
    height: 45px;
    border-radius: 10px;
    position: absolute;
    bottom: -3px;
    left: 1%;
`

const IconBox = styled.View`
    width: 50px;
    margin-left: 20px;
    margin-right: 20px;
`

const ToastMessage = forwardRef(({ type = 'success', description = 'descrição', title = 'titulo', timeout = 2500, color, icon }, ref) => {

    const [isVisible, setIsVisible] = useState(false);
    const topProp = new Animated.Value(-100);

    const showToast = () => {
        setIsVisible(true);

        Animated.timing(topProp, {
            toValue: 50,
            duration: 500,
            useNativeDriver: false,
            easing: Easing.out(Easing.exp),
        }).start();

        const timer = setTimeout(() => {
            setIsVisible(false);
            clearTimeout(timer);
        }, timeout);
    };

    useImperativeHandle(ref, () => ({
        show: showToast
    }));

    const ToastType = {
        success: {
            color: AppColors.green,
            icon: AppAssets.successIcon
        },
        warning: {
            color: AppColors.yellow,
            icon: AppAssets.exclamationIcon
        },
        error: {
            color: AppColors.red,
            icon: AppAssets.errorIcon
        },
    }

    const colorIcon = ToastType[type].color;
    const imageIcon = ToastType[type].icon;


    return (
        <>
            {isVisible && (
                <Animated.View style={{ width: '100%', position: 'absolute', top: topProp }}>
                    <Toast>
                        <IconBox>
                            <Icon color={colorIcon}>
                                <PositionedImage position={'relative'} source={imageIcon} />
                            </Icon>
                            <IconShadow />
                        </IconBox>

                        <Column>
                            <TitleBlack size={18}>{title}</TitleBlack>
                            <BodyMedium color={AppColors.black}>{description}</BodyMedium>
                        </Column>
                    </Toast>
                    <BoxShadow />
                </Animated.View>
            )}
        </>
    );
})

export default ToastMessage;