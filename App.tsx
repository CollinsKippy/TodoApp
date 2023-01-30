/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import {TaskProvider} from './contexts/TaskContext';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <TaskProvider>
          <View>
            <Text style={styles.heading}>Task App</Text>
          </View>
          <TaskList />
          <TaskForm />
        </TaskProvider>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: '500',
    margin: 16,
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
  },
});

export default App;
