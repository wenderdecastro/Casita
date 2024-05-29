import { NavigationContainer } from "@react-navigation/native";
import { AppRoutesKeys } from "./AppRoutesUtils";
import Navigation from "../../screens/Authentication/LandingPage";
import LoginScreen from "../../screens/Authentication/LoginPage";
import AppTabNavigator from "../../components/AppTabNavigator";

const { createNativeStackNavigator } = require("@react-navigation/native-stack");

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                    name={AppRoutesKeys.navigator}
                    component={Navigation} />
                <Stack.Screen
                    name={AppRoutesKeys.loginScreen}
                    component={LoginScreen} />
                <Stack.Screen
                    name={AppRoutesKeys.tabNavigator}
                    component={AppTabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}