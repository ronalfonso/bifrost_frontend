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
import {GeneralContext} from '../../../contexts/GeneralContext';
import {UserRegisterComponent} from '../UserRegisterComponent';
import {ResidentFormComponent} from './ResidentFormComponent';


export const ResidentRegisterComponent = ({type}: {type: string}) => {
    // @ts-ignore
    const {codeInvite, setCodeInvite, userRegisterSubmit, setUserRegisterSubmit,} = useContext(GeneralContext);
    const {t} = useTranslation();
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState<{
        [k: number]: boolean;
    }>({});
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
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
        setActiveStep(0);
        setCompleted({});
    };

    useEffect(() => {
        if (type == '2') {
            setOpen(true)
        }
    }, [type]);

    useEffect(() => {
        if (userRegisterSubmit) {
            setUserRegisterSubmit(false);
            handleComplete();
        }
    }, [userRegisterSubmit]);



    return (
        <>
            <Box sx={{ width: '100%' }}>
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
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset}>Reset</Button>
                            </Box>
                        </>
                    ) : (
                        <div className={'card_container'}>
                            {
                                activeStep === 0
                                    ?
                                    <div className={'formUser_container'}>
                                        <UserRegisterComponent />
                                    </div>
                                    :
                                    <div className={'formResident_container'}>
                                        <ResidentFormComponent />
                                    </div>
                            }
                            {/*<Typography sx={{ mt: 2, mb: 1, py: 1 }}>*/}
                            {/*    Step {activeStep + 1} segundo*/}
                            {/*</Typography>*/}

                        </div>
                    )}
                </div>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                {
                    activeStep === steps.length &&
                    // (completed[activeStep] ? (
                        <Typography variant="caption" sx={{ display: 'inline-block' }}>
                            Step {activeStep + 1} already completed
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
                           inputProps={{ maxLength: 24 }}
                           size="small"
                           id="outlined-error"
                           value={codeInvite}
                           onChange={(e) => { setCodeInvite(e.target.value) } }
                           label={t('OUT.REGISTER.CODE')}
                       />
                   </Box>
                </DialogContent>
                <DialogActions>
                    <Button color={'error'} onClick={handleClose}>{t('GENERAL.CANCEL')}</Button>
                    <Button onClick={handleClose} autoFocus>
                        {t('GENERAL.CONFIRM')}
                    </Button>
                </DialogActions>
            </Dialog>

        </>
    )
}