import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen} from '../screens/ProfileScreen';
import {WebSocketTest} from './WebSocketTest';
import ListScreen from '../screens/ListScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function NavigatorTab() {
  return (
    <Stack.Navigator
      initialRouteName="Websocket"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Users"
        component={ListScreen}
        options={{
          title: 'Lista de Usuarios',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Perfil'}}
      />
      <Stack.Screen
        name="Websocket"
        component={WebSocketTest}
        options={{title: 'WebSocket'}}
      />
    </Stack.Navigator>
  );
}
