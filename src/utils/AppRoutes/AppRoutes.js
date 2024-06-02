import { NavigationContainer } from "@react-navigation/native";
import { AppRoutesKeys } from "./AppRoutesUtils";
import LoginScreen from "../../screens/Authentication/LoginPage";
import AppTabNavigator from "../../components/AppTabNavigator";
import Navigation from "../../screens/Authentication/Navigation";
import LandingPage from "../../screens/Authentication/LandingPage";
import RecoveryPasswordInsertEmailScreen from "../../screens/Authentication/RecoveryPasswordInsertEmailScreen";
import RecoveryPasswordInsertCodeScreen from "../../screens/Authentication/RecoveryPasswordInsertCodeScreen";
import RecoveryPasswordInsertNewPasswordScreen from "../../screens/Authentication/RecoveryPasswordInsertNewPasswordScreen";

const { createNativeStackNavigator } = require("@react-navigation/native-stack");

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName={AppRoutesKeys.navigator}
             screenOptions={{ headerShown: false }}>
            <Stack.Screen
                    name={AppRoutesKeys.navigator}
                    component={Navigation} />
                <Stack.Screen
                    name={AppRoutesKeys.loginScreen}
                    component={LoginScreen} />
                <Stack.Screen
                    name={AppRoutesKeys.tabNavigator}
                    component={AppTabNavigator} />
                <Stack.Screen
                    name={AppRoutesKeys.landingPage}
                    component={LandingPage} />
                <Stack.Screen
                    name={AppRoutesKeys.recoveryPasswordInsertEmailEscreen}
                    component={RecoveryPasswordInsertEmailScreen} />
                <Stack.Screen
                    name={AppRoutesKeys.recoveryPasswordInsertCodeEscreen}
                    component={RecoveryPasswordInsertCodeScreen} />
                <Stack.Screen
                    name={AppRoutesKeys.recoveryPasswordInsertNewPasswordEscreen}
                    component={RecoveryPasswordInsertNewPasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}