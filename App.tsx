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
import { TaskProvider } from './contexts/MyContext';

function App(): JSX.Element {
  return (
    <TaskProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View>
            <Text style={styles.heading}>Task App</Text>
          </View>
          <TaskList />
          <View style={styles.formContainer}>
            <TaskForm />
          </View>
        </ScrollView>
      </SafeAreaView>
    </TaskProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
  scrollView: {
    flex: 1,
  },
  formContainer: {
    // position: 'absolute',
    // bottom: 30,
    // width: '100%',
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
