import {useContext} from "react";
import {Field, Form, Formik} from "formik";
import {number, object, string} from "yup";
import {Box, Button, FormControl, FormControlLabel, FormGroup, Switch, Typography} from "@mui/material";
import {TextField} from "formik-mui";
import {useTranslation} from "react-i18next";
import {GeneralContext} from "../../../contexts/general/GeneralContext";

export const PersonalDataComponent = () => {
    const { itemEdit, setItemEdit, setStepInv, stepInv} = useContext<any>(GeneralContext)
    const {t} = useTranslation();

    return (
        <>
            <Formik
                initialValues={{
                    firstName: itemEdit !== null ? itemEdit.firstName : '',
                    lastName: itemEdit !== null ? itemEdit.lastName : '',
                    nroId: itemEdit !== null ? itemEdit.nroId : '',
                    phone: itemEdit !== null ? itemEdit.phone : '',
                }}
                onSubmit={(values) => {
                    setItemEdit({
                        ...itemEdit,
                        firstName: values.firstName,
                        lastName: values.lastName,
                        nroId: values.nroId,
                        phoneNumber: values.phone,
                    })
                    setStepInv({
                        ...stepInv,
                        personalData: true
                    })
                }}
                validationSchema={object({
                    firstName: string()
                        .min(4, 'Debe tener al menos 4 caracteres')
                        .required(t('OUT.LOGIN.USERNAME_IS_REQUIRED')),
                    lastName: string()
                        .required(t('OUT.LOGIN.EMAIL_REQUIRED')),
                    nroId: number(),
                    phone: string()
                        .required(t('OUT.LOGIN.EMAIL_REQUIRED')),

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
                                        label={t('INVITATIONS_FORM.FIRSTNAME')}
                                        name={'firstName'}
                                        size="small"
                                        sx={{width: '100%', maxHeight: '60px'}}
                                    />
                                </Box>
                                <Box marginTop={2}>
                                    <Field
                                        component={TextField}
                                        type="text"
                                        label={t('INVITATIONS_FORM.LASTNAME')}
                                        name={'lastName'}
                                        size="small"
                                        sx={{width: '100%', maxHeight: '60px'}}
                                    />
                                </Box>
                                <Box marginTop={2}>
                                    <Field
                                        component={TextField}
                                        type={'number'}
                                        label={t('INVITATIONS_FORM.NROID')}
                                        name={'nroId'}
                                        size="small"
                                        sx={{width: '100%', maxHeight: '60px'}}
                                    />
                                </Box>
                                <Box marginTop={2}>
                                    <Field
                                        component={TextField}
                                        type={'text'}
                                        label={t('INVITATIONS_FORM.PHONE_NUMBER')}
                                        name={'phone'}
                                        size="small"
                                        mask="(0)999 999 99 99"
                                        sx={{width: '100%', maxHeight: '60px'}}
                                    />
                                </Box>
                                <Box marginTop={2} sx={{display: 'flex', justifyContent: 'space-between'}}>
                                    <FormGroup>
                                        <FormControlLabel
                                            sx={{marginLeft: '0'}}
                                            control={
                                                <Switch size={'small'} color={'primary'} defaultChecked/>
                                            }
                                            label={
                                                <Typography style={{fontSize: '.75rem',}}>
                                                    {t('INVITATIONS_FORM.FREQUENT_GUEST')}
                                                </Typography>
                                            }/>
                                    </FormGroup>
                                </Box>

                            </div>
                            <div className="footer_login ">
                                <FormControl size="small" fullWidth sx={{mt: 1}} variant="outlined">
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