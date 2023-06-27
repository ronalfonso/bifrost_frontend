import {AppBar, Tab, Tabs, useTheme} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import SwipeableViews from "react-swipeable-views";
import {TabPanelComponent} from "../../components/BifrostPage/TabPanelComponent";
import {LoadingComponent} from "../../../core/shared/ui/components/LoadingComponent";
import Box from "@mui/material/Box";
import {SyntheticEvent, useContext, useEffect, useState} from "react";
import {GeneralContext} from "../../../contexts/general/GeneralContext";
import {useAppDispatch, useAppSelector} from "../../../store";
import {Home} from "../../../core/models/homes/Home";
import {useTranslation} from "react-i18next";
import {startGetResidentHome} from "../../../store/residents";
import {startGetListHomeOfCondo} from "../../../store/condos";
import {RoleEnum} from "../../../store/auth/enum/role.enum";
import {HomeComponent} from "../../components/BifrostPage/HomeComponent";

export const TabHomeComponent = () => {
    const {isLoading, setIsLoading,} = useContext<any>(GeneralContext);
    const {user} = useAppSelector((state) => state.auth);
    const {homes} = useAppSelector((state) => state.resident);
    const {homesCondo} = useAppSelector((state) => state.condo);
    const dispatch = useAppDispatch();
    const theme = useTheme();
    const [homeList, setHomeList] = useState<Home[]>([]);
    const [tabValue, setTabValue] = useState(0);
    const {t} = useTranslation();

    const _getResidentHome = async () => {
        setIsLoading(true);
        dispatch(startGetResidentHome()).then(() => {
            setIsLoading(false);
        });
    }

    const _getHomesCondo = async () => {
        setIsLoading(true);
        dispatch(startGetListHomeOfCondo()).then(() => {
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
        if (user !== null && user.role.name === RoleEnum.RESIDENT) {
            _getResidentHome()
        } else if (user !== null && user.role.name === RoleEnum.CONDO) {
            _getHomesCondo();
        }
    }, [user]);

    useEffect(() => {
        if (user !== null && user.role.name === RoleEnum.CONDO) {
            setHomeList([...homesCondo])
        }
        if (user !== null && (user.role.name === RoleEnum.RESIDENT) && (homes[0].id !== 0)) {
            setHomeList([...homes])
        }
    }, [homes, homesCondo]);

    return (
        <>
            <Box sx={{width: '100%'}}>
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
                    <TabPanelComponent value={tabValue} index={0} dir={theme.direction} height={'calc(100vh - 124px)'}>
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
                                                                      home={home}/>
                                                )
                                            })
                                            :
                                            <span>{t('WARNING.RECORD.NO_HOUSEHOLDS_REGISTERED')}</span>
                                    }
                                </div>

                        }
                    </TabPanelComponent>
                    <TabPanelComponent value={tabValue} index={1} dir={theme.direction} height={'calc(100vh - 124px)'}>
                        Item Two
                    </TabPanelComponent>
                </SwipeableViews>
            </Box>
        </>
    )
}