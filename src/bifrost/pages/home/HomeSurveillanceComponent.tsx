import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CircularProgress,
    TextField,
    Typography
} from "@mui/material";
import React, {ChangeEvent, useContext, useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import QrReader from 'react-qr-reader'
import moment from "moment";
import {useAppDispatch} from "../../../store";
import {startConfirmInvitation, startValidateInvitation} from "../../../store/invitations";
import {HighlightOff, TaskAlt} from "@mui/icons-material";
import styles from "../../../styles/style.module.scss";
import stopScurity from '../../../assets/img/403-forbidden-1.jpg'
import approved from '../../../assets/img/confirm.jpg'
import Box from "@mui/material/Box";
import {GeneralContext} from "../../../contexts/general/GeneralContext";
import {TypeError} from "../../../core/models/general/Toast";

export const HomeSurveillanceComponent = () => {
    const {setToast, toast} = useContext<any>(GeneralContext);
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const [startScan, setStartScan] = useState(false);
    const [loadingScan, setLoadingScan] = useState(false);
    const [infoQr, setInfoQr] = useState("");
    const ref = useRef();
    const [date] = useState(moment().format('DD/MM/YYYY'));
    const [colorResult, setColorResult] = useState(styles.colorPrimary);
    const [observation, setObservation] = useState('');
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [data, setData] = useState({
        houseNumber: null,
        id: null,
        isActive: null,
        toDate: null,
        vehicleColor: null,
        vehicleId: null,
        vehicleModel: null
    });

    const time = () => {
        const now = moment();
        const hour = now.hours();
        const min = now.minutes();
        const seg = now.seconds();
        return `${hour}:${min}:${seg}`
    }

    const handleScan = async (scanData) => {
        setLoadingScan(true);
        if (scanData && scanData !== "") {
            const qrInfo = JSON.parse(scanData);
            setInfoQr(qrInfo);
            setStartScan(false);
            setLoadingScan(false);
            _validateInvitation(qrInfo.id);
        }
    };

    const _validateInvitation = (invitationId: number) => {
        dispatch(startValidateInvitation(invitationId)).then(resp => {
            if (resp.status === 200) {
                const invitation = resp.data;
                const now = moment();
                if (now.isAfter(resp.data.toDate)) {
                    console.error('Invitacion vencida')
                }
                setLoadingScan(false);
                setData({
                    houseNumber: invitation.houseNumber,
                    id: invitation.id,
                    isActive: invitation.isActive,
                    toDate: invitation.toDate,
                    vehicleColor: invitation.vehicleColor === null ? 'Sin informacion' : invitation.vehicleColor,
                    vehicleId: invitation.vehicleId === null ? 'Sin informacion' : invitation.vehicleId,
                    vehicleModel: invitation.vehicleModel === null ? 'Sin informacion' : invitation.vehicleModel
                })
            } else {
                setData({...data, isActive: false})
                setLoadingScan(false);
            }
        })
    }

    const confirmInvitation = () => {
        const dataDto = {
            invitationId: data.id,
            observation
        };
        dispatch(startConfirmInvitation(dataDto)).then(resp => {
            if (resp.response === undefined && resp.status === 200) {
                setIsConfirmed(true)
                setTimeout(() => {
                    setIsConfirmed(false);
                    handleClean();
                }, 3000)
            } else {
                const response = resp.response;
                for (const messageElement of response.data.message) {
                    setToast({
                        message: messageElement,
                        type: TypeError.ERROR,
                        subMessage: '',
                        time: 3000
                    })
                }

            }
        })
    }

    const handleError = (err) => {
        console.error(err);
    };

    const handleClean = () => {
        setData({
            houseNumber: null,
            id: null,
            isActive: null,
            toDate: null,
            vehicleColor: null,
            vehicleId: null,
            vehicleModel: null
        })
        setColorResult(styles.colorPrimary)
        setInfoQr('')
        setStartScan(false)
        setLoadingScan(false)
        setIsConfirmed(false)
    }

    const validateData = () => {
        if ((data.vehicleId == null &&
            data.vehicleModel == null &&
            data.vehicleColor == null) && observation.length < 10
        ) {
            return true;
        }

        if (isConfirmed) {
            return true;
        }
    }

    useEffect(() => {
        const cl = setInterval(() => {
            // @ts-ignore
            ref.current.innerHTML = `${time()}`;
        }, 1000)
        return () => {
            clearInterval(cl);
        };
    }, []);

    useEffect(() => {
        if (data.isActive !== null) {
            const color = data.isActive ? styles.colorSuccess : styles.colorDanger
            setColorResult(color);
        } else {
            setColorResult(styles.colorPrimary);
        }

    }, [data]);


    return (
        <>
            <Card sx={{width: '100%', backgroundColor: 'white', height: 'calc(100vh - 160px)'}}>
                <CardHeader
                    className={'header_surveillance'}
                    title={<Typography sx={{fontSize: 22}} ref={ref}>{time()}</Typography>}
                    subheader={date}
                />
                <CardContent sx={{height: '70%'}}>
                    <div className={'card_qr'}>
                        {startScan && (
                            <QrReader
                                facingMode={"environment"}
                                delay={1000}
                                onError={handleError}
                                onScan={handleScan}
                                style={{width: "100%"}}
                            />

                        )}
                        {
                            infoQr &&
                            <div className={'content_info'}>
                                <div className="state animate__animated animate__fadeInRight animate__faster">
                                    <div className="icon"
                                         style={{color: 'white', backgroundColor: `${colorResult}`}}>
                                        {
                                            loadingScan &&
                                            <CircularProgress sx={{color: 'white', width: '25px', height: '25px'}}/>
                                        }
                                        {
                                            (!loadingScan && data && data.isActive === true) &&
                                            <TaskAlt sx={{fontSize: 25}}/>
                                        }
                                        {
                                            (!loadingScan && data && data.isActive === false) &&
                                            <HighlightOff sx={{fontSize: 25}}/>
                                        }

                                    </div>
                                    <div className="message">
                                        <div className="title">
                                            {
                                                loadingScan &&
                                                <Typography>{t('GENERAL.LOADING')}</Typography>
                                            }
                                            {
                                                (!loadingScan && data && data.isActive === true && !isConfirmed) &&
                                                <Typography>{t('SURVEILLANCE.APPROVED')}</Typography>
                                            }
                                            {
                                                (!loadingScan && data && data.isActive === false && !isConfirmed) &&
                                                <Typography>{t('SURVEILLANCE.REJECTED')}</Typography>
                                            }
                                            {
                                                (!loadingScan && data && data.isActive === true && isConfirmed) &&
                                                <Typography>{t('GENERAL.CONFIRM')}</Typography>
                                            }
                                        </div>
                                        <div className="subtitle">
                                            {
                                                (!loadingScan && data && data.isActive === true) &&
                                                <Typography
                                                    sx={{fontSize: 12, color: '#919191', lineHeight: 1}}>
                                                    {t('SURVEILLANCE.VALID_INVITATION')}
                                                </Typography>
                                            }
                                            {
                                                (!loadingScan && data && data.isActive === false) &&
                                                <Typography
                                                    sx={{fontSize: 12, color: '#919191', lineHeight: 1}}>
                                                    {t('SURVEILLANCE.INVALID_INVITATION')}
                                                </Typography>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div style={{border: `2px solid ${colorResult}`}}
                                     className="data_invitation animate__animated animate__fadeIn animate__faster">
                                    {
                                        (!loadingScan && data && data.isActive === false && !isConfirmed) &&
                                        <div>
                                            <img src={stopScurity} alt=""/>
                                        </div>
                                    }
                                    {
                                        isConfirmed &&
                                        <div>
                                            <img src={approved} alt="" width={'65%'}/>
                                        </div>
                                    }
                                    {
                                        (!loadingScan && data && data.isActive === true && !isConfirmed) &&
                                        <div className="content">
                                            <div className={'info'}>
                                                <Card className="card_info">
                                                    <div className="title">
                                                        {t('INVITATIONS_FORM.HOUSE_NUMBER')}
                                                    </div>
                                                    <div className="subtitle">
                                                        {data.houseNumber}
                                                    </div>
                                                </Card>
                                                <Card className="card_info">
                                                    <div className="title">
                                                        {t('INVITATIONS_FORM.VEHICLE_MODEL')}
                                                    </div>
                                                    <div className="subtitle">
                                                        {data.vehicleModel}
                                                    </div>
                                                </Card>
                                                <Card className="card_info">
                                                    <div className="title">
                                                        {t('INVITATIONS_FORM.VEHICLE_COLOR')}
                                                    </div>
                                                    <div className="subtitle">
                                                        {data.vehicleColor}
                                                    </div>
                                                </Card>
                                                <Card className="card_info">
                                                    <div className="title">
                                                        {t('INVITATIONS_FORM.VEHICLE_ID')}
                                                    </div>
                                                    <div className="subtitle">
                                                        {data.vehicleId}
                                                    </div>
                                                </Card>

                                            </div>
                                            <Box sx={{width: '100%', marginTop: '1rem'}}>
                                                <TextField
                                                    sx={{width: '100%'}}
                                                    id="outlined-textarea"
                                                    label="Observaciones"
                                                    placeholder="Observaciones"
                                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                                        setObservation(e.target.value);
                                                    }}
                                                    rows={3}
                                                    multiline
                                                />
                                            </Box>
                                        </div>
                                    }

                                </div>
                            </div>
                        }
                    </div>

                </CardContent>
                <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <div></div>
                    {
                        (toast.typeof === TypeError.ERROR || (data && data.isActive === false)) &&
                        <Button disabled={isConfirmed} color={'info'}
                                onClick={handleClean}>{t('SURVEILLANCE.CLEAN')}</Button>
                    }
                    {
                        !(!loadingScan && data && data.isActive === true) &&
                        <Button disabled={isConfirmed} color={'primary'} onClick={() => {
                            setStartScan(!startScan);
                        }}>
                            {startScan ? t('SURVEILLANCE.SCAN_STOP') : t('SURVEILLANCE.SCAN_QR')}
                        </Button>
                    }
                    {
                        (!loadingScan && data && data.isActive === true) &&
                        <Button disabled={validateData()} color={'primary'} onClick={() => {
                            confirmInvitation()
                        }}>
                            {t('GENERAL.CONFIRM')}
                        </Button>
                    }

                </CardActions>
            </Card>
        </>
    )
}

export default HomeSurveillanceComponent;
