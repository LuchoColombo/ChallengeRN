import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListScreen from '../screens/ListScreen';
import {WebSocketScreen} from '../screens/WebSocketScreen';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

const ListIcon = () => (
  //Acaba va el icono para el tabBar
  <Text>LIST</Text>
);

const WebSocketIcon = () => (
  //Acaba va el icono para el tabBar
  <Text>WEBSOCKET</Text>
);

export const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Users List"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="Users List"
        component={ListScreen}
        options={{
          tabBarLabel: 'Users list',
          tabBarIcon: ListIcon,
        }}
      />
      <Tab.Screen
        name="Websocket"
        component={WebSocketScreen}
        options={{
          tabBarLabel: 'Websocket',
          tabBarIcon: WebSocketIcon,
        }}
      />
    </Tab.Navigator>
  );
};
