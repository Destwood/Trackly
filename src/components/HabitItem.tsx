import React from 'react';
import { Checkbox, List, useTheme } from 'react-native-paper';
import { HabitItemProps } from '../types/habit';

export default function HabitItem({ habit, toggleHabit }: HabitItemProps) {
    const theme = useTheme();

    return (
        <List.Item
            title={habit.title}
            titleStyle={habit.completed ? {
                textDecorationLine: 'line-through',
                color: theme.colors.outline
            } : undefined}
            onPress={() => toggleHabit(habit.id)}
            right={() => {
                const checkboxStatus: 'checked' | 'unchecked' = habit.completed ? 'checked' : 'unchecked';
                return (
                    <Checkbox
                        status={checkboxStatus}
                        onPress={() => toggleHabit(habit.id)}
                    />
                );
            }}
            style={{
                borderBottomWidth: 1,
                borderBottomColor: theme.colors.surfaceVariant,
                paddingVertical: 5
            }}
        />
    );
}
