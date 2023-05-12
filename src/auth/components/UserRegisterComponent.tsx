import { useContext } from 'react';
import {Field, Form, Formik} from 'formik';
import {object, ref, string} from 'yup';
import {Box, Button, FormControl} from '@mui/material';
import {TextField} from 'formik-mui';
import {useTranslation} from 'react-i18next';
import {useAppDispatch} from '../../store';
import {GeneralContext} from '../../contexts/GeneralContext';

export const UserRegisterComponent = () => {
    // @ts-ignore
    const {setUserRegisterSubmit} = useContext(GeneralContext);
    const dispatch = useAppDispatch();
    const {t} = useTranslation();


    return (
        <>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    passwordConfirm: '',
                }}
                onSubmit={(values) => {
                    // dispatch(starLogin(values))
                    console.log(values);
                    setUserRegisterSubmit(true);
                }}
                validationSchema={object({
                    username: string()
                        .min(4, 'Debe tener al menos 4 caracteres')
                        .required(t('OUT.LOGIN.USERNAME_OR_EMAIL_IS_REQUIRED')),
                    password: string()
                        .min(4, 'Debe tener al menos 4 caracteres')
                        .required(t('OUT.LOGIN.PASSWORD_REQUIRED')),
                    passwordConfirm: string()
                        .min(4, 'Debe tener al menos 4 caracteres')
                        .required(t('OUT.LOGIN.PASSWORD_REQUIRED'))
                        .oneOf(
                            [ref('password')],
                            'Las contraseñas deben ser iguales'
                        ),
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
                                        label={t('OUT.LOGIN.USERNAME_EMAIL')}
                                        name={'username'}
                                        size="small"
                                        sx={{width: '100%', maxHeight: '60px'}}
                                    />
                                </Box>
                                <Box marginTop={2}>
                                    <Field
                                        component={TextField}
                                        type={'password'}
                                        label={t('OUT.LOGIN.PASSWORD')}
                                        name={'password'}
                                        size="small"
                                        sx={{width: '100%', maxHeight: '60px'}}
                                    />
                                </Box>

                                <Box marginTop={2}>
                                    <Field
                                        component={TextField}
                                        type={'password'}
                                        label={t('OUT.LOGIN.REPEAT_PASSWORD')}
                                        name={'passwordConfirm'}
                                        size="small"
                                        sx={{width: '100%', maxHeight: '60px'}}
                                    />
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
};