import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {getUser} from '../services/user';

export const ProfileScreen = ({route}) => {
  const [usuario, setUsuario] = useState({});
  const {id} = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    const localGetUser = async () => {
      const data = await getUser(id);
      if (data) {
        setUsuario(data);
      }
    };
    localGetUser();
  }, [id]);

  console.log(usuario.address?.city, 'USUARIO');

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{usuario.name}</Text>
      <Text style={styles.username}>{usuario.username}</Text>
      <Text style={styles.email}>{usuario.email}</Text>
      <Text style={styles.address}>{usuario.address?.street}</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  username: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    marginBottom: 8,
  },
  address: {
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
});
