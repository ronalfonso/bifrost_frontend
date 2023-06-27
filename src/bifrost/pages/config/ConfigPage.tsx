import React, {SyntheticEvent, useContext, useEffect, useRef, useState} from "react";
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import {
    Avatar, Button,
    Card, CardActions,
    CardContent,
    CardHeader,
    ClickAwayListener, DialogActions, DialogContent,
    Divider,
    Grow,
    IconButton, MenuItem, MenuList,
    Paper,
    Popper,
    Tab,
    Tabs, TextField, Typography,
    useTheme
} from "@mui/material";
import {red} from "@mui/material/colors";
import Box from "@mui/material/Box";
import {TabPanelComponent} from "../../components/BifrostPage/TabPanelComponent";
import {useTranslation} from "react-i18next";
import {DetailsCondoFormComponent} from "../../components/ConfigPage/DetailsCondoFormComponent";
import {MoreVert} from '@mui/icons-material';
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import {useAppDispatch} from "../../../store";
import {startCreateInvitationCode} from "../../../store/condos";
import {GeneralContext} from "../../../contexts/general/GeneralContext";
import {startLogout} from "../../../store/auth";
import {startGetSurveillanceList} from "../../../store/surveillance";
import {CardWatchmanComponent} from "../../components/ConfigPage/CardWatchmanComponent";
import {useNavigate} from "react-router-dom";
import {menu} from "../../../routes/routes";

