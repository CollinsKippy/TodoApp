import { Text, StyleSheet, View } from 'react-native';

function TaskItem({ task }) {
  return (
    <View>
      <Text style={styles.taskTitle}>{task}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskTitle: {
    fontSize: 22,
    fontWeight: 500,
    color: '#555555',
  },
});

export default TaskItem;
