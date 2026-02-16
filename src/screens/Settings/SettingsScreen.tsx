import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme, Text, List, Switch, Button, Divider } from 'react-native-paper';
import { settingsScreenStyles } from './SettingsScreen.style';

export default function SettingsScreen() {
    const theme = useTheme();
    const styles = settingsScreenStyles(theme);
    const [darkModeEnabled, setDarkModeEnabled] = React.useState(true);
    const [persistentNotificationId, setPersistentNotificationId] = React.useState<string | null>(null);



    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title} variant="headlineLarge">Settings</Text>

            <List.Section style={styles.section}>
                <List.Subheader style={styles.sectionTitle}>Preferences</List.Subheader>

                <Divider />
                <List.Item
                    title="Dark Mode"
                    right={() => (
                        <Switch
                            value={darkModeEnabled}
                            onValueChange={setDarkModeEnabled}
                        />
                    )}
                />
            </List.Section>

            <List.Section style={styles.section}>
                <List.Subheader style={styles.sectionTitle}>About</List.Subheader>
                <List.Item
                    title="Version"
                    description="1.0.0"
                />
                <Divider />
                <List.Item
                    title="App Name"
                    description="Trackly"
                />
            </List.Section>

            <Button
                mode="contained"
                buttonColor={theme.colors.error}
                onPress={() => console.log('Clear All Data')}
                style={styles.button}
            >
                Clear All Data
            </Button>

            <List.Section style={styles.section}>
                <List.Subheader style={styles.sectionTitle}>Notification Tests</List.Subheader>
                <Button
                    mode="contained"
                    style={styles.button}
                >
                    Hello World Notification
                </Button>
                <Button
                    mode="contained"
                    buttonColor={persistentNotificationId ? theme.colors.error : theme.colors.primary}
                    style={styles.button}
                >
                    {persistentNotificationId ? 'Stop Persistent Notification' : 'Start Persistent Notification'}
                </Button>
            </List.Section>
        </SafeAreaView>
    );
}
