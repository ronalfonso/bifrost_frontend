import {SyntheticEvent, useContext, useEffect, useState} from 'react';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import Box from '@mui/material/Box';
import {
    AppBar, Fab,
    Tab,
    Tabs,
    useTheme
} from '@mui/material';
import {Add, Ballot, HowToVote} from '@mui/icons-material';
import {TabPanelComponent} from '../../../components/BifrostPage/TabPanelComponent';
import {GeneralContext} from '../../../../contexts/GeneralContext';
import SwipeableViews from 'react-swipeable-views';
import {useTranslation} from 'react-i18next';
import {LoadingComponent} from '../../../../core/shared/ui/components/LoadingComponent';
import {useAppSelector} from '../../../../store';
import {InvitationCardComponent} from '../../../components/InvitationsPage/InvitationCardComponent';
import {Invitation} from '../../../../core/models/invitations/Invitation';
import {useNavigate} from 'react-router-dom';

export const InvitationsListPage = () => {
    // @ts-ignore
    const {isLoading, homeSelected,} = useContext<any>(GeneralContext);
    const navigate = useNavigate();
    const {actives, inactives} = useAppSelector((state) => state.invitation);
    const theme = useTheme();
    const [tabValue, setTabValue] = useState(0);
    const {t} = useTranslation();
    const [activeList, setActiveList] = useState<Invitation[]>([]);
    const [inactiveList, setInactiveList] = useState<Invitation[]>([]);

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

    const goCreate = () => {
        navigate('../create-invitation')
    }

    useEffect(() => {
        setActiveList([...actives]);
        setInactiveList([...inactives]);
    }, [actives, inactives]);


    useEffect(() => {
        if (homeSelected !== null) {
            const activeFilter = actives.filter(active => active.homeId === homeSelected.id);
            const inactiveFilter = inactives.filter(inactive => inactive.homeId === homeSelected.id);
            setActiveList([...activeFilter]);
            setInactiveList([...inactiveFilter]);
        }
    }, [homeSelected]);


    return (
        <PageWrapper>
            <Box>
                <div className={'tabs_container'}>
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
                                 icon={<Ballot fontSize='small'/>}
                                 label={t('GENERAL.ACTIVES_INV')} {...a11yProps(0)} />
                            <Tab sx={{marginTop: '-10px', height: '3rem', fontSize: '10px'}}
                                 icon={<HowToVote fontSize='small'/>}
                                 label={t('GENERAL.INACTIVES_INV')} {...a11yProps(1)} />
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
                                    <div className={'card_invitation'}>
                                        {
                                            activeList.length > 0
                                                ?
                                                activeList.map((invitation) => {
                                                    return (
                                                        <InvitationCardComponent
                                                            key={invitation.id}
                                                            invitation={invitation}/>
                                                    )
                                                })
                                                :
                                                <span>No existen registros</span>
                                        }
                                    </div>
                            }
                        </TabPanelComponent>
                        <TabPanelComponent value={tabValue} index={1} dir={theme.direction}>
                            {
                                isLoading ?
                                    <LoadingComponent/>
                                    :
                                    <div className={`card_invitation`}>
                                        {
                                            inactiveList.length > 0
                                                ?
                                                inactiveList.map((invitation) => {
                                                    return (
                                                        <InvitationCardComponent
                                                            key={invitation.id}
                                                            invitation={invitation}/>
                                                    )
                                                })
                                                :
                                                <span>No existen registros</span>
                                        }
                                    </div>
                            }

                        </TabPanelComponent>

                    </SwipeableViews>

                </div>
                <Box className={'add-button'}>
                    <Fab onClick={goCreate} color="primary" aria-label="add">
                        <Add />
                    </Fab>
                </Box>
            </Box>

        </PageWrapper>
    )
}

export default InvitationsListPage;