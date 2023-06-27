import {useContext} from 'react';
import {number, object, string} from 'yup';
import {Field, Form, Formik} from 'formik';
import {Box, Button, FormControl, MenuItem} from '@mui/material';
import {Select, TextField} from 'formik-mui';
import {GeneralContext} from '../../../contexts/general/GeneralContext';
import {useTranslation} from 'react-i18next';
import {useAppDispatch} from '../../../store';
import {startCreateCondo} from '../../../store/condos';
import {startCreateHomesOfCondo} from '../../../store/homes';
import {CreateHomesCondo} from '../../../store/homes/models/homes-condo';
import {RegisterContext} from "../../../contexts/register/RegisterContext";

export const CondoFormComponent = () => {
    const {setIsLoading} = useContext<any>(GeneralContext);
    const {setCondoRegisterSubmit, userIdRegister} = useContext<any>(RegisterContext);
    const dispatch = useAppDispatch();
    const {t} = useTranslation();

    const createCondo = (dataForm) => {
        setIsLoading(true);
        const quantity = dataForm.quantity;
        dataForm.userId = userIdRegister;
        dataForm.typeId = Number(dataForm.typeId);
        dispatch(startCreateCondo(dataForm)).then( resp => {
            createHomesCondo(resp, quantity, dataForm);
        })
    }

    const createHomesCondo = (condo, quantity, dataForm) => {
        const payloadHomesOfCondo: CreateHomesCondo = {
            condoId: condo.id,
            quantity,
            typeId: dataForm.typeId
        }
        dispatch(startCreateHomesOfCondo(payloadHomesOfCondo)).then(() => {
            setCondoRegisterSubmit(true);
            setIsLoading(false);
        })
    }


    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    direction: '',
                    idCondo: '',
                    phoneNumber: '',
                    quantity: 0,
                    typeId: 0,
                }}
                onSubmit={(values) => {
                    createCondo(values);
                }}
                validationSchema={object({
                    name: string()
                        .min(4, 'Debe tener al menos 4 caracteres')
                        .required(t('OUT.REGISTER.NAME_REQUIRED')),
                    idCondo: string()
                        .min(4, 'Debe tener al menos 4 caracteres')
                        .required(t('OUT.REGISTER.CONDO_ID_REQUIRED')),
                    phoneNumber: string()
                        .min(4, 'Debe tener al menos 4 caracteres')
                        .required(t('OUT.REGISTER.CONDO_PHONE_REQUIRED')),
                    direction: string()
                        .min(10, 'Debe tener al menos 10 caracteres')
                        .required(t('OUT.REGISTER.CONDO_ADDRESS_REQUIRED')),
                    quantity: number()
                        .required(t('OUT.REGISTER.CONDO_TYPES_REQUIRED')),
                    typeId: number()
                        .required(t('OUT.REGISTER.CONDO_TYPES_REQUIRED')),
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
                                        label={t('OUT.REGISTER.CONDO_NAME')}
                                        name={'name'}
                                        size="small"
                                        sx={{width: '100%', maxHeight: '60px'}}
                                    />
                                </Box>
                                <Box marginTop={2}>
                                    <Field
                                        component={TextField}
                                        type={'text'}
                                        label={t('OUT.REGISTER.CONDO_ID')}
                                        name={'idCondo'}
                                        size="small"
                                        sx={{width: '100%', maxHeight: '60px'}}
                                    />
                                </Box>

                                <Box marginTop={2}>
                                    <Field
                                        component={TextField}
                                        type={'text'}
                                        label={t('OUT.REGISTER.CONDO_PHONE')}
                                        name={'phoneNumber'}
                                        size="small"
                                        sx={{width: '100%', maxHeight: '60px'}}
                                    />
                                </Box>

                                <Box marginTop={2}>
                                    <Field
                                        component={TextField}
                                        type={'text'}
                                        label={t('OUT.REGISTER.CONDO_ADDRESS')}
                                        name={'direction'}
                                        size="small"
                                        sx={{width: '100%', maxHeight: '60px'}}
                                    />
                                </Box>

                                <Box marginTop={2}>
                                    <Field
                                        component={TextField}
                                        type={'number'}
                                        label={t('OUT.REGISTER.QUANTITY_HOMES')}
                                        name={'quantity'}
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
                                            label={t('OUT.REGISTER.CONDO_TYPES')}
                                            name={'typeId'}
                                        >
                                            <MenuItem value={1}>{t('DICTIONARY.HOUSES')}</MenuItem>
                                            <MenuItem value={2}>{t('DICTIONARY.APARTMENT')}</MenuItem>
                                            <MenuItem value={3}>{t('DICTIONARY.TOWNHOUSE')}</MenuItem>
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