import { MD3LightTheme, MD3DarkTheme, adaptNavigationTheme } from 'react-native-paper';
import { DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { palette } from './palette';

const { LightTheme: AdaptedLightTheme, DarkTheme: AdaptedDarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
});

export const paperLightTheme = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,
        primary: palette.greenMain,
        secondary: palette.greenLight,
        background: palette.white,
        surface: palette.whitePaper,
        error: palette.error,
        outline: palette.grey,
    },
};

export const paperDarkTheme = {
    ...MD3DarkTheme,
    colors: {
        ...MD3DarkTheme.colors,
        primary: palette.greenLight,
        secondary: palette.greenMain,
        background: palette.black,
        surface: palette.blackPaper,
        error: palette.error,
        outline: palette.grey,
    },
};

export const navLightTheme = {
    ...AdaptedLightTheme,
    colors: {
        ...AdaptedLightTheme.colors,
        primary: palette.greenMain,
        background: palette.white,
        card: palette.whitePaper,
        text: palette.black,
        border: palette.grey,
    },
};

export const navDarkTheme = {
    ...AdaptedDarkTheme,
    colors: {
        ...AdaptedDarkTheme.colors,
        primary: palette.greenLight,
        background: palette.black,
        card: palette.blackPaper,
        text: palette.white,
        border: palette.grey,
    },
};
