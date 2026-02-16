import { palette } from './palette';

export const lightTheme = {
    palette: {
        primary: {
            main: palette.greenMain,
            dark: palette.greenDark,
            light: palette.greenLight,
            contrastText: palette.white,
        },
        background: {
            default: palette.white,
            paper: palette.whitePaper,
        },
        text: {
            primary: palette.black,
            secondary: palette.grey,
        },
        error: {
            main: palette.error,
        },
    }
} as const;
