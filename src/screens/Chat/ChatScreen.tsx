import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'react-native-paper';
import { chatScreenStyles } from './ChatScreen.style';
import { ChatScreen as ChatComponent } from '../../components/Chat/ChatScreen';
import { ChatProvider } from '../../components/Chat/ChatProvider';

export default function ChatScreen() {
    const theme = useTheme();
    const styles = chatScreenStyles(theme);
    const user = {
        id: '123',
        username: 'John',
    };

    return (
        <SafeAreaView style={styles.container}>
            <ChatProvider user={user}>
                <ChatComponent />
            </ChatProvider>
        </SafeAreaView>
    );
}
