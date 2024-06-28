import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {WebSocketContext} from '../context/WebSocketContext';
import Button from '../components/Button';

export const WebSocketScreen = () => {
  const {
    messages,
    disabled,
    setMessages,
    setShowAlertOnOpen,
    setUltimoMensaje,
  } = useContext(WebSocketContext);
  const [inputMessage, setInputMessage] = useState('');

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyle}>WebSocket Send</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={text => setInputMessage(text)}
          value={inputMessage}
          placeholder="Type a message to send..."
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
          title="Send"
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
    backgroundColor: '#fff',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  viewContainer: {
    marginBottom: 20,
  },
});
