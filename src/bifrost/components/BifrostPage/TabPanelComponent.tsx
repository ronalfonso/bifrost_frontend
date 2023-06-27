import {ReactNode} from 'react';
import Box from '@mui/material/Box';

interface TabPanelProps {
    children?: ReactNode;
    dir?: string;
    index: number;
    value: number;
    height: string;
}
export const TabPanelComponent = (props: TabPanelProps) => {
    const { children, value, index, height, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{  margin: '0 auto', height: height}}>
                    {children}
                </Box>
            )}
        </div>
    )
}