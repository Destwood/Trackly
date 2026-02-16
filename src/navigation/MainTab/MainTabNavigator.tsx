import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';
import { mainTabNavigatorStyles } from './MainTabNavigator.style';
import TodosScreen from '../../screens/Todos/TodosScreen';

import { MainTabRoute } from '../types';
import NotesScreen from "../../screens/Notes/NotesScreen";
import HabitsScreen from "../../screens/Habits/HabitsScreen";
import ChatScreen from "../../screens/Chat/ChatScreen";
import SettingsScreen from "../../screens/Settings/SettingsScreen";

const Tab = createBottomTabNavigator();

const ICON_MAP: Record<MainTabRoute, { active: keyof typeof Ionicons.glyphMap; inactive: keyof typeof Ionicons.glyphMap }> = {
    [MainTabRoute.Todos]: { active: 'checkmark-circle', inactive: 'checkmark-circle-outline' },
    [MainTabRoute.Notes]: { active: 'document-text', inactive: 'document-text-outline' },
    [MainTabRoute.Habits]: { active: 'fitness', inactive: 'fitness-outline' },
    [MainTabRoute.Chat]: { active: 'chatbubbles', inactive: 'chatbubbles-outline' },
    [MainTabRoute.Settings]: { active: 'settings', inactive: 'settings-outline' },
};

export default function MainTabNavigator() {
    const theme = useTheme();
    const styles = mainTabNavigatorStyles(theme);
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    const routeName = route.name as MainTabRoute;
                    const icons = ICON_MAP[routeName];
                    const iconName = icons ? (focused ? icons.active : icons.inactive) : 'help-circle-outline';

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                ...styles,
            })}
        >
            <Tab.Screen name={MainTabRoute.Todos} component={TodosScreen} />
            <Tab.Screen name={MainTabRoute.Notes} component={NotesScreen} />
            <Tab.Screen name={MainTabRoute.Habits} component={HabitsScreen} />
            <Tab.Screen name={MainTabRoute.Chat} component={ChatScreen} />
            <Tab.Screen name={MainTabRoute.Settings} component={SettingsScreen} />
        </Tab.Navigator>
    );
}
