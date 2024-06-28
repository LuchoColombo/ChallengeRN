import React, {createContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';

const WebSocketContext = createContext();

const WebSocketProvider = ({children}) => {
  const [messages, setMessages] = useState([]);
  const [showAlertOnOpen, setShowAlertOnOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [ultimoMensaje, setUltimoMensaje] = useState(
    'La conexión WebSocket se ha establecido correctamente.',
  );

  useEffect(() => {
    const ws = new WebSocket('wss://echo.websocket.org/');

    ws.onopen = () => {
      console.log('Conexión establecida.');
      setShowAlertOnOpen(true);
      setDisabled(false);
    };

    ws.onmessage = e => {
      const newMessage = e.data;
      setMessages(prevMessages => [...prevMessages, newMessage]);
    };

    ws.onerror = error => {
      console.log('Error de WebSocket:', error.message);
      Alert.alert('Error de WebSocket', error.message);
      setDisabled(true);
    };

    ws.onclose = () => {
      console.log('Conexión WebSocket cerrada.');
    };

    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    if (showAlertOnOpen) {
      Alert.alert('Nuevo mensaje', ultimoMensaje);
    }
  }, [showAlertOnOpen, ultimoMensaje]);
  return (
    <WebSocketContext.Provider
      value={{
        messages,
        showAlertOnOpen,
        disabled,
        setShowAlertOnOpen,
        setMessages,
        setUltimoMensaje,
      }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export {WebSocketContext, WebSocketProvider};
