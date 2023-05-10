import {useMemo} from 'react';
import {useTranslation} from "react-i18next";
import {useAppDispatch, useAppSelector} from '../../store';
import {starLogin} from '../../store/auth';
import {
    Box,
    Button,
    FormControl,
} from '@mui/material';
import {ErrorMessage, Field, Form, Formik} from 'formik';

import {object, string} from 'yup';
import {TextField} from 'formik-mui';
import logo from '../../assets/img/bifrost_delimited.png';


export const LoginComponent = () => {
    const dispatch = useAppDispatch();
    const {t} = useTranslation();
    const status = useAppSelector((state) => state.auth.status);
    const isCheckingAuth = useMemo(() => status === 'checking', [status]);

    return (
        <>
            <div className="header_login">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="title">
                    <h3>{t('OUT.LOGIN.WELCOME')}</h3>
                    <h1>Bifrost Security</h1>
                </div>
            </div>
            <Formik
                initialValues={{
                username: '',
                password: '',
            }}
                onSubmit={(values) => {
                    dispatch(starLogin(values))
                }}
                validationSchema={object({
                    username: string()
                        .min(4, 'Debe tener al menos 4 caracteres')
                        .required(t('OUT.LOGIN.USERNAME_OR_EMAIL_IS_REQUIRED')),
                    password: string()
                        .min(4, 'Debe tener al menos 4 caracteres')
                        .required(t('OUT.LOGIN.PASSWORD_REQUIRED')),
                })
            }>
                {
                    (formik) => (
                        <Form className={'form_login'} >
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
                                    <ErrorMessage name={'username'} />
                                </Box>
                                <Box marginTop={2}>
                                    <Field
                                        component={TextField}
                                        type="password"
                                        label={t('OUT.LOGIN.PASSWORD')}
                                        name={'password'}
                                        size="small"
                                        sx={{width: '100%', maxHeight: '60px'}}
                                    />
                                    <ErrorMessage name={'password'} />
                                </Box>

                            </div>

                            <div className="footer_login ">
                                <FormControl size="small" fullWidth sx={{mt: 1}} variant="outlined">
                                    <Button type="submit" variant="contained"
                                            disabled={!formik.isValid || isCheckingAuth}
                                    >{t('OUT.LOGIN.LOGIN')}</Button>
                                </FormControl>
                                <FormControl className={'forget'} size="small" fullWidth sx={{mt: 1}} variant="outlined">
                                    <a href="/auth/login">{t('OUT.LOGIN.FORGOT_PASSWORD')}</a>
                                </FormControl>
                            </div>
                        </Form>
                    )
                }

            </Formik>

        </>
    )
}