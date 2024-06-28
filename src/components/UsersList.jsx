import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getUsers} from '../services/user';

const UsersList = () => {
  const navigation = useNavigation();
  const [usuarios, setUsuarios] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const totalPages = 2;

  useEffect(() => {
    const localGetUsers = async () => {
      setLoading(true);
      try {
        if (page > totalPages) {
          return;
        }
        const data = await getUsers(page, 6);
        if (data) {
          setUsuarios(prevUsers => [...prevUsers, ...data]);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    localGetUsers();
  }, [page]);

  const handleEndReached = () => {
    if (!loading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const renderItem = ({item: user}) => (
    <TouchableOpacity
      style={styles.userContainer}
      onPress={() => navigation.navigate('Profile', {id: user.id})}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.street}>
        {user.address.street}, {user.address.city}
      </Text>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>View Profile</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={usuarios}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
        refreshing={loading && usuarios.length === 0}
        ListFooterComponent={
          loading &&
          usuarios.length > 0 && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#007bff" />
            </View>
          )
        }
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
    marginBottom: 24,
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
