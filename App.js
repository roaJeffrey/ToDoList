import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import Todo from './app/components/Todo';
import EditTodo from './app/components/EditTodo';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);

  const addTodo = () => {
    if (text) {
      setTodos([...todos, { id: Date.now(), text }]);
      setText('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
    setEditingTodo(null);
  };

  return (
    <View style={[styles.container, { marginTop: 30 }]}>
      <Text style={[styles.header, { textAlign: 'center' }]}>TaskMaster Pro</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a new task"
          onChangeText={(text) => setText(text)}
          value={text}
          multiline={true}
          numberOfLines={4}
        />
        <Button title="Add" onPress={addTodo} />
      </View>
      <FlatList
        data={todos.slice().reverse()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoContainer}>
            {item.id === editingTodo ? (
              <EditTodo
                todo={item}
                onUpdate={(id, text) => updateTodo(id, text)}
                onCancel={() => setEditingTodo(null)}
              />
            ) : (
              <Todo
                todo={item}
                onDelete={deleteTodo}
                onUpdate={() => setEditingTodo(item.id)}
              />
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginBottom: 85,
  },
  input: {
    flex: 1,
    height: 10,
    minHeight: 100, // Set a minimum height
    marginBottom: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});