import {Field, Form, Formik} from "formik";
import {object, string} from "yup";
import {Box, Button, FormControl, FormControlLabel, FormGroup, Switch, Typography} from "@mui/material";
import {TextField} from "formik-mui";
import {useContext} from "react";
import {GeneralContext} from "../../../contexts/general/GeneralContext";
import {useTranslation} from "react-i18next";

export const VehicleDataComponent = () => {
    const { itemEdit, setItemEdit, setStepInv, stepInv, setPrevStep} = useContext<any>(GeneralContext)
    const {t} = useTranslation();

    return (
        <>
            <Formik
                initialValues={{
                    vehicleModel: itemEdit !== null ? itemEdit.vehicleModel : '',
                    vehicleId: itemEdit !== null ? itemEdit.vehicleId : '',
                    vehicleColor: itemEdit !== null ? itemEdit.vehicleColor : '',
                }}
                onSubmit={(values) => {
                    setItemEdit({
                        ...itemEdit,
                        vehicleModel: values.vehicleModel,
                        vehicleId: values.vehicleId,
                        vehicleColor: values.vehicleColor,
                    })
                    setStepInv({
                        ...stepInv,
                        vehicleData: true
                    })
                }}
                validationSchema={object({
                    vehicleModel: string()
                        .min(3, 'Debe tener al menos 3 caracteres'),
                    vehicleId: string()
                        .min(4, 'Debe tener al menos 4 caracteres'),
                    vehicleColor: string()
                        .min(4, 'Debe tener al menos 4 caracteres'),
                })
                }>
                {
                    (formik) => (
                        <Form className={'form_register'}>
                            <div className="">
                                <Box marginTop={2}>
                                    <Field
                                        component={TextField}
                                        type="text"
                                        label={t('INVITATIONS_FORM.VEHICLE_MODEL')}
                                        name={'vehicleModel'}
                                        size="small"
                                        sx={{width: '100%', maxHeight: '60px'}}
                                    />
                                </Box>
                                <Box marginTop={2}>
                                    <Field
                                        component={TextField}
                                        type="text"
                                        label={t('INVITATIONS_FORM.VEHICLE_ID')}
                                        name={'vehicleId'}
                                        size="small"
                                        sx={{width: '100%', maxHeight: '60px'}}
                                    />
                                </Box>
                                <Box marginTop={2}>
                                    <Field
                                        component={TextField}
                                        type={'text'}
                                        label={t('INVITATIONS_FORM.VEHICLE_COLOR')}
                                        name={'vehicleColor'}
                                        size="small"
                                        sx={{width: '100%', maxHeight: '60px'}}
                                    />
                                </Box>
                                <Box marginTop={2} sx={{display: 'flex', justifyContent: 'space-between'}}>
                                    <FormGroup>
                                        <FormControlLabel
                                            sx={{marginLeft: '0'}}
                                            control={
                                                <Switch size={'small'} color={'primary'} />
                                            }
                                            label={
                                                <Typography style={{fontSize: '.75rem',}}>
                                                    {t('INVITATIONS_FORM.NO_INFORMATION')}
                                                </Typography>
                                            }/>
                                    </FormGroup>
                                </Box>

                            </div>
                            <div className="footer_stepper ">
                                <FormControl size="small" variant="outlined">
                                    <Button variant="outlined" onClick={() => setPrevStep(true)}>
                                        {t('OUT.REGISTER.BACK')}
                                    </Button>
                                </FormControl>

                                <FormControl size="small" variant="outlined">
                                    <Button type="submit" variant="contained"
                                            disabled={!formik.isValid}
                                    >{t('OUT.REGISTER.NEXT')}</Button>
                                </FormControl>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </>
    )
}