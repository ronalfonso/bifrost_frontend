import React, {useContext} from 'react';
import {startLogout} from '../../../store/auth';
import {useAppDispatch} from '../../../store';
import {GeneralContext} from '../../../contexts/GeneralContext';
import {useTranslation} from "react-i18next";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
    Inbox, LoginOutlined, Mail

} from '@mui/icons-material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

type Anchor = 'top' | 'left' | 'bottom' | 'right';
export const SidebarMobileComponent = () => {
    // @ts-ignore
    const { showSidebar, setShowSidebar } = useContext(GeneralContext);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const toggleDrawer = (anchor: Anchor, open: boolean) => {
        setShowSidebar( open );
    }


    const handleLogout = () => {
        setShowSidebar(false);
        dispatch(startLogout());
    }

    return (
        <div className="card flex justify-content-center">
            <div>
                {(['left'] as const).map((anchor) => (
                    <React.Fragment key={anchor}>
                        <SwipeableDrawer
                            anchor={anchor}
                            open={showSidebar}
                            onClose={() => toggleDrawer(anchor, false)}
                            onOpen={() => toggleDrawer(anchor, true)}
                        >
                            <Box
                                sx={{ width: 250 }}
                                role="presentation"
                                // onClick={toggleDrawer(anchor, false)}
                                // onKeyDown={toggleDrawer(anchor, false)}
                            >
                                <List>
                                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                        <ListItem key={text} disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    {index % 2 === 0 ? <Inbox /> : <Mail />}
                                                </ListItemIcon>
                                                <ListItemText primary={text} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                                <Divider />
                                <List>
                                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                        <ListItem key={text} disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    {index % 2 === 0 ? <Inbox /> : <Mail />}
                                                </ListItemIcon>
                                                <ListItemText primary={text} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                                <Container maxWidth="sm">
                                    <Divider />
                                            <div className="footer_sidebar" onClick={handleLogout}>
                                                <LoginOutlined />
                                                <span>{t('HEADER.SIGN_OUT')}</span>
                                            </div>
                                </Container>
                            </Box>
                        </SwipeableDrawer>
                    </React.Fragment>
                ))}
            </div>

        </div>
    )
}