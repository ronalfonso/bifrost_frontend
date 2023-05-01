import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import Box from '@mui/material/Box';
import {
    AppBar,
    Tab,
    Tabs,
    useTheme
} from '@mui/material';
import {TabPanelComponent} from '../../../components/BifrostPage/TabPanelComponent';
import {SyntheticEvent, useContext, useState} from 'react';
import {GeneralContext} from '../../../../contexts/GeneralContext';
import SwipeableViews from 'react-swipeable-views';
import {useTranslation} from 'react-i18next';
import {Ballot, HowToVote} from '@mui/icons-material';
import {LoadingComponent} from '../../../../core/shared/ui/components/LoadingComponent';
import {useAppSelector} from '../../../../store';
import {InvitationCardComponent} from '../../../components/InvitationsPage/InvitationCardComponent';

export const InvitationsListPage = () => {
    // @ts-ignore
    const {isLoading} = useContext(GeneralContext);
    const {actives, inactives} = useAppSelector((state) => state.invitation);
    const theme = useTheme();
    const [tabValue, setTabValue] = useState(0);
    const {t} = useTranslation();

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
                                    <div>
                                        {
                                            actives.length > 0
                                                ?
                                                actives.map((invitation) => {
                                                    return (
                                                        <InvitationCardComponent
                                                            key={invitation.houseNumber}
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
                                    <div>
                                        {
                                            inactives.length > 0
                                                ?
                                                inactives.map((invitation) => {
                                                    return (
                                                        <InvitationCardComponent
                                                            key={invitation.houseNumber}
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
            </Box>
        </PageWrapper>
    )
}

export default InvitationsListPage;