import {SyntheticEvent, useContext, useEffect, useState} from 'react';
import {GeneralContext} from '../../contexts/GeneralContext';
import {useTranslation} from "react-i18next";
import {useAppDispatch, useAppSelector} from '../../store';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Box from '@mui/material/Box';
import {AppBar, Tab, Tabs, useTheme} from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import {TabPanelComponent} from '../components/BifrostPage/TabPanelComponent';
import {HomeComponent} from "../components/BifrostPage/HomeComponent";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import HomeIcon from '@mui/icons-material/Home';
import {startGetResidentHome} from '../../store/residents';
import {LoadingComponent} from '../../core/shared/ui/components/LoadingComponent';
import {Home} from '../../core/models/homes/Home';


export const BifrostPage = () => {
    // @ts-ignore
    const {isLoading, setIsLoading,} = useContext<any>(GeneralContext);
    const {  homes } = useAppSelector((state) => state.resident);
    const dispatch = useAppDispatch();
    const theme = useTheme();
    const {user} = useAppSelector((state) => state.auth);
    const [homeList, setHomeList] = useState<Home[]>([]);
    const [tabValue, setTabValue] = useState(0);
    const {t} = useTranslation();

    const _getResidentHome = async () => {
        setIsLoading(true);
        dispatch(startGetResidentHome(user.id)).then(() => {
            setIsLoading(false);
        });
    }

    function a11yProps(index: number) {
        return {
            id: `full-width-tab-${index}`,
            'aria-controls': `full-width-tabpanel-${index}`,
        };
    }

    const handleChangeTabs = (event: SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setTabValue(index);
    };

    useEffect(() => {
        _getResidentHome()
    }, []);

    useEffect(() => {
        if (homes[0].id !== 0) {
            setHomeList([...homes])
        }
    }, [homes]);


    return (
        <PageWrapper title={'Home'}>
            <div className={'tabs_container'}>
                <Box sx={{width: '100%', height: '80vh'}}>
                    <AppBar position="static">
                        <Tabs
                            sx={{height: '3rem', fontSize: '10px'}}
                            value={tabValue}
                            onChange={handleChangeTabs}
                            indicatorColor="secondary"
                            textColor="inherit"
                            variant="fullWidth"
                            scrollButtons="auto"
                            aria-label="full width tabs example"
                            centered>
                            <Tab sx={{marginTop: '-10px', height: '3rem', fontSize: '10px'}}
                                 icon={<HomeIcon fontSize='small'/>}
                                 label={t('IN.SECTIONS.HOME.TAB.HOMES')} {...a11yProps(0)} />
                            <Tab sx={{marginTop: '-10px', height: '3rem', fontSize: '10px'}}
                                 icon={<Diversity3Icon fontSize='small'/>}
                                 label={t('IN.SECTIONS.HOME.TAB.SOCIAL')} {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        style={{height: '80%'}}
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={Number(tabValue)}
                        onChangeIndex={handleChangeIndex}

                    >
                        <TabPanelComponent value={tabValue} index={0} dir={theme.direction}>
                            {
                                isLoading ?
                                    <LoadingComponent/>
                                    :
                                    <div className={'panel-home'}>
                                        {
                                            homeList.length > 0
                                                ?
                                                homeList.map((home) => {
                                                    return (
                                                        <HomeComponent key={home.numberHouse}
                                                                       home={home} />
                                                    )
                                                })
                                                :
                                                <span>{t('WARNING.RECORD.NO_HOUSEHOLDS_REGISTERED')}</span>
                                        }
                                    </div>

                            }
                        </TabPanelComponent>
                        <TabPanelComponent value={tabValue} index={1} dir={theme.direction}>
                            Item Two
                        </TabPanelComponent>
                    </SwipeableViews>
                </Box>
            </div>
        </PageWrapper>
    )
}

export default BifrostPage;