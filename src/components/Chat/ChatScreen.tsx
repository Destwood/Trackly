import React, { useContext, useState, useRef, useEffect } from 'react';
import { View, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { useTheme, Text, TextInput, IconButton, Surface } from 'react-native-paper';
import { ChatContext } from './ChatProvider';
import { chatStyles } from './Chat.style';

export const ChatComponent: React.FC = () => {
    const { messages, sendMessage, users, user: currentUser } = useContext(ChatContext);
    const [text, setText] = useState('');
    const flatListRef = useRef<FlatList>(null);
    const theme = useTheme();
    const styles = chatStyles(theme);

    useEffect(() => {
        if (flatListRef.current && messages.length > 0) {
            setTimeout(() => {
                flatListRef.current?.scrollToEnd({ animated: true });
            }, 100);
        }
    }, [messages]);

    const handleSend = () => {
        if (text.trim()) {
            sendMessage(text.trim());
            setText('');
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={{ flex: 1 }}
            keyboardVerticalOffset={90}
        >
            <View style={styles.container}>
                <Text style={styles.usersText}>
                    {users.length} {users.length === 1 ? 'user' : 'users'} online
                </Text>

                <FlatList
                    ref={flatListRef}
                    data={messages}
                    keyExtractor={(item, index) => `${item.user.id}-${index}`}
                    renderItem={({ item }) => {
                        const isMe = item.user.id === currentUser.id;
                        return (
                            <View style={[
                                styles.messageContainer,
                                isMe ? styles.sentMessage : styles.receivedMessage
                            ]}>
                                {!isMe && <Text style={styles.usernameText}>{item.user.username}</Text>}
                                <Text style={isMe ? styles.sentText : styles.receivedText}>
                                    {item.message}
                                </Text>
                            </View>
                        );
                    }}
                    contentContainerStyle={styles.listContent}
                    onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
                />

                <Surface style={styles.inputSection} elevation={1}>
                    <TextInput
                        value={text}
                        onChangeText={setText}
                        placeholder="Type a message..."
                        style={styles.input}
                        multiline={true}
                        dense={true}
                        mode="flat"
                        underlineColor="transparent"
                        activeUnderlineColor="transparent"
                    />
                    <IconButton
                        icon="send"
                        mode="contained"
                        containerColor={theme.colors.primary}
                        iconColor={theme.colors.onPrimary}
                        size={24}
                        onPress={handleSend}
                        disabled={!text.trim()}
                    />
                </Surface>
            </View>
        </KeyboardAvoidingView>
    );
};
