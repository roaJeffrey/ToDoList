import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Todo = ({ todo, onDelete, onUpdate }) => {
  return (
    <View style={styles.todo}>
    <Text style={[styles.label, { color: "gray" }]}>Description</Text>
      <Text>{todo.text}</Text>
      <View style={[styles.buttonContainer, { marginTop: 10 }]}>
        <Button title="Delete" onPress={() => onDelete(todo.id)} style={styles.button} />
        <View style={styles.buttonSpacer} />
        <Button title="Update" onPress={() => onUpdate(todo.id)} style={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 10,
    borderColor: '#0298e3',
    borderWidth: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'column', // Change to 'row'
    justifyContent: 'space-between', // Distribute space evenly
    alignItems: 'center',
    marginVertical: 2, // Adjust margin for vertical spacing
  },
  buttonSpacer: {
    height: 5,// Add space between buttons
  },
  button: {
    flex: 1, // Make the buttons fill available space equally
    flexGrow: 1, // Allow buttons to grow and reach the ends
    height: 40, // Increase button height for bigger buttons
  },
});

export default Todo;