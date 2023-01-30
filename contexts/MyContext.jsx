import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState } from "react";

const TaskContext = createContext(null);

export default TaskContext;

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { name: 'Buy Milk' },
    { name: 'Pay Rent' }
  ]);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, { name: newTask }]);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        handleAddTask: handleAddTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

const styles = StyleSheet.create({});
