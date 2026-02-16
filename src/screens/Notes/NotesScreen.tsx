import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme, Text, TextInput, Button, Card, IconButton } from 'react-native-paper';
import { notesScreenStyles } from './NotesScreen.style';

interface Note {
    id: string;
    content: string;
    createdAt: string;
}

export default function NotesScreen() {
    const theme = useTheme();
    const styles = notesScreenStyles(theme);
    const [notes, setNotes] = useState<Note[]>([]);
    const [inputValue, setInputValue] = useState('');

    const addNote = () => {
        if (inputValue.trim()) {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
            setNotes(prev => [
                { id: Date.now().toString(), content: inputValue, createdAt: timeString },
                ...prev
            ]);
            setInputValue('');
        }
    };

    const deleteNote = (id: string) => {
        setNotes(prev => prev.filter(n => n.id !== id));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title} variant="headlineLarge">Notes</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    mode="outlined"
                    style={styles.input}
                    placeholder="Write a note..."
                    value={inputValue}
                    onChangeText={setInputValue}
                    multiline
                    numberOfLines={4}
                />
                <Button
                    mode="contained"
                    onPress={addNote}
                    style={styles.addButton}
                >
                    Save Note
                </Button>
            </View>

            <FlatList
                data={notes}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Card style={styles.noteItem} mode="elevated">
                        <Card.Content style={styles.noteContent}>
                            <View style={styles.noteHeader}>
                                <Text style={styles.noteTime} variant="labelSmall">{item.createdAt}</Text>
                                <IconButton
                                    icon="delete-outline"
                                    size={20}
                                    onPress={() => deleteNote(item.id)}
                                    style={styles.deleteButton}
                                    iconColor={theme.colors.error}
                                />
                            </View>
                            <Text style={styles.noteText} variant="bodyMedium">{item.content}</Text>
                        </Card.Content>
                    </Card>
                )}
            />
        </SafeAreaView>
    );
}
