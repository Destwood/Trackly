import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { ChatContextProps, IChatMessage, IUser } from '../../types/chat';

export const ChatContext = createContext<ChatContextProps>({
    messages: [],
    users: [],
    user: { id: '', username: '' },
    sendMessage: () => { },
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
        const socket = new WebSocket('ws://10.0.1.65:8001');
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
                case 'message':   // тут змінив
                    setMessages((prev) => [...prev, data]); // додаємо повідомлення одразу
                    break;
            }
        };

        socket.onclose = () => console.log('Disconnected');

        return () => socket.close();
    }, []);

    const sendMessage = (message: string) => {
        if (ws && ws.readyState === 1) {
            ws.send(JSON.stringify({ event: 'message', user, roomId: 'global', message }));
        }
    };

    return (
        <ChatContext.Provider value={{ messages, users, user, sendMessage }}>
            {children}
        </ChatContext.Provider>
    );
};
