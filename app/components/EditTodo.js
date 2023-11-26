import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const EditTodo = ({ todo, onUpdate, onCancel }) => {
  const [text, setText] = useState(todo.text);

  const handleUpdate = () => {
    onUpdate(todo.id, text);
  };

  return (
    <View style={styles.editContainer}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(newText) => setText(newText)}
      />
      <View style={styles.buttonContainer}>
        <Button title="Update" onPress={handleUpdate} />
        <Button title="Cancel" onPress={onCancel} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  editContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 1, // Adjust the padding as needed
    borderColor: '#ccc',
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: 'column',
  },
});

export default EditTodo;