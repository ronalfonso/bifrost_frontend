
declare module '@mui/material/styles' {
    import {Theme, ThemeOptions} from '@mui/material';

    interface CustomTheme extends Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface CustomThemeOptions extends ThemeOptions {
        status?: {
            danger?: string;
        };
    }
    export function createTheme(options?: CustomThemeOptions): CustomTheme;
}