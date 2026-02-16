import { MD3Theme } from 'react-native-paper';
import { ViewStyle, TextStyle } from 'react-native';

export const notesScreenStyles = (theme: MD3Theme) => ({
    container: {
        flex: 1 as const,
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
        marginBottom: 20,
    },
    input: {
        backgroundColor: theme.colors.surface,
        marginBottom: 10,
    },
    addButton: {
        borderRadius: 8,
    },
    noteItem: {
        marginBottom: 12,
        backgroundColor: theme.colors.surface,
    },
    noteContent: {
        padding: 12,
    },
    noteHeader: {
        flexDirection: 'row' as const,
        justifyContent: 'space-between' as const,
        alignItems: 'center' as const,
        marginBottom: 8,
    },
    noteText: {
        fontSize: 16,
        color: theme.colors.onSurfaceVariant,
        marginBottom: 5,
    },
    noteTime: {
        fontSize: 12,
        color: theme.colors.outline,
    },
    deleteButton: {
        margin: 0,
    },
});
