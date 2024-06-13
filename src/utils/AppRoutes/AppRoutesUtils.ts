import {
  NavigationProp,
  ParamListBase,
  Route,
  StackActions,
} from "@react-navigation/native";

export const AppRoutesKeys ={
    registerUserDataPage: "registerUserDataPage",
    registerFinanceDataPage: "registerFinanceDataPage",
    landingPage: "landingPage",
    loginScreen : "loginScreen",
    tabNavigator: "tabNavigator",
    navigator: "navigator",
    homeScreen: "homeScreen",
    financialScreen: "financialScreen",
    managementScreen: "managementScreen",
    profileScreen: "profileScreen",
    recoveryPasswordInsertEmailEscreen: "recoveryPasswordInsertEmailEscreen",
    recoveryPasswordInsertCodeEscreen: "recoveryPasswordInsertCodeEscreen",
    recoveryPasswordInsertNewPasswordEscreen: "recoveryPasswordInsertNewPasswordEscreen",
    myDayScreen: "myDayScreen",
    listsScreen: "listsScreen",
    listDetailScreen: "listDetailScreen",
    goalsScreen: "GoalsScreen",
    historyScreen: "HistoryScreen",
}

export const AppNavigation = {
  push: push,
  pop: pop, 
  popWithData: popWithData,
  popToTop: popToTop
}


async function push<RouteName extends keyof ParamListBase>(

  navigation: NavigationProp<ParamListBase>,
  routeKey: RouteName,
  params?: ParamListBase[RouteName],
  killCurrentScreen: boolean = false
): Promise<void> {
  try {
    if (typeof params === "boolean") {
      killCurrentScreen = params;
      params = undefined;
    }
    if (!killCurrentScreen) {
      const pushAction = StackActions.push(routeKey, params);
      navigation.dispatch(pushAction);
    } else {
      const pushAction = StackActions.replace(routeKey, params);
      navigation.dispatch(pushAction);
    }
  } catch (error) {
    console.error("Erro ao empurrar rota:", error);
  }
}

async function pop(
  navigation: NavigationProp<ParamListBase>,
  screensToPop: number = 1
): Promise<void> {
  try {
    const popAction = StackActions.pop(screensToPop);
    navigation.dispatch(popAction);
  } catch (error) {
    console.error("Erro ao fazer pop na rota:", error);
  }
}


async function popWithData<RouteName extends keyof ParamListBase>(
  navigation: NavigationProp<ParamListBase>,
  routeKey: any,
  params?: ParamListBase[RouteName]
): Promise<void> {
  try {
    navigation.navigate({
      name: routeKey,
      params: params,
      merge: true,
    });
  } catch (error) {
    console.error("Erro ao fazer pop na rota:", error);
  }
}

async function popToTop(
  navigation: NavigationProp<ParamListBase>,
): Promise<void> {
  try {
    const popAction = StackActions.popToTop()
    navigation.dispatch(popAction);
  } catch (error) {
    console.error("Erro ao fazer pop na rota:", error);
  }
}