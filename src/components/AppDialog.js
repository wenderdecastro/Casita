import styled from "styled-components/native"
import { Flex } from "../utils/AppEnums"
import { AppColors } from "../utils/Pallete"
import { KeyboardAvoidingView, Platform } from "react-native"
import { Fragment } from "react"


export const Dialog = styled.Modal`
`

export const DialogContainer = styled.SafeAreaView`
    justify-content: ${({ justifyContentContainer = Flex.center, isFaded = false }) => isFaded ? Flex.flexEnd : justifyContentContainer};
    flex: 1;
    background-color: rgba(0,0,0,0.5);
    padding: ${({ padding = 30 }) => `${padding}px`};
`

export const DialogBox = styled.View`
    padding: ${({ paddingInside = 27 }) => `${paddingInside}px`};
    background-color: ${AppColors.background};
    border-radius: 10px;
    border-width: 1px;
    border-color: ${AppColors.black};
    flex: ${({ flex = '0 1 auto' }) => flex};
    justify-content: ${({ justifyContentBox = Flex.center }) => justifyContentBox};
    align-items: ${({ alignItemsBox = Flex.center }) => alignItemsBox};
`

export default function AppDialog({
    visible, 
    onClose, 
    children, 
    animationType = "none", 
    justifyContentContainer, 
    justifyContentBox, 
    flex, 
    padding, 
    isFaded, 
    paddingInside, 
    isAvoiding = false,
}) {

    return (
        <Dialog
            visible={visible}
            animationType={animationType}
            transparent={true}
            onRequestClose={onClose}
            statusBarTranslucent
        >
            <DialogContainer
                padding={padding}
                justifyContent={justifyContentContainer}
                isFaded={isFaded}
            >
                {isAvoiding ? (
                    <KeyboardAvoidingView
                        behavior="padding"
                        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
                    >
                        <DialogBox justifyContentBox={justifyContentBox} flex={flex} paddingInside={paddingInside}>
                            {children}
                        </DialogBox>
                    </KeyboardAvoidingView>
                ) : (
                    <Fragment>
                        <DialogBox justifyContentBox={justifyContentBox} flex={flex} paddingInside={paddingInside}>
                            {children}
                        </DialogBox>
                    </Fragment>
                )}
            </DialogContainer>
        </Dialog>
    )
}