import { KeyboardAvoidingView, TextInput, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TaskForm = () => {
  const { handleAddTask } = useContext(TaskContext); // from context api

  const [task, setTask] = useState('');

  const onSubmit = () => {
    handleAddTask(task);

    setTask('');
  };

  return (
    <KeyboardAvoidingView style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Enter your task..."
        onChangeText={t => setTask(t)}
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
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    borderColor: '#333',
    padding: 10,
    margin: 4,
    flex: 1,
  },
  button: {
    padding: 10,
    margin: 4,
    backgroundColor: '#11428c',
  },
  buttonText: {
    color: '#FFF',
  },
});
