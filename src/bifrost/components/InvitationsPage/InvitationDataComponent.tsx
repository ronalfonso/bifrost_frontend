import {useContext, useState} from "react";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    MenuItem,
    Typography
} from "@mui/material";
import TextField from '@mui/material/TextField';
import {GeneralContext} from "../../../contexts/general/GeneralContext";
import {useTranslation} from "react-i18next";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {DateTimePicker} from "@mui/x-date-pickers/DateTimePicker";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import moment, {Moment} from "moment/moment";
import {useAppDispatch, useAppSelector} from "../../../store";
import {capitalizeLabel} from "../../../core/utils/handle-lables";
import {Home} from "../../../core/models/homes/Home";
import {startCreateInvitation} from "../../../store/invitations";
import {Invitation} from "../../../core/models/invitations/Invitation";
import {useNavigate} from "react-router-dom";

export const InvitationDataComponent = () => {
    const {itemEdit, setItemEdit, setPrevStep, setStepInv, setInvitationSelected, setIsOpenInvitation} = useContext<any>(GeneralContext)
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [dateFrom, setDateFrom] = useState<Moment | null>(moment());
    const [dateTo, setDateTo] = useState<Moment | null>(moment().add(4, 'hours'));
    const [observation, setObservation] = useState('');
    const {condos, homes, infoResident} = useAppSelector((state) => state.resident);
    const [home, setHome] = useState(null);
    const [condo, setCondo] = useState('');
    const [openDialog, setOpenDialog] = useState(false);

    const handleClickClose = () => {
        setOpenDialog(false)
    }

    const handleSave = () => {
        create();
    }

    const create = () => {
        dispatch(startCreateInvitation(itemEdit)).then((resp) => {
            setOpenDialog(false)
            if (resp.status === 201) {
                const invitation = new Invitation();
                for (let invitationKey in invitation) {
                    invitation[invitationKey] = resp.data[invitationKey]
                }
                setInvitationSelected(invitation)
                navigate('../home');
                setStepInv({
                    personalData: false,
                    vehicleData: false,
                    invData: false
                })
                setItemEdit(null);
                setTimeout(() => {
                    setIsOpenInvitation(true);
                }, 500)
                setOpenDialog(false)
            }
        })
    }

    const handleCreateInv = () => {
        const homeSelected = homes.filter(ele => ele.id === home)[0];
        setItemEdit({
            ...itemEdit,
            fromDate: dateFrom.format(),
            toDate: dateTo.format(),
            homeId: homeSelected.id,
            houseNumber: homeSelected.numberHouse,
            date: dateFrom.valueOf(),
            observation: observation,
            residentId: infoResident.id
        })
        setCondo(condos.filter(condo => condo.id === homeSelected.condo.id)[0].name)
        setOpenDialog(true)
    }

    return (
        <>
            <div className="">
                <Box marginTop={2}>
                    <FormControl fullWidth variant="standard">
                        <TextField
                            id="outlined-select-currency"
                            select
                            label={t('DICTIONARY.HOUSE')}
                            size={'small'}
                            helperText={t('INVITATIONS_FORM.PLEASE_SELECT_HOME')}
                            value={home}
                            onChange={(e) => setHome(e.target.value)}
                        >
                            {
                                homes.map((home: Home) => (
                                    <MenuItem key={home.id}
                                              value={home.id}>{home.numberHouse} {home.description} - {capitalizeLabel(home.condo.name)}</MenuItem>
                                ))
                            }
                        </TextField>
                    </FormControl>
                </Box>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>


                        <Box marginTop={2}>
                            <FormControl fullWidth variant="standard">
                                <DateTimePicker
                                    label={t('INVITATIONS_FORM.FROM_DATE')}
                                    value={dateFrom}
                                    onChange={(newValue) => setDateFrom(newValue)}
                                />
                            </FormControl>
                        </Box>
                        <Box marginTop={2}>
                            <FormControl fullWidth variant="standard">
                                <DateTimePicker
                                    label={t('INVITATIONS_FORM.TO_DATE')}
                                    value={dateTo}
                                    onChange={(newValue) => setDateTo(newValue)}
                                />
                            </FormControl>
                        </Box>


                    </DemoContainer>
                </LocalizationProvider>
                <Box marginTop={2}>
                    <FormControl fullWidth variant="standard">
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Observations"
                            multiline
                            value={observation}
                            onChange={(e) => setObservation(e.target.value)}
                            maxRows={8}
                        />
                    </FormControl>
                </Box>
            </div>
            <div className="footer_stepper ">
                <FormControl size="small" variant="outlined">
                    <Button variant="outlined" onClick={() => setPrevStep(true)}>
                        {t('OUT.REGISTER.BACK')}
                    </Button>
                </FormControl>
                <FormControl size="small" variant="outlined">
                    <Button variant="contained" onClick={handleCreateInv}>
                        {t('OUT.REGISTER.FINISH')}
                    </Button>
                </FormControl>
            </div>

            <Dialog
                open={openDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {t('INVITATIONS_FORM.CREATE_INVITATION')}
                </DialogTitle>
                <DialogContent>

                    <Typography sx={{fontSize: 13}}>
                        Esta seguro que desea crear una invitation para:
                    </Typography>
                    <Typography sx={{fontSize: 14, fontWeight: 'bold', letterSpacing: 1}}>
                        {capitalizeLabel(itemEdit.firstName)} {capitalizeLabel(itemEdit.lastName)}
                    </Typography>
                    <Typography sx={{fontSize: 13}}>
                        Para la casa:
                    </Typography>
                    <Typography sx={{fontSize: 14, fontWeight: 'bold', letterSpacing: 1}}>
                        {itemEdit.houseNumber} del condominio {capitalizeLabel(condo)}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button color={'secondary'} onClick={handleClickClose}>{t('GENERAL.CANCEL')}</Button>
                    <Button onClick={handleSave} autoFocus>
                        {t('GENERAL.CONFIRM')}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}