import { MD3Theme } from 'react-native-paper';

export const settingsScreenStyles = (theme: MD3Theme) => ({
    container: {
        flex: 1 as const,
        padding: 20,
        backgroundColor: theme.colors.background,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold' as const,
        color: theme.colors.onBackground,
        marginBottom: 30,
    },
    section: {
        marginBottom: 30,
        backgroundColor: theme.colors.surfaceVariant,
        borderRadius: 12,
        overflow: 'hidden' as const,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600' as const,
        color: theme.colors.primary,
        margin: 15,
        marginBottom: 5,
    },
    settingItem: {
        backgroundColor: 'transparent',
    },
    button: {
        marginTop: 20,
        borderRadius: 8,
    },
});
