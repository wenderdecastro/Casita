import { NavigationContainer } from "@react-navigation/native";
import { AppRoutesKeys } from "./AppRoutesUtils";
import RegisterUserDataScreen from "../../screens/Authentication/RegisterUserDataPage";
import RegisterFinanceDataScreen from "../../screens/Authentication/RegisterFinanceDataPage";
import AppTabNavigator from "../../components/AppTabNavigator";
import Navigation from "../../screens/Authentication/Navigation";
import LandingPage from "../../screens/Authentication/LandingPage";
import RecoveryPasswordInsertEmailScreen from "../../screens/Authentication/RecoveryPasswordInsertEmailScreen";
import RecoveryPasswordInsertCodeScreen from "../../screens/Authentication/RecoveryPasswordInsertCodeScreen";
import RecoveryPasswordInsertNewPasswordScreen from "../../screens/Authentication/RecoveryPasswordInsertNewPasswordScreen";
import LoginScreen from "../../screens/Authentication/LoginScreen";
import MyDayScreen from "../../screens/Main/Management/MyDayScreen";
import ListsScreen from "../../screens/Main/Management/ListsScreen";
import ListDetailScreen from "../../screens/Main/Management/ListDetailScreen";
import FinancialScreen from "../../screens/Main/Financial/FinancialScreen";
import GoalsScreen from "../../screens/Main/Financial/GoalsScreen";
import HistoryScreen from "../../screens/Main/Financial/HistoryScreen";

const { createNativeStackNavigator } = require("@react-navigation/native-stack");

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={AppRoutesKeys.landingPage}
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
                <Stack.Screen
                    name={AppRoutesKeys.registerUserDataPage}
                    component={RegisterUserDataScreen} />
                <Stack.Screen
                    name={AppRoutesKeys.registerFinanceDataPage}
                    component={RegisterFinanceDataScreen} />
                <Stack.Screen
                    name={AppRoutesKeys.myDayScreen}
                    component={MyDayScreen} />
                <Stack.Screen
                    name={AppRoutesKeys.listsScreen}
                    component={ListsScreen} />
                <Stack.Screen
                    name={AppRoutesKeys.listDetailScreen}
                    component={ListDetailScreen} />
                <Stack.Screen
                    name={AppRoutesKeys.financialScreen}
                    component={FinancialScreen} />
                <Stack.Screen
                    name={AppRoutesKeys.goalsScreen}
                    component={GoalsScreen} />
                <Stack.Screen
                    name={AppRoutesKeys.historyScreen}
                    component={HistoryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}