import {
    Box,
    Button,
    DialogActions,
    DialogContent,
    Step,
    StepLabel,
    Stepper,
    TextField,
    Typography
} from '@mui/material';
import {useContext, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import {GeneralContext} from '../../../contexts/general/GeneralContext';
import {UserRegisterComponent} from '../UserRegisterComponent';
import {ResidentFormComponent} from './ResidentFormComponent';
import {LoadingComponent} from '../../../core/shared/ui/components/LoadingComponent';
import {useAppDispatch} from '../../../store';
import {startGetHomesByCode} from '../../../store/homes';
import success from '../../../assets/img/success.jpg'
import {RegisterContext} from "../../../contexts/register/RegisterContext";


export const ResidentRegisterComponent = ({type}: { type: string }) => {
    const {
        codeInvite,
        setCodeInvite,
        isLoading,
        setIsLoading,
    } = useContext<any>(GeneralContext);
    const {
        userRegisterSubmit,
        setUserRegisterSubmit,
        setHomeListRegister,
        setShowRegister,
        residentRegisterSubmit,
        setResidentRegisterSubmit,
        typeRegister,
    } = useContext<any>(RegisterContext);
    const dispatch = useAppDispatch();
    const {t} = useTranslation();
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState<{
        [k: number]: boolean;
    }>({});
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = () => {
        dispatch(startGetHomesByCode(codeInvite)).then((homes) => {
            setHomeListRegister([...homes]);
            setIsLoading(false);
            setOpen(false);
        });
    };

    const steps = [`${t('OUT.REGISTER.USER_DATA')}`, `${t('OUT.REGISTER.RESIDENT_DATA')}`];

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ?
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setShowRegister(false);
        setActiveStep(0);
        setCompleted({});
    };

    useEffect(() => {
        if (type == '2') {
            setOpen(true)
        }
    }, [type]);

    useEffect(() => {
        if ((typeRegister === 2) && (userRegisterSubmit || residentRegisterSubmit)) {
            setUserRegisterSubmit(false);
            setResidentRegisterSubmit(false);
            handleComplete();
        }
    }, [userRegisterSubmit, residentRegisterSubmit, typeRegister]);


    return (
        <>
            <Box sx={{width: '100%'}}>
                <Stepper nonLinear activeStep={activeStep} alternativeLabel>
                    {steps.map((label, index) => (
                        <Step key={label} completed={completed[index]}>
                            <StepLabel sx={{margin: 0}}>
                                {label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {allStepsCompleted() ? (
                        <>
                            <div>
                                <img src={success} alt='success'/>
                            </div>
                            <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                                <Box sx={{flex: '1 1 auto'}}/>
                                <Button onClick={handleReset}>{t('OUT.REGISTER.GO_TO_LOGIN')}</Button>
                            </Box>
                        </>
                    ) : (
                        <div className={'card_container'}>
                            {
                                isLoading ?
                                    <LoadingComponent/>
                                    :
                                    <>
                                        {
                                            activeStep === 0
                                                ?
                                                <div className={'formUser_container'}>
                                                    <UserRegisterComponent/>
                                                </div>
                                                :
                                                <div className={'formResident_container'}>
                                                    <ResidentFormComponent/>
                                                </div>
                                        }
                                    </>
                            }

                            {/*<Typography sx={{ mt: 2, mb: 1, py: 1 }}>*/}
                            {/*    Step {activeStep + 1} segundo*/}
                            {/*</Typography>*/}

                        </div>
                    )}
                </div>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                <Box sx={{flex: '1 1 auto'}}/>
                {
                    activeStep === steps.length &&
                    // (completed[activeStep] ? (
                    <Typography variant="caption" sx={{display: 'inline-block'}}>
                        {t('OUT.REGISTER.COMPLETE_REGISTRATION_SUCCESSFULLY')}
                    </Typography>
                    // ) : (
                    //     <Button onClick={handleComplete}>
                    //         {completedSteps() === totalSteps() - 1
                    //             ? 'Finish'
                    //             : 'Complete Step'}
                    //     </Button>
                    // ))
                }
            </Box>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {t('OUT.REGISTER.TITLE_DIALOG')}
                </DialogTitle>
                <DialogContent>
                    <Box marginTop={2}>
                        <TextField
                            inputProps={{maxLength: 24}}
                            size="small"
                            id="outlined-error"
                            value={codeInvite}
                            onChange={(e) => {
                                setCodeInvite(e.target.value)
                            }}
                            label={t('OUT.REGISTER.CODE')}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button color={'error'} onClick={handleClose}>{t('GENERAL.CANCEL')}</Button>
                    <Button onClick={handleConfirm} disabled={codeInvite.length == 0} autoFocus>
                        {t('GENERAL.CONFIRM')}
                    </Button>
                </DialogActions>
            </Dialog>

        </>
    )
}