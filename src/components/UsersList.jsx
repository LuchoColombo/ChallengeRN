import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getUsers} from '../services/user';
import Button from './Button';

const UsersList = () => {
  const navigation = useNavigation();
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const localGetUsers = async () => {
      const data = await getUsers();
      if (data) {
        setUsuarios(data);
      }
    };
    localGetUsers();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={usuarios}
        renderItem={({item: user}) => (
          <TouchableOpacity
            style={styles.userContainer}
            onPress={() => navigation.navigate('Profile', {id: user.id})}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
            <Text style={styles.street}>{user.address.street}</Text>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>View Profile</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
  },
  userContainer: {
    marginBottom: 12,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  street: {
    fontSize: 14,
    color: '#888',
  },
  buttonContainer: {
    backgroundColor: 'transparent',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginTop: 8,
    alignSelf: 'center',

  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
export default UsersList;
