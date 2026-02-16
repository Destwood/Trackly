import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme, Text, TextInput, Button, Checkbox, IconButton } from 'react-native-paper';
import { todosScreenStyles } from './TodosScreen.style';

interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export default function TodosScreen() {
    const theme = useTheme();
    const styles = todosScreenStyles(theme);
    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim()) {
            setTodos(prev => [...prev, { id: Date.now().toString(), title: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const toggleTodo = (id: string) => {
        setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const deleteTodo = (id: string) => {
        setTodos(prev => prev.filter(t => t.id !== id));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title} variant="headlineLarge">Todos</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    mode="outlined"
                    style={styles.input}
                    placeholder="Add a new todo..."
                    value={inputValue}
                    onChangeText={setInputValue}
                    onSubmitEditing={addTodo}
                />
                <Button
                    mode="contained"
                    onPress={addTodo}
                    style={styles.addButton}
                >
                    Add
                </Button>
            </View>

            <FlatList
                data={todos}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.todoItem}>
                        <View style={styles.todoContent}>
                            <Checkbox
                                status={item.completed ? 'checked' : 'unchecked'}
                                onPress={() => toggleTodo(item.id)}
                            />
                            <Text
                                style={[styles.todoText, item.completed && styles.todoTextCompleted]}
                                onPress={() => toggleTodo(item.id)}
                            >
                                {item.title}
                            </Text>
                        </View>
                        <IconButton
                            icon="delete"
                            size={20}
                            onPress={() => deleteTodo(item.id)}
                            style={styles.deleteButton}
                        />
                    </View>
                )}
            />
        </SafeAreaView>
    );
}
