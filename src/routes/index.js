import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import pr from 'pr-unit';
import { colors, fonts } from '../assets';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import {
  Menu_Icon_Home,
  Menu_Icon_Qg,
  Menu_Icon_Reserva,
  Menu_Icon_Perfil,
  Menu_Icon_Faq,
} from '../assets/svg/icons';

import Intro from '../screen/intro';
import Login from '../screen/login';
import Registro from '../screen/registro';
import Principal from '../screen/principal';
import Perfil from '../screen/perfil';

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Principal') {
            if (focused)
              return <Menu_Icon_Home width={40} height={40} fill={color} />;
            else return <Menu_Icon_Home width={40} height={40} fill={color} />;
          }
          if (route.name === 'Qg') {
            if (focused)
              return <Menu_Icon_Qg width={40} height={40} fill={color} />;
            else return <Menu_Icon_Qg width={40} height={40} fill={color} />;
          }

          if (route.name === 'Reservas') {
            if (focused)
              return <Menu_Icon_Reserva width={40} height={40} fill={color} />;
            else
              return <Menu_Icon_Reserva width={40} height={40} fill={color} />;
          }

          if (route.name === 'Perfil') {
            if (focused)
              return <Menu_Icon_Perfil width={40} height={40} fill={color} />;
            else
              return <Menu_Icon_Perfil width={40} height={40} fill={color} />;
          }

          if (route.name === 'Faq') {
            if (focused)
              return <Menu_Icon_Faq width={40} height={40} fill={color} />;
            else return <Menu_Icon_Faq width={40} height={40} fill={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: 'gray',
        showLabel: false,
        labelStyle: {
          fontSize: 20,
          fontWeight: 'bold',
          fontFamily: fonts.regular,
          height: pr * 120,
          padding: pr * 20,
        },
      }}>
      <Tab.Screen
        options={{ title: 'Inicio' }}
        name="Principal"
        component={Principal}
      />
      <Tab.Screen options={{ title: 'Inicio' }} name="Qg" component={Principal} />
      <Tab.Screen
        options={{ title: 'Inicio' }}
        name="Reservas"
        component={Principal}
      />
      <Tab.Screen
        options={{ title: 'Perfil' }}
        name="Perfil"
        component={Perfil}
      />
      <Tab.Screen
        options={{ title: 'Inicio' }}
        name="Faq"
        component={Principal}
      />
    </Tab.Navigator>
  );
}

export default function navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Principal">
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Principal" component={TabNavigator} />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
