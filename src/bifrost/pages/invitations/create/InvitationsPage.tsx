import {useContext, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,Step, StepLabel, Stepper, Typography
} from '@mui/material';
import styles from '../../../../styles/style.module.scss';
import {GeneralContext} from '../../../../contexts/general/GeneralContext';
import success from "../../../../assets/img/success.jpg";
import {PersonalDataComponent} from "../../../components/InvitationsPage/PersonalDataComponent";
import {VehicleDataComponent} from "../../../components/InvitationsPage/VehicleDataComponent";
import {InvitationDataComponent} from "../../../components/InvitationsPage/InvitationDataComponent";

export const InvitationsPage = () => {
    const { prevStep, setPrevStep, stepInv} = useContext<any>(GeneralContext);
    const {t} = useTranslation();
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState<{
        [k: number]: boolean;
    }>({});
    // Stepper
    const steps = [`${t('INVITATIONS_FORM.PERSONAL_INFORMATION')}`,
        `${t('INVITATIONS_FORM.VEHICLE_DATA')}`, `${t('INVITATIONS_FORM.INVITATION_DETAILS')}`];

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setPrevStep(false);
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
    // Fin stepper

    useEffect(() => {
        if (stepInv.personalData === true ||
            stepInv.vehicleData === true ||
            stepInv.invData === true) {
            handleComplete();
        }
    }, [stepInv]);

    useEffect(() => {
        if (prevStep === true) handleBack();
    }, [prevStep]);

    return (
        <PageWrapper title={'Invitations'}>
            <Card variant="outlined"
                  className="invitations"
            >
                <CardHeader
                    sx={{p: 0, borderBottom: `1px solid ${styles.borderColor}`}}
                    titleTypographyProps={{fontSize: '1.2rem'}}
                    title={t('GENERAL.GUEST')}
                >

                </CardHeader>
                <CardContent className={'invitations_cardContainer'} sx={{pt: 1, pl: 0, pr: 0, height: 'calc(75vh - 124px)'}}>
                    <Box sx={{width: '100%'}}>
                        <Stepper nonLinear activeStep={activeStep} alternativeLabel >
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
                                        (activeStep === 0) &&
                                        <PersonalDataComponent />
                                    }
                                    {
                                        (activeStep === 1) &&
                                        <VehicleDataComponent />
                                    }

                                    {
                                        (activeStep === 2) &&
                                        <InvitationDataComponent />
                                    }

                                </div>
                            )}
                        </div>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                        <Box sx={{flex: '1 1 auto'}}/>
                        {
                            activeStep === steps.length &&
                            <Typography variant="caption" sx={{display: 'inline-block'}}>
                                {t('OUT.REGISTER.COMPLETE_REGISTRATION_SUCCESSFULLY')}
                            </Typography>

                        }
                    </Box>
                </CardContent>
                <CardActions sx={{display: 'flex', justifyContent: 'flex-end'}}>

                </CardActions>
            </Card>
        </PageWrapper>

    )
}

export default InvitationsPage;