import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getUser} from '../services/user';
import Button from '../components/Button';

export const ProfileScreen = ({route}) => {
  const [usuario, setUsuario] = useState({});
  const {id} = route.params;
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localGetUser = async () => {
      const data = await getUser(id);
      if (data) {
        setUsuario(data);
        setLoading(false);
      }
    };
    localGetUser();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  console.log(usuario.address?.city, 'USUARIO');
  return (
    <View style={styles.card}>
      <View style={styles.nameUser}>
        <Text style={styles.name}>{usuario.name}</Text>
        <View style={styles.usernameContainer}>
          <Text style={styles.username}>@{usuario.username}</Text>
        </View>
      </View>
      <Text style={styles.email}>
        <Text style={styles.bold}>Email:</Text> {usuario.email}
      </Text>
      <Text style={styles.address}>
        <Text style={styles.bold}>Address:</Text> {usuario.address?.street}
      </Text>
      <Text style={styles.phone}>
        <Text style={styles.bold}>Contact number:</Text> {usuario.phone}
      </Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    marginTop: 10,
    marginHorizontal: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  nameUser: {
    flexDirection: 'row',
    gap: 10,
  },
  usernameContainer: {
    backgroundColor: '#1DA1F2',

    paddingHorizontal: 8,
    borderRadius: 5,
    marginBottom: 8,
  },
  username: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 4,
    textAlign: 'center',
    justifyContent: 'center',
  },
  email: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 16,
  },
  address: {
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 16,
    marginBottom: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
});
