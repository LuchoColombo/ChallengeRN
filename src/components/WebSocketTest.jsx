import React, {useEffect, useState} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';

export const WebSocketTest = () => {
  const [messages, setMessages] = useState([]);
  const [ultimoMensaje, setUltimoMensaje] = useState(
    'La conexión WebSocket se ha establecido correctamente.',
  );
  const [showAlertOnOpen, setShowAlertOnOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const ws = new WebSocket('wss://echo.websocket.org/');

    ws.onopen = () => {
      console.log('Conexión establecida.');
      setShowAlertOnOpen(true);
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
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyle}>WebSocket Send</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={text => setInputMessage(text)}
          value={inputMessage}
          placeholder="Escribe tu mensaje..."
        />
        <Button
          onPress={() => {
            if (inputMessage.trim() !== '') {
              setMessages(prevMessages => [...prevMessages, inputMessage]);
              setUltimoMensaje(inputMessage);
              setShowAlertOnOpen(true);
              setInputMessage('');
            }
          }}
          title="Enviar"
          disabled={disabled}
        />
      </View>
      <View>
        <Text style={styles.textStyle}>WebSocket Message</Text>
        <View style={styles.viewContainer}>
          {messages.map((message, index) => (
            <Text key={index}>{message}</Text>
          ))}
        </View>
        <Button
          onPress={() => {
            setMessages([]);
          }}
          title="Refresh messages"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  textStyle: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  inputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  viewContainer: {
    marginBottom: 20,
  },
});
