import React from 'react'
import { AppRoutesKeys } from '../utils/AppRoutes/AppRoutesUtils';
import HomeScreen from '../screens/Main/Home';
import ProfileScreen from '../screens/Main/Profile';
import FinancialScreen from '../screens/Main/Financial';
import ManagementScreen from '../screens/Main/Management';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import AppSvgIcon, { AppIconName } from '../../assets/Icons';
import { AppColors } from '../utils/Pallete';
import { BodyMedium } from './AppFonts';
import { AppAssets } from '../../assets/AppAssets';


const Tab = createBottomTabNavigator();

export const IconButton = styled.View`
    background-color: ${({ isSelected }) => isSelected ? AppColors.green : AppColors.transparent};
    padding: 9px 9px 9px 8px;
    border-radius: 9999px;
    border-color: ${({ isSelected }) => isSelected ? AppColors.black : AppColors.transparent};
    border-width: ${({ isSelected }) => isSelected ? '2.5px' : '0px'};
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 5px;
`

const ProfileImage = styled.Image`
    width: 41px;
    height: 41px;
    border-radius: 9999px;
    border-color: ${AppColors.altBlack};
    border-width: 2px;
`

export default function AppTabNavigator() {


  return (
    <Tab.Navigator
    
      initialRouteName={AppRoutesKeys.homeScreen}

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
          marginStart: 15,
          marginEnd: 15,
          elevation: 0,
          backgroundColor: AppColors.white,
          position: 'absolute',
          height: 60
        },

        tabBarActiveBackgroundColor: "transparent",
        tabBarShowLabel: false,
        tabBarActiveTintColor : "transparent",
        tabBarIcon: ({ focused, color, size }) => {


          if (route.name == AppRoutesKeys.homeScreen) {
            return <IconButton isSelected={focused}>
              <AppSvgIcon name={AppIconName.home} />
              {focused ? <BodyMedium color={AppColors.black}>Casa</BodyMedium> : null}
            </IconButton>
          } else if (route.name == AppRoutesKeys.managementScreen) {
            return <IconButton isSelected={focused}>

              <AppSvgIcon name={AppIconName.checkTask} />
              {focused ? <BodyMedium color={AppColors.black}>Gestão</BodyMedium> : null}
            </IconButton>
          } else if (route.name == AppRoutesKeys.financialScreen) {
            return <IconButton isSelected={focused}>
              <AppSvgIcon name={AppIconName.financialGraph} size={16} />
              {focused ? <BodyMedium color={AppColors.black} size={12}>Financeiro</BodyMedium> :null}
            </IconButton>
          } else {
            return <ProfileImage source={AppAssets.placeholder}/>
          }

        }
      })}
    >
      <Tab.Screen
        name={AppRoutesKeys.homeScreen}
        component={HomeScreen}
      />
      <Tab.Screen
        name={AppRoutesKeys.managementScreen}
        component={ManagementScreen}
        
      />
      <Tab.Screen
        name={AppRoutesKeys.financialScreen}
        component={FinancialScreen}
      />
      <Tab.Screen
        name={AppRoutesKeys.profileScreen}
        component={ProfileScreen}
      />

    </Tab.Navigator>
  )
}