import React from "react";
import Toast from "react-native-toast-message";
import { TitleBlack, BodyMedium } from "./AppFonts";

const toastConfig = {
    success: (props) => (
        <View style={{ height: 60, width: '100%' }}>
            <TitleBlack>{text1}</TitleBlack>
            <BodyMedium>{props.uuid}</BodyMedium>
        </View>
    ),
    error: (props) => (
        <ErrorToast
            {...props}
            text1Style={{
                fontSize: 17
            }}
            text2Style={{
                fontSize: 15
            }}
        />
    ),
    tomatoToast: ({ text1, props }) => (
        <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
            <TitleBlack>{text1}</TitleBlack>
            <Text>{props.uuid}</Text>
        </View>
    )
};

export function App(props) {
    return (
        <>

            <Toast config={toastConfig} />
        </>
    );
}