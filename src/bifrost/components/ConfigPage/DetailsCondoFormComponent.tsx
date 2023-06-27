
import {useTranslation} from "react-i18next";
import {Field, Form, Formik} from "formik";
import {number, object, string} from "yup";
import {Box, FormControl, MenuItem} from "@mui/material";
import {Select, TextField} from "formik-mui";

export const DetailsCondoFormComponent = () => {
    const {t} = useTranslation();

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    direction: '',
                    idCondo: '',
                    phoneNumber: '',
                    typeId: 0,
                }}
                onSubmit={(values) => {
                    console.log(values);
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
                                    <FormControl sx={{width: '100%'}}>
                                        <Field
                                            component={Select}
                                            size={'small'}
                                            type="text"
                                            label={t('OUT.REGISTER.CONDO_TYPES')}
                                            name={'typeId'}
                                        >
                                            <MenuItem value={0}>{t('DICTIONARY.HOUSES')}</MenuItem>
                                            <MenuItem value={1}>{t('DICTIONARY.APARTMENT')}</MenuItem>
                                            <MenuItem value={2}>{t('DICTIONARY.TOWNHOUSE')}</MenuItem>
                                        </Field>
                                    </FormControl>
                                </Box>

                            </div>


                        </Form>
                    )
                }

            </Formik>
        </>
    )
}