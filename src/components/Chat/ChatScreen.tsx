import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { IChatMessage, IUser } from '../types';

interface ChatContextProps {
    messages: IChatMessage[];
    users: IUser[];
    sendMessage: (text: string) => void;
}

export const ChatContext = createContext<ChatContextProps>({
    messages: [],
    users: [],
    sendMessage: () => {},
});

interface ChatProviderProps {
    children: ReactNode;
    user: IUser;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children, user }) => {
    const [ws, setWs] = useState<WebSocket | null>(null);
    const [messages, setMessages] = useState<IChatMessage[]>([]);
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const socket = new WebSocket('ws://YOUR_SERVER_ADDRESS');
        setWs(socket);

        socket.onopen = () => {
            socket.send(JSON.stringify({ event: 'joinRoom', user, roomId: 'global' }));
        };

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            switch (data.event) {
                case 'history':
                    setMessages(data.messages);
                    break;
                case 'updateUserList':
                    setUsers(data.allUsers.map((u: any) => u.userData));
                    break;
                case 'newMessage':
                    setMessages((prev) => [...prev, data.message]);
                    break;
            }
        };

        socket.onclose = () => console.log('Disconnected');

        return () => socket.close();
    }, []);

    const sendMessage = (text: string) => {
        if (ws && ws.readyState === 1) {
            ws.send(JSON.stringify({ event: 'message', user, roomId: 'global', text }));
        }
    };

    return (
        <ChatContext.Provider value={{ messages, users, sendMessage }}>
            {children}
        </ChatContext.Provider>
    );
};
