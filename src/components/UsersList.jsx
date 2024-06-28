import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {getUsers} from '../services/user';

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
        data={usuarios}
        renderItem={({item: user}) => (
          <View style={styles.userContainer}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
            <Text style={styles.street}>{user.address.street}</Text>
            <Button
              title="View profile"
              onPress={() => navigation.navigate('Profile', {id: user.id})}
              style={styles.button}
            />
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  userContainer: {
    marginBottom: 12,
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    marginBottom: 4,
  },
  street: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    marginTop: 8,
  },
});

export default UsersList;
