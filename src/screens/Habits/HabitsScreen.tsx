import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme, Text, SegmentedButtons, Button } from 'react-native-paper';
import { habitsScreenStyles } from './HabitsScreen.style';
import AddHabit from '../../components/AddHabit';
import HabitItem from '../../components/HabitItem';
import { HabitReminders } from '../../components/HabitReminders/HabitReminders';
import { Habit } from '../../types/habit';

export default function HabitsScreen() {
    const theme = useTheme();
    const styles = habitsScreenStyles(theme);
    const [habits, setHabits] = useState<Habit[]>([]);
    const [time, setTime] = useState<string>('');
    const [value, setValue] = useState('list');

    const addHabit = (title: string) => {
        setHabits(prev => [...prev, { id: Date.now().toString(), title, completed: false }]);
    };

    const toggleHabit = (id: string) => {
        setHabits(prev => prev.map(h => h.id === id ? { ...h, completed: !h.completed } : h));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <Text style={styles.title} variant="headlineLarge">Habits</Text>
                <Button mode="contained" >
                    Hello World
                </Button>
            </View>


            {value === 'list' ? (
                <>
                    {time ? <Text style={styles.time} variant="titleMedium">Current time: {time}</Text> : null}
                    <AddHabit addHabit={addHabit} />
                    <FlatList
                        data={habits}
                        keyExtractor={item => item.id}
                        renderItem={({ item }: { item: Habit }) => <HabitItem habit={item} toggleHabit={toggleHabit} />}
                        contentContainerStyle={{ paddingBottom: 40 }}
                        showsVerticalScrollIndicator={false}
                    />
                </>
            ) : (
                <HabitReminders />
            )}
        </SafeAreaView>
    );
}
