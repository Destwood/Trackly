import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
        shouldShowBanner: true,
        shouldShowList: true,
    }),
});

export const useHabitsNotification = () => {
    const showHelloWorldNotification = async () => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Hello',
                body: 'World',
            },
            trigger: null, // fire immediately
        });
    };

    return {
        showHelloWorldNotification,
    };
};
