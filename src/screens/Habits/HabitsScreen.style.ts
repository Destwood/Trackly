import { MD3Theme } from 'react-native-paper';

export const habitsScreenStyles = (theme: MD3Theme) => ({
    container: {
        flex: 1 as const,
        padding: 20,
        backgroundColor: theme.colors.background,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold' as const,
        color: theme.colors.onBackground,
        marginBottom: 10,
    },
    time: {
        fontSize: 18,
        fontWeight: 'bold' as const,
        color: theme.colors.primary,
        marginBottom: 20,
    },
});
