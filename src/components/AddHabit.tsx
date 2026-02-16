import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, useTheme } from 'react-native-paper';
import { AddHabitProps } from '../types/habit';

export default function AddHabit({ addHabit }: AddHabitProps) {
    const [text, setText] = useState('');
    const theme = useTheme();

    const handleAdd = () => {
        if (text.trim()) {
            addHabit(text);
            setText('');
        }
    };

    return (
        <View style={{ flexDirection: 'row', marginBottom: 20, alignItems: 'center' }}>
            <TextInput
                mode="outlined"
                label="New habit"
                value={text}
                onChangeText={setText}
                style={{ flex: 1, backgroundColor: theme.colors.surface }}
            />
            <Button
                mode="contained"
                onPress={handleAdd}
                style={{ marginLeft: 10, height: 50, justifyContent: 'center' }}
            >
                Add
            </Button>
        </View>
    );
}
