import { ReactNode } from 'react';

export interface IUser {
    id: string;
    username?: string;
}

export interface IChatMessage {
    user: IUser;
    message: string;
    timestamp: string;
    room?: string;
    roomId: string;
    user2: IUser;
}

export interface ChatContextProps {
    messages: IChatMessage[];
    users: IUser[];
    user: IUser;
    sendMessage: (text: string) => void;
}

export interface ChatProviderProps {
    children: ReactNode;
    user: IUser;
}
