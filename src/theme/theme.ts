import { createTheme } from "@mui/material";
import styles from './../styles/style.module.scss';


export let theme = createTheme({
    palette: {
        primary: {
            main: styles.colorPrimary,
            dark: styles.colorPrimaryDark,
            light: styles.colorPrimaryLight,
        },
        secondary: {
            main: styles.colorSecondary,
            dark: styles.colorSecondaryDark,
            light: styles.colorSecondaryLight
        },
        background: {
            default: styles.backgroundColor
        },
    }
})

theme = createTheme(theme, {
    palette: {
        info: {
            main: styles.colorInfo
        },
        danger: {
            main: styles.colorDanger
        },
        success: {
            main: styles.colorSuccess
        },
        warning: {
            main: styles.colorWarning
        }
    },
    typography: {
        fontFamily: [
            'Square721 BT', '-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'
        ].join(','),
        fontsize: 12,
    }
})