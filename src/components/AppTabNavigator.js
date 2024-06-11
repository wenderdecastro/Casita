import React from 'react'
import { AppRoutesKeys } from '../utils/AppRoutes/AppRoutesUtils';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import AppSvgIcon, { AppIconName } from '../../assets/Icons';
import { AppColors } from '../utils/Pallete';
import { BodyMedium } from './AppFonts';
import { AppAssets } from '../../assets/AppAssets';
import HomeScreen from '../screens/Main/Home/HomeScreen';
import ManagementScreen from '../screens/Main/Management/ManagementScreen';
import FinancialScreen from '../screens/Main/Financial/FinancialScreen';
import ProfileScreen from '../screens/Main/Profile/ProfileScreen';
import { useRoute } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

export const IconButton = styled.View`
    background-color: ${({ isSelected, color }) => isSelected ? color : AppColors.transparent};
    padding: ${({ isSelected }) => isSelected ? '9px' : '0px'};
    border-radius: 9999px;
    border-color: ${({ isSelected }) => isSelected ? AppColors.black : AppColors.transparent};
    border-width: ${({ isSelected }) => isSelected ? '2.5px' : '0px'};
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 3px;
`

const ProfileImage = styled.Image`
    width: 41px;
    height: 41px;
    border-radius: 9999px;
    border-color: ${({ isSelected }) => isSelected ? AppColors.blue : AppColors.black};
    border-width: ${({ isSelected }) => isSelected ? '3px': '2px'};
`

export default function AppTabNavigator() {
  const { params } = useRoute();

  return (
    <Tab.Navigator
    
      initialRouteName={AppRoutesKeys.managementScreen}

      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: {
          flex: 0.08,
          borderColor: AppColors.black,
          borderRadius: 99999,
          borderRightWidth: 4.5,
          borderTopWidth: 2.5,
          borderLeftWidth: 2.5,
          borderBottomWidth: 4.5,
          marginBottom: 25,
          marginStart: 10,
          marginEnd: 10,
          elevation: 0,
          backgroundColor: AppColors.white,
          position: 'absolute',
          height: 60,
          zIndex: 0
        },

        tabBarActiveBackgroundColor: "transparent",
        tabBarShowLabel: false,
        tabBarActiveTintColor : "transparent",
        tabBarIcon: ({ focused, color, size }) => {
  

          if (route.name == AppRoutesKeys.homeScreen) {
            return <IconButton isSelected={focused} color={AppColors.red}>
              <AppSvgIcon name={AppIconName.home} />
              {focused ? <BodyMedium color={AppColors.black}>Casa</BodyMedium> : null}
            </IconButton>
          } else if (route.name == AppRoutesKeys.managementScreen) {
            return <IconButton isSelected={focused} color={AppColors.yellow}>

              <AppSvgIcon name={AppIconName.checkTask} color={AppColors.black} />
              {focused ? <BodyMedium color={AppColors.black}>Gestão</BodyMedium> : null}
            </IconButton>
          } else if (route.name == AppRoutesKeys.financialScreen) {
            return <IconButton isSelected={focused} color={AppColors.green}>
              <AppSvgIcon name={AppIconName.financialGraph} size={16} />
              {focused ? <BodyMedium color={AppColors.black}>Finanças</BodyMedium> :null}
            </IconButton>
          } else {
            return <ProfileImage isSelected={focused} source={AppAssets.placeholder}/>
          }

        }
      })}
    >
      <Tab.Screen
        name={AppRoutesKeys.managementScreen}
        component={ManagementScreen}
        initialParams={{userData : params.userData}}
        
      />
      <Tab.Screen
        name={AppRoutesKeys.financialScreen}
        component={FinancialScreen}
        initialParams={{userData : params.userData}}
      />
      <Tab.Screen
        name={AppRoutesKeys.profileScreen}
        component={ProfileScreen}
        initialParams={{userData : params.userData}}
      />

    </Tab.Navigator>
  )
}