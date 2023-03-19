import {Box, Button, Card, CardActions, CardContent, CardHeader, Grid} from '@mui/material';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import styles from '../../../styles/style.module.scss';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {TextField} from 'formik-mui';
import {useAppDispatch} from '../../../store';
import {useTranslation} from 'react-i18next';
import {DateTimePicker} from '@mui/lab';
import {MobileDateTimePicker} from '@mui/x-date-pickers/MobileDateTimePicker';
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import moment from 'moment';

export const InvitationsPage = () => {
    const dispatch = useAppDispatch();
    const {t} = useTranslation();
    const now = moment();

    return (
        <PageWrapper title={'Invitations'}>
            <Card variant="outlined"
                  className="invitations"
            >
                <CardHeader
                    sx={{p: 0, borderBottom: `1px solid ${styles.borderColor}`}}
                    titleTypographyProps={{fontSize: '1.2rem'}}
                    title={'Crear invitación'}
                >

                </CardHeader>
                <CardContent className={'invitations_cardContainer'} sx={{pt: 1, pl: 0, pr: 0}}>

                    <Formik
                        initialValues={{
                            firsName: '',
                            lastName: '',
                            houseNumber: null,
                            phoneNumber: '',
                            vehicleModel: '',
                            vehicleId: '',
                            vehicleColor: '',
                            toDate: now,
                            fromDate: now.add(1, 'hours'),
                            qrCode: '',
                            date: null,
                            residentsId: '',
                            homeId: null
                        }}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {
                            (formik) => (
                                <Form>
                                    <Box marginTop={2} sx={{display: 'flex', justifyContent: 'space-between'}}>
                                        <LocalizationProvider dateAdapter={AdapterMoment}>
                                            <Grid container columns={{sm: 12, xs: 6}} gap={2}>
                                                <Grid item xs={6} sm={4} md={4}>
                                                    <MobileDateTimePicker
                                                        sx={{width: '100%'}}
                                                        value={formik.values.toDate}
                                                        label={t('INVITATIONS_FORM.TO_DATE')}
                                                        defaultValue={moment()}/>
                                                </Grid>
                                                <Grid item xs={6} sm={4} md={4}>
                                                    <MobileDateTimePicker
                                                        sx={{width: '100%'}}
                                                        value={formik.values.fromDate}
                                                        label={t('INVITATIONS_FORM.FROM_DATE')}
                                                        defaultValue={moment()}/>
                                                </Grid>
                                            </Grid>
                                        </LocalizationProvider>
                                    </Box>
                                    <Box marginTop={2}>
                                        <Field
                                            component={TextField}
                                            type="text"
                                            label={t('INVITATIONS_FORM.FIRSTNAME')}
                                            name={'firstName'}
                                            size="small"
                                            sx={{width: '100%', maxHeight: '60px'}}
                                        />
                                        <ErrorMessage name={'firstName'}/>
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
                                        <ErrorMessage name={'lastName'}/>
                                    </Box>
                                    <Box marginTop={2}>
                                        <Field
                                            component={TextField}
                                            type="text"
                                            label={t('INVITATIONS_FORM.PHONE_NUMBER')}
                                            name={'phoneNumber'}
                                            size="small"
                                            sx={{width: '100%', maxHeight: '60px'}}
                                        />
                                        <ErrorMessage name={'phoneNumber'}/>
                                    </Box>
                                    <Box marginTop={2}>
                                        <Field
                                            component={TextField}
                                            type="text"
                                            label={t('INVITATIONS_FORM.VEHICLE_MODEL')}
                                            name={'vehicleModel'}
                                            size="small"
                                            sx={{width: '100%', maxHeight: '60px'}}
                                        />
                                        <ErrorMessage name={'vehicleModel'}/>
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
                                        <ErrorMessage name={'vehicleId'}/>
                                    </Box>
                                    <Box marginTop={2}>
                                        <Field
                                            component={TextField}
                                            type="text"
                                            label={t('INVITATIONS_FORM.VEHICLE_COLOR')}
                                            name={'vehicleColor'}
                                            size="small"
                                            sx={{width: '100%', maxHeight: '60px'}}
                                        />
                                        <ErrorMessage name={'vehicleColor'}/>
                                    </Box>
                                    <Field
                                        component={DateTimePicker}
                                        name="dateTime"
                                        label="Date Time"
                                    />
                                    <Box marginTop={2}>
                                        <Field
                                            component={DateTimePicker}
                                            type="dateTime"
                                            label={t('INVITATIONS_FORM.TO_DATE')}
                                            name={'toDate'}
                                            size="small"
                                            sx={{width: '100%', maxHeight: '60px'}}
                                        />
                                        <ErrorMessage name={'toDate'}/>
                                    </Box>
                                    <Button type={'submit'} variant={'contained'} size="small">Invitar</Button>
                                </Form>
                            )
                        }

                    </Formik>
                </CardContent>
                <CardActions sx={{display: 'flex', justifyContent: 'flex-end'}}>

                </CardActions>
            </Card>
        </PageWrapper>
    )
}

export default InvitationsPage;