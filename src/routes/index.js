import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import pr from 'pr-unit';
import {colors, fonts} from '../assets';

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
import Qg_disponivel from '../screen/qg_disponiveis';
import Qg_detalhes from '../screen/qg_detalhes';
import Qg_reserva from '../screen/qg_reserva';
import Qg_reserva_sucesso from '../screen/qg_reserva_sucesso';
import Qg_detalhes_historico from '../screen/qg_detalhes_historico';
import Reservas from '../screen/reservas';
import Comprar_moedas from '../screen/comprar_moedas';
import Reserva_check_in from '../screen/reserva_check_in';
import Reserva_check_out from '../screen/reserva_check_out';
import Forma_pagamento from '../screen/forma_pagamento';
import Cadastro_cartao from '../screen/cadastro_cartao';

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
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
        options={{title: 'Inicio'}}
        name="Principal"
        component={Principal}
      />
      <Tab.Screen
        options={{title: 'Inicio'}}
        name="Qg"
        component={Qg_disponivel}
      />
      <Tab.Screen
        options={{title: 'Inicio'}}
        name="Reservas"
        component={Reservas}
      />
      <Tab.Screen
        options={{title: 'Perfil'}}
        name="Perfil"
        component={Perfil}
      />
      <Tab.Screen
        options={{title: 'Inicio'}}
        name="Faq"
        component={Principal}
      />
    </Tab.Navigator>
  );
}

export default function navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Comprar_moedas">
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Detalhes_qg" component={Qg_detalhes} />
        <Stack.Screen name="Qg_reserva" component={Qg_reserva} />
        <Stack.Screen
          name="Qg_detalhes_historico"
          component={Qg_detalhes_historico}
        />
        <Stack.Screen
          name="Qg_reserva_sucesso"
          component={Qg_reserva_sucesso}
        />
        <Stack.Screen name="Check_in" component={Reserva_check_in} />
        <Stack.Screen name="Check_out" component={Reserva_check_out} />
        <Stack.Screen name="Principal" component={TabNavigator} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Comprar_moedas" component={Comprar_moedas} />
        <Stack.Screen name="Forma_pagamento" component={Forma_pagamento} />
        <Stack.Screen name="Cadastro_cartao" component={Cadastro_cartao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
