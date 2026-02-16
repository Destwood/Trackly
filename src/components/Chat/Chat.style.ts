import { MD3Theme } from 'react-native-paper';

export const chatStyles = (theme: MD3Theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    listContent: {
        padding: 16,
        paddingBottom: 20,
    },
    messageContainer: {
        marginBottom: 12,
        maxWidth: '80%' as any,
        padding: 12,
        borderRadius: 16,
    },
    sentMessage: {
        alignSelf: 'flex-end' as const,
        backgroundColor: theme.colors.primary,
        borderBottomRightRadius: 4,
    },
    receivedMessage: {
        alignSelf: 'flex-start' as const,
        backgroundColor: theme.colors.surfaceVariant,
        borderBottomLeftRadius: 4,
    },
    sentText: {
        color: theme.colors.onPrimary,
    },
    receivedText: {
        color: theme.colors.onSurfaceVariant,
    },
    usernameText: {
        fontSize: 12,
        marginBottom: 4,
        fontWeight: 'bold' as const,
        color: theme.colors.outline,
    },
    inputSection: {
        flexDirection: 'row' as const,
        alignItems: 'center' as const,
        padding: 8,
        backgroundColor: theme.colors.surface,
        borderTopWidth: 1,
        borderTopColor: theme.colors.outlineVariant,
    },
    input: {
        flex: 1,
        maxHeight: 100,
        backgroundColor: 'transparent',
    },
    usersText: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        fontSize: 12,
        color: theme.colors.secondary,
        fontStyle: 'italic' as const,
    },
});
