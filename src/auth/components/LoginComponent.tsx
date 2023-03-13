import {useMemo, useState} from 'react';
import {useTranslation} from "react-i18next";
import {useForm} from '../../core/hooks';
import {useAppDispatch, useAppSelector} from '../../store';
import {starLogin} from '../../store/auth';
import logo from '../../assets/img/bifrost_color.png';
import {AccountBox, Visibility, VisibilityOff} from '@mui/icons-material';
import {
    Button,
    FormControl, IconButton, InputAdornment,
    InputLabel,
    OutlinedInput,
} from '@mui/material';

const formData = {
    username: '',
    password: ''
}

const formValidations = {
    username: [(value) => value.length > 1, 'El username es requerido'],
    password: [(value) => value.length > 1, 'El password es requerido'],
}

export const LoginComponent = () => {
    const dispatch = useAppDispatch();
    const {t} = useTranslation();

    const status = useAppSelector((state) => state.auth.status);
    const isCheckingAuth = useMemo(() => status === 'checking', [status]);
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    // @ts-ignore
    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log(event);
    };

    const {
        username,
        password,
        onInputChange,
        isFormValid,
    }: any = useForm(formData, formValidations);

    const onSubmit = async (e: any) => {
        e.preventDefault();
        if (!isFormValid) return;
        dispatch(starLogin({username, password}))
    }

    return (
        <>
            <div className="header_login">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="title">
                    <h3>{t('OUT.LOGIN.WELCOME')}</h3>
                    <h1>Bifrost Security</h1>
                </div>
            </div>
            <form className={'form_login'} onSubmit={onSubmit}>

                <div className="">

                    <FormControl size="small"
                                 fullWidth
                                 sx={{mt: 2}}
                                 variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">{t('OUT.LOGIN.USERNAME_EMAIL')}</InputLabel>
                        <OutlinedInput
                            value={username} onChange={onInputChange}
                            name="username"
                            id="outlined-adornment-username"
                            type={'text'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <AccountBox/>
                                </InputAdornment>
                            }
                            label={t('OUT.LOGIN.USERNAME_EMAIL')}
                        />
                    </FormControl>

                    <FormControl size="small" fullWidth sx={{mt: 2}} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">{t('OUT.LOGIN.PASSWORD')}</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={password} onChange={onInputChange} name="password"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label={t('OUT.LOGIN.PASSWORD')}
                        />
                    </FormControl>

                </div>

                <div className="footer_login ">
                    <FormControl size="small" fullWidth sx={{mt: 1}} variant="outlined">
                        <Button type="submit" variant="contained"
                                disabled={!isFormValid || isCheckingAuth}
                        >{t('OUT.LOGIN.LOGIN')}</Button>
                    </FormControl>
                    <FormControl className={''} size="small" fullWidth sx={{mt: 1}} variant="outlined">
                        <a href="/auth/login">{t('OUT.LOGIN.FORGOT_PASSWORD')}</a>
                    </FormControl>
                </div>
            </form>
        </>
    )
}