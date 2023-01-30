import React from "react";
import { Text, StyleSheet, View } from "react-native";

const TaskItem = (props) => {
  const { task } = props;

  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskTitle}>{task.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    marginRight: 16,
    marginLeft: 16,
    borderColor: '#888',
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#FFF',
  },
  taskTitle: {
    padding: 16,
    paddingBottom: 18,
    fontSize: 18,
    fontWeight: 500,
    color: "#555555",
  },
});

export default TaskItem;
