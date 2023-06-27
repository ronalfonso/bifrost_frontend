import {useContext, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Box, Button, Step, StepLabel, Stepper, Typography} from '@mui/material';
import {UserRegisterComponent} from '../UserRegisterComponent';
import {CondoFormComponent} from './CondoFormComponent';
import success from '../../../assets/img/success.jpg';
import {RegisterContext} from "../../../contexts/register/RegisterContext";


export const CondoRegisterComponent = () => {
    const {
        userRegisterSubmit,
        setUserRegisterSubmit,
        setShowRegister,
        condoRegisterSubmit,
        setCondoRegisterSubmit,
        typeRegister,
    } = useContext<any>(RegisterContext);
    const {t} = useTranslation();
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState<{
        [k: number]: boolean;
    }>({});
    const steps = [`${t('OUT.REGISTER.USER_DATA')}`, `${t('OUT.REGISTER.CONDO_DATA')}`];

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
        if ((typeRegister === 1) && (userRegisterSubmit || condoRegisterSubmit)) {
            setUserRegisterSubmit(false);
            setCondoRegisterSubmit(false);
            handleComplete();
        }
    }, [userRegisterSubmit, condoRegisterSubmit, typeRegister]);

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

                                activeStep === 0
                                    ?
                                    <div className={'formUser_container'}>
                                        <UserRegisterComponent/>
                                    </div>
                                    :
                                    <div className={'formResident_container'}>
                                        <CondoFormComponent/>
                                    </div>
                            }
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
        </>
    )
}