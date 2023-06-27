import React, {useContext, useEffect, useState} from "react";
import {TaskAlt} from "@mui/icons-material";
import styles from "../../../styles/style.module.scss";
import {Typography} from "@mui/material";
import {GeneralContext} from "../../../contexts/general/GeneralContext";
import {TypeError} from "../../models/general/Toast";

export const ToastCustom = () => {
    const {toast, setToast} = useContext<any>(GeneralContext);
    const [colorResult, setColorResult] = useState(styles.colorPrimary);

    const handleClose = () => {
        setToast({
            message: '',
            subMessage: '',
            type: TypeError.NONE
        })
    }

    useEffect(() => {
        if (toast.type !== TypeError.NONE) {
            switch (toast.type) {
                case TypeError.SUCCESS:
                    setColorResult(styles.colorSuccess);
                    break;
                case TypeError.INFO:
                    setColorResult(styles.colorInfo);
                    break;
                case TypeError.WARNING:
                    setColorResult(styles.colorWarning);
                    break;
                case TypeError.ERROR:
                    setColorResult(styles.colorDanger);
                    break;
                default:
                    setColorResult(styles.colorPrimary);
                    break;
            }
        }
    }, [toast]);

    useEffect(() => {
        if (toast.type !== TypeError.NONE) {
            setTimeout(() => {
                handleClose();
            }, toast.time);
        }
    }, [toast]);


    return (
        <div className={'container'}>
            <div className="icon" style={{backgroundColor: `${colorResult}`}}>
                <TaskAlt sx={{fontSize: 30, color: 'white'}}/>
            </div>
            <div className="message">
                <div className="tilte">
                    <Typography>{toast.message}</Typography>
                </div>
                <div className="subtitle">
                    <Typography
                        sx={{fontSize: 12, color: '#919191', lineHeight: 1}}>
                        {toast.subMessage}
                    </Typography>
                </div>
            </div>
            <div className="close">
                <div>
                    <Typography
                        onClick={() => handleClose()}
                        sx={{fontSize: 12, color: '#919191', lineHeight: 1, marginTop: '13px', paddingLeft: '.2rem'}}>
                        Close
                    </Typography>
                </div>
            </div>
        </div>
    )
}