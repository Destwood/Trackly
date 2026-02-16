import { palette } from './palette';

export const darkTheme = {
    palette: {
        primary: {
            main: palette.greenMain,
            dark: palette.greenDark,
            light: palette.greenLight,
            contrastText: palette.white,
        },
        background: {
            default: palette.black,
            paper: palette.blackPaper,
        },
        text: {
            primary: palette.white,
            secondary: palette.grey,
        },
        error: {
            main: palette.error,
        },
    }
} as const;
