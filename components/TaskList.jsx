import React from 'react';

import {useContext, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import TaskContext from '../contexts/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const {tasks} = useContext(TaskContext);

  return (
    <View>
      {tasks.map((task, index) => {
        <TaskItem key={index} task={task} />;
      })}
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({});
