import { MD3Theme } from 'react-native-paper';

export const todosScreenStyles = (theme: MD3Theme) => ({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: theme.colors.background,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold' as const,
        color: theme.colors.onBackground,
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row' as const,
        marginBottom: 20,
        alignItems: 'center' as const,
    },
    input: {
        flex: 1,
        backgroundColor: theme.colors.surface,
    },
    addButton: {
        marginLeft: 10,
        height: 56,
        justifyContent: 'center' as const,
    },
    todoItem: {
        flexDirection: 'row' as const,
        alignItems: 'center' as const,
        backgroundColor: theme.colors.surfaceVariant,
        padding: 8,
        borderRadius: 12,
        marginBottom: 10,
    },
    todoContent: {
        flex: 1 as const,
        flexDirection: 'row' as const,
        alignItems: 'center' as const,
    },
    todoText: {
        fontSize: 16,
        color: theme.colors.onSurfaceVariant,
        marginLeft: 8,
    },
    todoTextCompleted: {
        textDecorationLine: 'line-through' as const,
        color: theme.colors.outline,
    },
    deleteButton: {
        marginRight: 8,
    },
});
