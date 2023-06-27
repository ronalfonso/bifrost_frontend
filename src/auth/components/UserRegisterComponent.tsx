import {useContext} from 'react';
import {Field, Form, Formik} from 'formik';
import {object, ref, string} from 'yup';
import {Box, Button, FormControl} from '@mui/material';
import {TextField} from 'formik-mui';
import {useTranslation} from 'react-i18next';
import {useAppDispatch} from '../../store';
import {GeneralContext} from '../../contexts/general/GeneralContext';
import {startCreateUser} from '../../store/auth';
import {UserCreateResponse} from '../../store/auth/models/UserCreateResponse';
import {RegisterContext} from "../../contexts/register/RegisterContext";

export const UserRegisterComponent = () => {
    const {codeInvite, setIsLoading} = useContext<any>(GeneralContext);
    const {setUserRegisterSubmit, setUserIdRegister, typeRegister} = useContext<any>(RegisterContext);
    const dispatch = useAppDispatch();
    const {t} = useTranslation();

    const createUser = (data) => {
        data.code = codeInvite;
        data.type = typeRegister === 1 ? 'CONDO' : 'RESIDENT'
        delete data.passwordConfirm;
        setIsLoading(true);
        dispatch(startCreateUser(data)).then((resp: UserCreateResponse) => {
            setUserIdRegister(resp.id);
            setUserRegisterSubmit(true);
            setIsLoading(false);
        }, err => {
            console.error(err);
            setIsLoading(false);
        })
    }


    return (
        <>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    email: '',
                    passwordConfirm: '',
                }}
                onSubmit={(values) => {
                    createUser(values);
                }}
                validationSchema={object({
                    username: string()
                        .matches(/^\S*$/,'El usuario no debe tener espacios')
                        .min(4, 'Debe tener al menos 4 caracteres')
                        .required(t('OUT.LOGIN.USERNAME_IS_REQUIRED')),
                    email: string()
                        .email(t('OUT.LOGIN.NO_IS_EMAIL'))
                        .required(t('OUT.LOGIN.EMAIL_REQUIRED')),
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
                        <Form className={'form_register'}>
                            <div className="">
                                <Box marginTop={2}>
                                    <Field
                                        component={TextField}
                                        type="text"
                                        label={t('OUT.LOGIN.USERNAME')}
                                        name={'username'}
                                        size="small"
                                        sx={{width: '100%', maxHeight: '60px'}}
                                    />
                                </Box>
                                <Box marginTop={2}>
                                    <Field
                                        component={TextField}
                                        type="text"
                                        label={t('OUT.LOGIN.EMAIL')}
                                        name={'email'}
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