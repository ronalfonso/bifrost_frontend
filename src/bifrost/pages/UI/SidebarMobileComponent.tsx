import React, {ChangeEvent, SyntheticEvent, useContext, useEffect, useState} from 'react';
import {startLogout} from '../../../store/auth';
import {useAppDispatch, useAppSelector} from '../../../store';
import {GeneralContext} from '../../../contexts/general/GeneralContext';
import {useTranslation} from "react-i18next";
import Box from '@mui/material/Box';
import {LoginOutlined, ExpandMore} from '@mui/icons-material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {
    Accordion, AccordionDetails, AccordionSummary,
    Checkbox, Container, Divider, FormControl, FormControlLabel, FormLabel, Radio, Typography
} from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import {RoleEnum} from '../../../store/auth/enum/role.enum';
import {Role} from '../../../store/auth/models/Role';
import {capitalizeLabel} from '../../../core/utils/handle-lables';
import {FiltersContext} from "../../../contexts/filters/FiltersContext";

type Anchor = 'top' | 'left' | 'bottom' | 'right';
export const SidebarMobileComponent = () => {
    const {showSidebar, setShowSidebar} = useContext<any>(GeneralContext);
    const {condoSelected, setCondoSelected, houseSelected, setHouseSelected} = useContext<any>(FiltersContext);
    const {user} = useAppSelector((state) => state.auth);
    const {condos, homes} = useAppSelector((state) => state.resident);
    const dispatch = useAppDispatch();
    const [expanded, setExpanded] = useState<string | false>(false);
    const {t} = useTranslation();
    const [role, setRole] = useState(new Role());

    const toggleDrawer = (anchor: Anchor, open: boolean) => {
        setShowSidebar(open);
    }



    const handleChange =
        (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    const handleChangeCondo = (condo: any, e: ChangeEvent<HTMLInputElement>) => {
        const condosFilter = [];
        condoSelected.forEach(condoEle => {
            if (condoEle.id == condo.id) {
                condoEle.checked = e.target.checked
            } else {
                condoEle.checked = false;
            }
            condosFilter.push(condoEle);
        })
        setCondoSelected([...condosFilter])
    }

    const handleChangeHouse = (house: any, e: ChangeEvent<HTMLInputElement>) => {
        const housesFilter = [];
        houseSelected.forEach(houseEle => {
            if (houseEle.id == house.id) {
               houseEle.checked = e.target.checked
            }
            housesFilter.push(houseEle);
        })
        setHouseSelected([...housesFilter])
    }

    useEffect(() => {
        setRole(user.role);
    }, [user])

    useEffect(() => {
        const condosByFilter = condos.map(condo => {
            return {
                id: condo.id,
                name: condo.name,
                checked: false
            }
        })
        setCondoSelected([...condosByFilter])
    }, [condos]);

    useEffect(() => {
        const housesByFilter = homes.map(home => {
            return {
                id: home.id,
                description: home.description,
                numberHouse: home.numberHouse,
                checked: false
            }
        })
        setHouseSelected([...housesByFilter])
    }, [homes]);


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
                                    {
                                        (role.name === RoleEnum.RESIDENT) &&
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
                                                    <FormControl>
                                                        <RadioGroup
                                                            aria-labelledby="demo-radio-buttons-group-label"
                                                            name="radio-buttons-group"
                                                        >
                                                            {
                                                                condoSelected.map((condo) => (
                                                                    <FormControlLabel key={condo.id} value={condo.id}
                                                                                      control={<Radio onChange={(e) => handleChangeCondo(condo, e)} />}
                                                                                      label={capitalizeLabel(condo.name)} />
                                                                ))
                                                            }
                                                        </RadioGroup>
                                                    </FormControl>
                                                </Box>
                                            </AccordionDetails>
                                        </Accordion>

                                    }
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
                                            <Box>
                                                {
                                                    houseSelected.map((home) => (
                                                        <FormControlLabel key={home.id} control={
                                                            <Checkbox size={'small'}
                                                                      onChange={(e) => handleChangeHouse(home, e)}/>
                                                        }
                                                                          label={
                                                                              <Typography sx={{fontSize: '.9rem'}}>
                                                                                  {capitalizeLabel(home.description)}
                                                                              </Typography>
                                                                          }
                                                        />
                                                    ))
                                                }
                                            </Box>
                                        </AccordionDetails>
                                    </Accordion>
                                </Box>

                                <Divider/>

                                <Container maxWidth="sm">

                                </Container>
                            </Box>
                        </SwipeableDrawer>
                    </React.Fragment>
                ))}
            </div>

        </div>
    )
}