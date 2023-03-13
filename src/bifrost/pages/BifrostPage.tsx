import {SyntheticEvent, useContext, useEffect, useState} from 'react';
import {GeneralContext} from '../../contexts/GeneralContext';
import {useTranslation} from "react-i18next";
import {useAppSelector} from '../../store';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Box from '@mui/material/Box';
import {AppBar, styled, Tab, Tabs, useTheme} from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import {getHomeResidents} from '../../store/residents/api/residents.service';
import {TabPanelComponent} from '../components/BifrostPage/TabPanelComponent';
import {HomeComponent} from "../components/BifrostPage/HomeComponent";
import {ResidentHomes} from "../../core/models/residents/Resident-homes";
import {Diversity3, Home, InsertInvitation} from '@mui/icons-material';

interface StyledTabProps {
    label: string;
}

export const BifrostPage = () => {
    // @ts-ignore
    const {isLoading} = useContext(GeneralContext);
    const theme = useTheme();
    const {user} = useAppSelector((state) => state.auth);
    const [residentList, setResidentList] = useState<ResidentHomes[]>([]);
    const [value, setValue] = useState(0);
    const {t} = useTranslation();

    const _getResidentHome = async () => {
        getHomeResidents(user.id).then((data: ResidentHomes[]) => {
            if (data) {
                setResidentList([...data]);
            }
        }).catch(err => {
            console.error(err)
        })
    }

    function a11yProps(index: number) {
        return {
            id: `full-width-tab-${index}`,
            'aria-controls': `full-width-tabpanel-${index}`,
        };
    }


    const StyledTab = styled((props: StyledTabProps) => (
        <Tab disableRipple {...props} />
    ))(({ theme }) => ({
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
    }));

    const handleChangeTabs = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    useEffect(() => {
        if (isLoading === false) {
            _getResidentHome()
        }
    }, [isLoading]);


    return (
        <PageWrapper title={'Home'}>
            <div className={'body_container'}>
                <div className={'tabs_container'}>
                    <Box sx={{ width: '100%'}}>
                        <AppBar position="static"
                        >
                            <Tabs
                                sx={{height: '3rem', fontSize: '10px'}}
                                value={value}
                                onChange={handleChangeTabs}
                                indicatorColor="secondary"
                                textColor="inherit"
                                variant="fullWidth"
                                scrollButtons="auto"
                                aria-label="full width tabs example"
                                centered
                            >
                                <Tab sx={{marginTop: '-10px', height: '3rem', fontSize: '10px'}} icon={<Home fontSize='small' />} label={t('IN.SECTIONS.HOME.TAB.HOMES')} {...a11yProps(0)} />
                                <Tab sx={{marginTop: '-10px', height: '3rem', fontSize: '10px'}} icon={<Diversity3 fontSize='small' />} label={t('IN.SECTIONS.HOME.TAB.SOCIAL')} {...a11yProps(1)} />
                                <Tab sx={{marginTop: '-10px', height: '3rem', fontSize: '10px'}} icon={<InsertInvitation fontSize='small' />} label={t('IN.SECTIONS.HOME.TAB.INVITATIONS')} {...a11yProps(2)} />
                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={handleChangeIndex}

                        >
                            <TabPanelComponent value={value} index={0} dir={theme.direction}>
                                <div className={'panel-home'}>
                                {
                                    residentList.map((resident) => {
                                        return (
                                            <HomeComponent key={resident.home.numberHouse} resident={resident}/>
                                        )
                                    })
                                }
                                </div>
                            </TabPanelComponent>
                            <TabPanelComponent value={value} index={1} dir={theme.direction}>
                                Item Two
                            </TabPanelComponent>
                            <TabPanelComponent value={value} index={2} dir={theme.direction}>
                                Item Three
                            </TabPanelComponent>
                        </SwipeableViews>
                    </Box>
                </div>
            </div>


        </PageWrapper>
    )
}

export default BifrostPage;