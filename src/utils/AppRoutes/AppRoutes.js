import { NavigationContainer } from "@react-navigation/native";
import { AppRoutesKeys } from "./AppRoutesUtils";
import LoginScreen from "../../screens/Authentication/LoginPage";
import AppTabNavigator from "../../components/AppTabNavigator";
import Navigation from "../../screens/Authentication/Navigation";
import LandingPage from "../../screens/Authentication/LandingPage";

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
            </Stack.Navigator>
        </NavigationContainer>
    )
}