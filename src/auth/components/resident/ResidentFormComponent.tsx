import {useContext} from 'react';
import {number, object, string} from 'yup';
import {Field, Form, Formik} from 'formik';
import {Box, Button, FormControl, MenuItem} from '@mui/material';
import {Select, TextField} from 'formik-mui';
import {GeneralContext} from '../../../contexts/GeneralContext';
import {useTranslation} from 'react-i18next';
import {Home} from '../../../core/models/homes/Home';
import {useAppDispatch} from '../../../store';
import {startCreateResident} from '../../../store/residents';

export const ResidentFormComponent = () => {
    const {setResidentRegisterSubmit, codeInvite, setIsLoading, homeListRegister, userIdRegister} = useContext<any>(GeneralContext);
    const dispatch = useAppDispatch();
    const {t} = useTranslation();

    const createResident = (data) => {
        setIsLoading(true);
        data.code = codeInvite;
        data.userId = userIdRegister;
        dispatch(startCreateResident(data)).then(() => {
            setResidentRegisterSubmit(true);
            setIsLoading(false);
        })
    }

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
                    createResident(values);
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

                                <Box marginTop={2}>
                                    <FormControl sx={{width: '100%'}}>
                                        <Field
                                            component={Select}
                                            size={'small'}
                                            type="text"
                                            label={t('DICTIONARY.HOUSE')}
                                            name={'homeId'}
                                        >
                                            {
                                                homeListRegister.map((home: Home) => (
                                                    <MenuItem key={home.numberHouse}
                                                              value={home.id}>{home.numberHouse} {home.description}</MenuItem>
                                                ))
                                            }
                                        </Field>
                                    </FormControl>
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