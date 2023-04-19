import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useAppDispatch, useAppSelector} from '../../../store';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    FormControl, FormControlLabel,
    FormGroup,
    MenuItem, Switch, Typography
} from '@mui/material';
import {Select, TextField} from 'formik-mui';
import {LocalizationProvider, DateTimePicker} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import styles from '../../../styles/style.module.scss';
import {Condo} from '../../../core/models/condos/Condo';
import moment from 'moment';
import dayjs, {Dayjs} from 'dayjs';

export const InvitationsPage = () => {
    const dispatch = useAppDispatch();
    const [openDialog, setOpenDialog] = useState(false);
    const {t} = useTranslation();
    const {condos} = useAppSelector((state) => state.resident);
    const [dateFrom, setDateFrom] = useState<Dayjs | null>(dayjs('2022-04-17T15:30'));
    const [dateTo, setDateTo] = useState<Dayjs | null>(dayjs('2022-04-17T15:30'));
    const [data, setData] = useState(null);

    const handleClickOpen = () => {
        setOpenDialog(true)
    }

    const handleClickClose = () => {
        setOpenDialog(false)
    }

    const handleSave = () => {
        console.log('save');
        console.log(data);
        console.log(dateFrom);
        console.log(dateTo);
    }


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
                            toDate: null,
                            fromDate: null,
                            qrCode: '',
                            date: null,
                            residents: '',
                            home: null,
                            condo: '',
                        }}
                        onSubmit={(values) => {
                            console.log(values);
                            setData({...values});
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
                                    <Dialog
                                        open={openDialog}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">
                                            {t('INVITATIONS_FORM.INVITATION_CONFIRMATION')}
                                        </DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                                                </LocalizationProvider>
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button color={'secondary'} onClick={handleClickClose}>{t('GENERAL.CANCEL')}</Button>
                                            <Button onClick={handleSave} autoFocus>
                                                {t('GENERAL.CONFIRM')}
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
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