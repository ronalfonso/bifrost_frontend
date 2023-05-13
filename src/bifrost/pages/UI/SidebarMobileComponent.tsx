import React, {useContext, useState} from 'react';
import {startLogout} from '../../../store/auth';
import {useAppDispatch} from '../../../store';
import {GeneralContext} from '../../../contexts/GeneralContext';
import {useTranslation} from "react-i18next";
import Box from '@mui/material/Box';
import {
    LoginOutlined,
    ExpandMore,
} from '@mui/icons-material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {
    Accordion, AccordionDetails, AccordionSummary,
    Checkbox, Container, Divider, FormControlLabel, Typography
} from '@mui/material';

type Anchor = 'top' | 'left' | 'bottom' | 'right';
export const SidebarMobileComponent = () => {
    // @ts-ignore
    const {showSidebar, setShowSidebar} = useContext<any>(GeneralContext);
    const dispatch = useAppDispatch();
    const [expanded, setExpanded] = useState<string | false>(false);
    const {t} = useTranslation();

    const toggleDrawer = (anchor: Anchor, open: boolean) => {
        setShowSidebar(open);
    }


    const handleLogout = () => {
        setShowSidebar(false);
        dispatch(startLogout());
    }

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div className="card flex justify-content-center">
            <div>
                {(['right'] as const).map((anchor) => (
                    <React.Fragment key={anchor}>
                        <SwipeableDrawer
                            anchor={anchor}
                            open={showSidebar}
                            onClose={() => toggleDrawer(anchor, false)}
                            onOpen={() => toggleDrawer(anchor, true)}
                        >
                            <Box
                                sx={{width: 250}}
                                role="presentation"
                                // onClick={toggleDrawer(anchor, false)}
                                // onKeyDown={toggleDrawer(anchor, false)}
                            >
                                <Box sx={{padding: '.75rem'}}>
                                    <Typography>
                                        {t('DICTIONARY.FILTER_BY')}:
                                    </Typography>
                                </Box>
                                <Box sx={{padding: 1}}>
                                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMore/>}
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                        >
                                            <Typography sx={{width: '50%', fontSize: '.85rem', flexShrink: 0}}>
                                                {t('DICTIONARY.ORDER_BY')}:
                                            </Typography>
                                            {/*<Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>*/}
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                                Aliquam eget maximus est, id dignissim quam.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMore/>}
                                            aria-controls="panel2bh-content"
                                            id="panel2bh-header"
                                        >
                                            <Typography sx={{width: '33%', fontSize: '.85rem', flexShrink: 0}}>
                                                {t('DICTIONARY.DATES')}:
                                            </Typography>
                                            {/*<Typography sx={{ color: 'text.secondary' }}>*/}
                                            {/*    You are currently not an owner*/}
                                            {/*</Typography>*/}
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                                                varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                                                laoreet.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Box>
                                <Divider/>
                                <Box sx={{padding: 1}}>
                                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMore/>}
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                        >
                                            <Typography sx={{width: '33%', fontSize: '.85rem', flexShrink: 0}}>
                                                {t('DICTIONARY.CONDO')}
                                            </Typography>
                                            {/*<Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>*/}
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Box>
                                                <FormControlLabel control={<Checkbox defaultChecked size={'small'}/>}
                                                                  label={<Typography sx={{fontSize: '.9rem'}}>Arenas del
                                                                      sol</Typography>}
                                                />

                                                <FormControlLabel control={<Checkbox defaultChecked size={'small'}/>}
                                                                  label={<Typography sx={{fontSize: '.9rem'}}>Valle
                                                                      alto</Typography>}
                                                />
                                            </Box>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMore/>}
                                            aria-controls="panel2bh-content"
                                            id="panel2bh-header"
                                        >
                                            <Typography sx={{width: '33%', fontSize: '.85rem', flexShrink: 0}}>
                                                {t('DICTIONARY.HOMES')}
                                            </Typography>
                                            {/*<Typography sx={{ color: 'text.secondary' }}>*/}
                                            {/*    You are currently not an owner*/}
                                            {/*</Typography>*/}
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                                                varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                                                laoreet.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Box>

                                <Divider/>

                                <Container maxWidth="sm">
                                    <div className="footer_sidebar" onClick={handleLogout}>
                                        <LoginOutlined/>
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