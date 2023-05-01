import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useAppDispatch, useAppSelector} from '../../../../store';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader, Dialog, DialogActions, DialogContent, DialogTitle,
    FormControl, FormControlLabel,
    FormGroup,
    MenuItem, Switch, Typography
} from '@mui/material';
import {Select, TextField} from 'formik-mui';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import styles from '../../../../styles/style.module.scss';
import {Condo} from '../../../../core/models/condos/Condo';
import moment, {Moment} from 'moment';
import {Home} from '../../../../core/models/homes/Home';
import {startCreateInvitation} from '../../../../store/invitations';

export const InvitationsPage = () => {
    const dispatch = useAppDispatch();
    const [openDialog, setOpenDialog] = useState(false);
    const {t} = useTranslation();
    const {condos, homes} = useAppSelector((state) => state.resident);
    const [dateFrom, setDateFrom] = useState<Moment | null>(moment());
    const [dateTo, setDateTo] = useState<Moment | null>(moment().add(4, 'hours'));
    const [data, setData] = useState({
        firsName: '',
        lastName: '',
        houseNumber: null,
        phoneNumber: '',
        vehicleModel: '',
        vehicleId: '',
        vehicleColor: '',
        toDate: null,
        fromDate: null,
        qrCode: '',
        date: null,
        residentsId: '',
        homeId: '',
        condo: '',
    });

    const handleClickOpen = () => {
        setOpenDialog(true)
    }

    const handleClickClose = () => {
        setOpenDialog(false)
    }

    const handleSave = () => {
        create();
    }

    const create = () => {
        delete data.condo;
        dispatch(startCreateInvitation(data)).then((resp) => {
            setOpenDialog(false)
            if (resp.status === 201) {
                setOpenDialog(false)
            }
        })
    }


    return (
        <PageWrapper title={'Invitations'}>
            <Card variant="outlined"
                  className="invitations"
            >
                <CardHeader
                    sx={{p: 0, borderBottom: `1px solid ${styles.borderColor}`}}
                    titleTypographyProps={{fontSize: '1.2rem'}}
                    title={t('GENERAL.GUEST')}
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
                            toDate: null,
                            fromDate: null,
                            qrCode: '',
                            date: null,
                            residentsId: '',
                            homeId: null,
                            condo: '',
                        }}
                        onSubmit={(values) => {
                            const condo = condos.find((condo: Condo) => condo.id === values.condo);
                            const home = homes.find((home: Home) => home.condo.id === values.condo);

                            setData({
                                ...values,
                                fromDate: dateFrom.format(),
                                toDate: dateTo.format(),
                                residentsId: condo.residentId,
                                homeId: home.id.toString(),
                                houseNumber: home.numberHouse,
                                date: dateFrom.valueOf(),
                            })

                        }}
                    >
                        {
                            (formik) => (
                                <Form>

                                    <Box marginTop={2}>
                                        <FormControl sx={{width: '100%'}}>
                                            <Field
                                                component={Select}
                                                size={'small'}
                                                type="text"
                                                label={t('DICTIONARY.CONDO')}
                                                name={'condo'}
                                            >
                                                {
                                                    condos.map((condo: Condo) => (
                                                        <MenuItem key={condo.idCondo}
                                                                  value={condo.id}>{condo.name.toUpperCase()}</MenuItem>
                                                    ))
                                                }
                                            </Field>
                                        </FormControl>
                                    </Box>
                                    <Box marginTop={2}>
                                        <Field
                                            component={TextField}
                                            type="text"
                                            label={t('INVITATIONS_FORM.FIRSTNAME')}
                                            name={'firsName'}
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

                                    <Box marginTop={2} sx={{display: 'flex', justifyContent: 'space-between'}}>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Switch size={'small'} color={'primary'} defaultChecked/>
                                                }
                                                label={
                                                    <Typography style={{fontSize: '.75rem'}}>
                                                        {t('INVITATIONS_FORM.FREQUENT_GUEST')}
                                                    </Typography>
                                                }/>
                                        </FormGroup>
                                        <Button type={'submit'}
                                                variant={'contained'}
                                                disabled={!formik.isValid || !formik.dirty}
                                                size="small"
                                                onClick={handleClickOpen}
                                        >{t('INVITATIONS_FORM.INVITE')}</Button>
                                    </Box>
                                </Form>
                            )
                        }

                    </Formik>
                </CardContent>
                <CardActions sx={{display: 'flex', justifyContent: 'flex-end'}}>

                </CardActions>
            </Card>
            <Dialog
                open={openDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {t('INVITATIONS_FORM.CREATE_INVITATION')}
                </DialogTitle>
                <DialogContent>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                            <Box marginTop={2}>
                                <DateTimePicker
                                    label={t('INVITATIONS_FORM.FROM_DATE')}
                                    value={dateFrom}
                                    onChange={(newValue) => setDateFrom(newValue)}
                                />
                            </Box>
                            <Box marginTop={2}>
                                <DateTimePicker
                                    label={t('INVITATIONS_FORM.TO_DATE')}
                                    value={dateTo}
                                    onChange={(newValue) => setDateTo(newValue)}
                                />
                            </Box>
                        </DemoContainer>
                    </LocalizationProvider>
                </DialogContent>
                <DialogActions>
                    <Button color={'secondary'} onClick={handleClickClose}>{t('GENERAL.CANCEL')}</Button>
                    <Button onClick={handleSave} autoFocus>
                        {t('GENERAL.CONFIRM')}
                    </Button>
                </DialogActions>
            </Dialog>
        </PageWrapper>

    )
}

export default InvitationsPage;