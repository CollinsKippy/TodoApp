import {
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useContext, useState } from "react";
import TaskContext from "../contexts/MyContext";

const TaskForm = () => {
  const { handleAddTask } = useContext(TaskContext); // from context api

  const [task, setTask] = useState("");

  const onSubmit = () => {
    Keyboard.dismiss();
    console.log(task);

    handleAddTask(task);

    setTask("");
  };

  return (
    <KeyboardAvoidingView style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Enter your task..."
        value={task}
        onChangeText={(t) => setTask(t)}
      />

      <TouchableOpacity style={styles.button} onPress={() => onSubmit()}>
        <View>
          <Text style={styles.buttonText}>Add</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default TaskForm;

const styles = StyleSheet.create({
  form: {
    margin: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    borderColor: "#333",
    borderWidth: 2,
    padding: 10,
    margin: 4,
    flex: 1,
    backgroundColor: '#FFF',
  },
  button: {
    padding: 10,
    margin: 4,
    backgroundColor: "#11428c",
  },
  buttonText: {
    color: "#FFF",
  },
});