export const ConfigPage = () => {
    const {setIsLoading,} = useContext<any>(GeneralContext);
    const navigate = useNavigate();
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const [tabValue, setTabValue] = useState(0);
    const {t} = useTranslation();
    const [openToggle, setOpenToggle] = useState(false);
    const anchorRef = useRef<HTMLButtonElement>(null);
    const [openModal, setOpenModal] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [codeInvite, setCodeInvite] = useState('');
    const [watchmanList, setWatchmanList] = useState([]);

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleOpenModalInv = () => {
        setOpenModal(true)
    }

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const handleToggle = () => {
        setOpenToggle((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }
        setOpenToggle(false);
    };

    const handleLogout = () => {
        setOpenToggle(false);
        dispatch(startLogout()).then(() => {
            navigate(`../${menu.login.path}`)
        });
    }

    const handleListKeyDown = (event: any) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpenToggle(false);
        } else if (event.key === 'Escape') {
            setOpenToggle(false);
        }
    }

    const handleCreateInvitation = () => {
        setIsLoading(true)
        dispatch(startCreateInvitationCode(quantity)).then(resp => {
            if (resp.status === 202) {
                setCodeInvite(resp.data.code);
                setIsLoading(false)
            } else if (resp.status === 400) {
                console.log(resp);
            }

        })
    }

    const _getSurveillanceList = () => {
        setIsLoading(true)
        dispatch(startGetSurveillanceList()).then(resp => {
            setIsLoading(false)
            if (!resp.error) {
                setWatchmanList([...resp])
            }
        })
    }

    const prevOpen = useRef(openToggle);

    useEffect(() => {
        if (prevOpen.current === true && openToggle === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = openToggle;
    }, [openToggle]);

    useEffect(() => {
    }, [codeInvite]);

    useEffect(() => {
        _getSurveillanceList();
    }, []);


    return (
        <>
            <PageWrapper title={'Config'}>
                <div className={'container_profile'}>
                    {/*<Box sx={{width: '100%', height: '80vh'}}>*/}
                    <Card sx={{width: '100%'}}>
                        <CardHeader
                            sx={{pb: 0}}
                            avatar={
                                <Avatar sx={{bgcolor: red[500], width: 56, height: 56}}>
                                    R
                                </Avatar>
                            }
                            action={
                                <>
                                    <IconButton aria-label="settings"
                                                ref={anchorRef}
                                                aria-controls={openToggle ? 'composition-menu' : undefined}
                                                aria-expanded={openToggle ? 'true' : undefined}
                                                aria-haspopup="true"
                                                onClick={handleToggle}
                                    >
                                        <MoreVert/>
                                    </IconButton>
                                    <Popper
                                        open={openToggle}
                                        anchorEl={anchorRef.current}
                                        role={undefined}
                                        placement="bottom-start"
                                        transition
                                        disablePortal
                                        sx={{zIndex: 1}}
                                    >
                                        {({TransitionProps}) => (
                                            <Grow
                                                {...TransitionProps}
                                                style={{
                                                    transformOrigin: 'top right',
                                                }}
                                            >
                                                <Paper>
                                                    <ClickAwayListener onClickAway={handleClose}>
                                                        <MenuList
                                                            autoFocusItem={openToggle}
                                                            id="composition-menu"
                                                            aria-labelledby="composition-button"
                                                            onKeyDown={handleListKeyDown}
                                                        >
                                                            <MenuItem onClick={handleClose}>Edit</MenuItem>
                                                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                                        </MenuList>
                                                    </ClickAwayListener>
                                                </Paper>
                                            </Grow>
                                        )}
                                    </Popper>
                                </>
                            }
                            title={"Arenas del sol"}
                            subheader={'Circunvalacion 2'}
                        />

                        <CardContent sx={{height: '50vh', overflow: 'auto'}}>
                            <Divider/>
                            <Box sx={{maxWidth: {xs: 320, sm: 480}, bgcolor: 'background.paper', p: 0}}>
                                <Tabs value={tabValue}
                                      variant={'scrollable'}
                                      scrollButtons
                                      allowScrollButtonsMobile
                                      onChange={handleChange}>
                                    <Tab label={t('DICTIONARY.DETAILS')}/>
                                    <Tab label={t('DICTIONARY.WATCHMEN')}/>
                                    <Tab label={t('DICTIONARY.HOMES')}/>
                                    <Tab label={t('DICTIONARY.ACCOUNT')}/>
                                </Tabs>
                                <TabPanelComponent value={tabValue} index={0} dir={theme.direction} height={'55vh'}>
                                    <div className={'container_form animate__animated animate__fadeIn animate__faster'}>
                                        <DetailsCondoFormComponent/>
                                    </div>
                                </TabPanelComponent>
                                <TabPanelComponent value={tabValue} index={1} dir={theme.direction} height={'55vh'}>
                                    <div className={'animate__animated animate__fadeIn animate__faster'}>
                                        <Box sx={{maxHeight: '42vh', pt: 1}}>
                                            {
                                                watchmanList.length > 0 ?
                                                    watchmanList.map(watchman => {
                                                        return <CardWatchmanComponent key={watchman.nickname}
                                                                                      watchman={watchman}/>
                                                    })
                                                    :
                                                    <Typography>No existen vigilantes</Typography>

                                            }
                                        </Box>
                                        <Box sx={{position: 'fixed', bottom: '50px'}}>
                                            {/*agregar*/}
                                        </Box>
                                    </div>
                                </TabPanelComponent>
                                <TabPanelComponent value={tabValue} index={2} dir={theme.direction} height={'55vh'}>
                                    <div className={'animate__animated animate__fadeIn animate__faster'}>
                                        homes
                                    </div>
                                </TabPanelComponent>
                                <TabPanelComponent value={tabValue} index={3} dir={theme.direction} height={'55vh'}>
                                    <div className={'animate__animated animate__fadeIn animate__faster'}>
                                        account
                                    </div>
                                </TabPanelComponent>

                            </Box>
                        </CardContent>
                        <CardActions disableSpacing sx={{display: 'flex', justifyContent: 'flex-end'}} >
                            <Button onClick={handleOpenModalInv}>Generate Code</Button>
                        </CardActions>
                    </Card>
                    {/*</Box>*/}
                </div>
                <Dialog
                    open={openModal}
                    onClose={handleCloseModal}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {t('INVITATIONS_FORM.TITLE_DIALOG_CREATE_CODE')}
                    </DialogTitle>
                    <DialogContent>
                        <Box marginTop={2}>
                            <TextField
                                inputProps={{maxLength: 4}}
                                size="small"
                                fullWidth
                                id="outlined-error"
                                value={quantity}
                                onChange={(e) => {
                                    setQuantity(Number(e.target.value))
                                }}
                                label={t('OUT.REGISTER.CODE')}
                            />
                        </Box>

                        {
                            codeInvite.length > 0 &&
                            <Box marginTop={2}>
                                <TextField
                                    fullWidth
                                    inputProps={{maxLength: 24}}
                                    size="small"
                                    id="outlined-error"
                                    disabled={true}
                                    value={codeInvite}
                                    label={t('OUT.REGISTER.CODE')}
                                />
                            </Box>
                        }

                    </DialogContent>
                    <DialogActions>
                        <Button color={'error'} onClick={handleCloseModal}>{t('GENERAL.CANCEL')}</Button>
                        {
                            codeInvite.length === 0 &&
                            <Button onClick={handleCreateInvitation} autoFocus>
                                {t('GENERAL.CONFIRM')}
                            </Button>
                        }
                        {
                            codeInvite.length > 0 &&
                            <Button onClick={() => {
                                navigator.clipboard.writeText(codeInvite)
                            }} autoFocus>
                                Copy
                            </Button>
                        }

                    </DialogActions>
                </Dialog>
            </PageWrapper>

        </>
    )
}

export default ConfigPage;