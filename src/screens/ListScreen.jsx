import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import UsersList from '../components/UsersList';

function ListScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <UsersList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
});

export default ListScreen;
