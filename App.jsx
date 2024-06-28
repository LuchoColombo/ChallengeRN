import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WebSocketProvider} from './src/context/WebSocketContext';
import StackNav from './src/navigation/StackNav';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <WebSocketProvider>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </WebSocketProvider>
  );
}
