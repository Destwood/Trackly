import { MD3Theme } from 'react-native-paper';

export const habitRemindersStyles = (theme: MD3Theme) => ({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        marginBottom: 16,
        color: theme.colors.onSurface,
    },
    ruleItem: {
        marginBottom: 8,
        backgroundColor: theme.colors.surfaceVariant,
        borderRadius: 8,
    },
    addSection: {
        marginTop: 20,
        padding: 16,
        backgroundColor: theme.colors.surface,
        borderRadius: 12,
        elevation: 2,
    },
    input: {
        marginBottom: 12,
    },
    timeRow: {
        flexDirection: 'row' as const,
        justifyContent: 'space-between' as const,
        alignItems: 'center' as const,
        marginBottom: 16,
    },
    button: {
        marginTop: 8,
    },
});
