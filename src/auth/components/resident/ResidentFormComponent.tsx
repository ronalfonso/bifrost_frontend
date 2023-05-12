import {useContext} from 'react';
import {number, object, string} from 'yup';
import {Field, Form, Formik} from 'formik';
import {Box, Button, FormControl} from '@mui/material';
import {TextField} from 'formik-mui';
import {GeneralContext} from '../../../contexts/GeneralContext';
import {useTranslation} from 'react-i18next';

export const ResidentFormComponent = () => {
    // @ts-ignore
    const {setResidentRegisterSubmit} = useContext(GeneralContext);
    const {t} = useTranslation();


    return (
        <>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    mobilePhone: '',
                    homeId: 0
                }}
                onSubmit={(values) => {
                    // dispatch(starLogin(values))
                    console.log(values);
                    setResidentRegisterSubmit(true);
                }}
                validationSchema={object({
                    firstName: string()
                        .min(4, 'Debe tener al menos 4 caracteres')
                        .required(t('OUT.REGISTER.FIRSTNAME_REQUIRED')),
                    lastName: string()
                        .min(4, 'Debe tener al menos 4 caracteres')
                        .required(t('OUT.REGISTER.LASTNAME_REQUIRED')),
                    homeId: number()
                        .required(t('OUT.REGISTER.HOME_REQUIRED')),
                })
                }>
                {
                    (formik) => (
                        <Form className={'form_register'} >
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
                                        type={'text'}
                                        label={t('INVITATIONS_FORM.LASTNAME')}
                                        name={'lastName'}
                                        size="small"
                                        sx={{width: '100%', maxHeight: '60px'}}
                                    />
                                </Box>

                                <Box marginTop={2}>
                                    <Field
                                        component={TextField}
                                        type={'text'}
                                        label={t('DICTIONARY.MOBILE')}
                                        name={'mobilePhone'}
                                        size="small"
                                        sx={{width: '100%', maxHeight: '60px'}}
                                    />
                                </Box>

                            </div>
                            <div className="footer_login ">
                                <FormControl size="small" fullWidth sx={{mt: 1}} variant="outlined">
                                    <Button type="submit" variant="contained"
                                            disabled={!formik.isValid}
                                    >{t('OUT.REGISTER.FINISH')}</Button>
                                </FormControl>
                            </div>

                        </Form>
                    )
                }

            </Formik>
        </>
    )
}