import {forwardRef, ReactElement, Ref, Suspense, useContext, useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AuthRoutes} from '../auth/routes/AuthRoutes';
import {BifrostRoutes} from '../bifrost/router/BifrostRoutes';
import {PublicRoutes} from './PublicRoutes';
import {PrivateRoutes} from './PrivateRoutes';
import {HeaderComponent} from '../bifrost/pages/UI/HeaderComponent';
import {FooterComponent} from '../bifrost/pages/UI/FooterComponent';
import {LoadingGlobalComponent} from '../core/shared/ui/components/LoadingGlobalComponent';
import {GeneralContext} from '../contexts/GeneralContext';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import {Box, Button, DialogActions, DialogContent, Slide, Typography} from '@mui/material';
import {TransitionProps} from '@mui/material/transitions';
import {Invitation} from '../core/models/invitations/Invitation';
import moment from 'moment/moment';
import styles from '../styles/style.module.scss';
import {useTranslation} from "react-i18next";

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement<any, any>;
    },
    ref: Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const AppRouter = () => {
    // @ts-ignore
    const {isOpenInvitation, setIsOpenInvitation, invitationSelected, setInvitationSelected} = useContext<any>(GeneralContext);
    const [invitation, setInvitation] = useState<Invitation>(new Invitation());
    const {t} = useTranslation();

    const handleClose = () => {
        setInvitationSelected(null)
        setIsOpenInvitation(false);
    };

    useEffect(() => {
        if (invitationSelected !== null) {
            setInvitation({...invitationSelected})
        }
    }, [invitationSelected]);


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/auth/*' element={
                        <PublicRoutes>
                            <AuthRoutes/>
                        </PublicRoutes>
                    }/>

                    <Route path='/*' element={
                        <PrivateRoutes>

                            <div className={'main_container'}>
                                <HeaderComponent/>
                                <Suspense fallback={<LoadingGlobalComponent/>}>
                                    <div className={'body_container'}>
                                        <BifrostRoutes/>
                                    </div>
                                </Suspense>

                                <div className={'footer_container'}>
                                    <FooterComponent/>
                                </div>
                            </div>
                        </PrivateRoutes>
                    }/>
                </Routes>
            </BrowserRouter>
            <Dialog
                open={isOpenInvitation}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    <Box>
                        <Typography
                            sx={{fontSize: 16, fontWeight: 'bold', letterSpacing: '0.05em'}}>
                            {invitation.firstName} {invitation.lastName}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{fontSize: 13, letterSpacing: '0.05em'}}>
                            {moment(invitation.fromDate).format('DD/MM/YYYY')}
                        </Typography>
                    </Box>
                </DialogTitle>

                <DialogContent>
                    <div className="qr_container">
                        <img src={`${invitation.qrCode}`} alt={`Inv ${invitation.firstName} ${invitation.lastName}`}/>
                    </div>
                    <div className="invitation_container">
                        <Box>
                            <label>
                                <Typography sx={{color: styles.blackSecondary, fontSize: 12}}>
                                    {t('INVITATIONS_FORM.TIME_RANGE')}:
                                </Typography>
                            </label>
                            <span>
                                <Typography sx={{color: styles.blackPrimary, fontSize: 11}}>
                                     {moment(invitation.fromDate).format('hh:mm a')} - {moment(invitation.toDate).format('hh:mm a')}
                                </Typography>
                            </span>
                        </Box>

                        <Box sx={{mt: 1}}>
                            <label>
                                <Typography sx={{color: styles.blackSecondary, fontSize: 12}}>
                                    {t('INVITATIONS_FORM.INVITATION_TO')}:
                                </Typography>
                            </label>
                            <span>
                                <Typography sx={{color: styles.blackPrimary, fontSize: 11}}>
                                    {invitation.condoName} - #{invitation.houseNumber}
                                </Typography>
                            </span>
                        </Box>

                        <Box sx={{mt: 1}}>
                            <label>
                                <Typography sx={{color: styles.blackSecondary, fontSize: 12}}>
                                    {t('INVITATIONS_FORM.PHONE_NUMBER')}:
                                </Typography>
                            </label>
                            <span>
                                <Typography sx={{color: styles.blackPrimary, fontSize: 11}}>
                                    {invitation.phoneNumber}
                                </Typography>
                            </span>
                        </Box>

                        <Box sx={{mt: 1}}>
                            <label>
                                <Typography sx={{color: styles.blackSecondary, fontSize: 12}}>
                                    {t('INVITATIONS_FORM.VEHICLE')}:
                                </Typography>
                            </label>
                            <span>
                                <Typography sx={{color: styles.blackPrimary, fontSize: 11}}>
                                    {invitation.vehicleModel}
                                </Typography>
                            </span>
                        </Box>

                        <Box sx={{mt: 1}}>
                            <label>
                                <Typography sx={{color: styles.blackSecondary, fontSize: 12}}>
                                    {t('INVITATIONS_FORM.VEHICLE_COLOR')}:
                                </Typography>
                            </label>
                            <span>
                                <Typography sx={{color: styles.blackPrimary, fontSize: 11}}>
                                    {invitation.vehicleColor}
                                </Typography>
                            </span>
                        </Box>

                        <Box sx={{mt: 1}}>
                            <label>
                                <Typography sx={{color: styles.blackSecondary, fontSize: 12}}>
                                    {t('INVITATIONS_FORM.VEHICLE_ID')}:
                                </Typography>
                            </label>
                            <span>
                                <Typography sx={{color: styles.blackPrimary, fontSize: 11}}>
                                    {invitation.vehicleId}
                                </Typography>
                            </span>
                        </Box>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>{t('DICTIONARY.CLOSE')}</Button>
                    <Button onClick={handleClose}>{t('DICTIONARY.SHARE')}</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}