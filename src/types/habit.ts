export interface Habit {
    id: string;
    title: string;
    completed: boolean;
}

export interface AddHabitProps {
    addHabit: (title: string) => void;
}

export interface HabitItemProps {
    habit: Habit;
    toggleHabit: (id: string) => void;
}
