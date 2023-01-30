import React, { useEffect } from 'react';

import { useContext, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TaskContext from '../contexts/MyContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  useEffect(() => {
    console.log({ tasks });
  }, [tasks])

  return (
    <View>
      {tasks.map((task, index) => {
        return <TaskItem key={index} task={task} />;
      })}
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({});
