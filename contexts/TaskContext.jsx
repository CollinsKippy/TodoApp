import React, { createContext, useState } from 'react';

const TaskContext = createContext(null);

export default TaskContext;

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = newTask => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        handleAddTask: handleAddTask,
      }}>
      {children}
    </TaskContext.Provider>
  );
}
