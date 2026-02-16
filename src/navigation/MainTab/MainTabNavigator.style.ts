import { MD3Theme } from 'react-native-paper';

export const mainTabNavigatorStyles = (theme: MD3Theme) => ({
    tabBarActiveTintColor: theme.colors.primary,
    tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
    tabBarStyle: {
        backgroundColor: theme.colors.surface,
        borderTopColor: theme.colors.outline,
        borderTopWidth: 1,
        height: 80,
        paddingBottom: 15,
        paddingTop: 10,
    },
    headerStyle: {
        backgroundColor: theme.colors.surface,
    },
    headerTintColor: theme.colors.onSurface,
    headerTitleStyle: {
        fontWeight: 'bold' as const,
    },
    headerShown: false,
});
