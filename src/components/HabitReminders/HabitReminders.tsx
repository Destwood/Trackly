import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useTheme, Text, List, Switch, IconButton, TextInput, Button, Card } from 'react-native-paper';
import { habitRemindersStyles } from './HabitReminders.style';

export const HabitReminders: React.FC = () => {
    const theme = useTheme();
    const styles = habitRemindersStyles(theme);

    const [newTitle, setNewTitle] = useState('');
    const [newTime, setNewTime] = useState('14:00');



    return (
        <ScrollView style={styles.container}>
            <Text variant="titleMedium" style={styles.title}>Your Reminder Rules</Text>


            <Card style={styles.addSection}>
                <Card.Content>
                    <Text variant="titleSmall" style={{ marginBottom: 8 }}>Add New Reminder Rule</Text>
                    <TextInput
                        label="What should we remind you?"
                        value={newTitle}
                        onChangeText={setNewTitle}
                        mode="outlined"
                        style={styles.input}
                    />
                    <TextInput
                        label="Time (HH:mm)"
                        value={newTime}
                        onChangeText={setNewTime}
                        mode="outlined"
                        placeholder="e.g. 14:00"
                        style={styles.input}
                    />
                    <Button
                        mode="contained"
                        style={styles.button}
                        disabled={!newTitle.trim()}
                    >
                        Create Rule
                    </Button>
                    <Button
                        mode="outlined"

                        style={[styles.button, { marginTop: 12 }]}
                    >
                        Send Test (in 5s)
                    </Button>
                </Card.Content>
            </Card>
        </ScrollView>
    );
};
