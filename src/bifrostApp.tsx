import { useMemo } from 'react';
import { AppRouter } from './routes/AppRouter';
import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import { theme } from './theme/theme';
import './core/translations/index';
import './styles/styles.scss';

export const BifrostApp = () => {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    useMemo(() => createTheme({
        palette: {
            mode: prefersDarkMode ? 'dark' : 'light',
        },
    }), [prefersDarkMode]);

    return (
        <ThemeProvider theme={theme}>
                <AppRouter/>
        </ThemeProvider>
    )
}
