import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Card, Divider, FormControl, InputLabel, MenuItem} from '@mui/material';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import logo from '../../../assets/img/bifrost_color.png';
import Box from '@mui/material/Box';
import {CondoRegisterComponent} from '../CondoRegisterComponent';
import {ResidentRegisterComponent} from './ResidentRegisterComponent';

export const RegisterComponent = () => {
    const {t} = useTranslation();
    const [typeRegister, setTypeRegister] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setTypeRegister(event.target.value);
    };

    return (
        <div className={'register_container'}>
            <div className="header_register">
                <div className="title">
                    <h3>{t('OUT.REGISTER.CREATE_ACCOUNT')}</h3>
                </div>
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>

            </div>
            <Card className={'card_register'} sx={{padding: 2,}}>
                <FormControl fullWidth size={'small'}>
                    <InputLabel id="demo-simple-select-label">
                        {t('OUT.REGISTER.TYPE_ACCOUNT')}
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={typeRegister}
                        label={t('OUT.REGISTER.CREATE_ACCOUNT')}
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>{t('DICTIONARY.CONDO')}</MenuItem>
                        <MenuItem value={2}>{t('DICTIONARY.RESIDENT')}</MenuItem>
                    </Select>
                </FormControl>
                <Divider sx={{marginTop: 2, marginBottom: 2}} />
                {
                    (typeRegister == '1') &&
                    <Box className="container_form animate__animated animate__fadeInRight animate__faster">
                        <CondoRegisterComponent type={typeRegister}/>
                    </Box>
                }
                {
                    (typeRegister == '2') &&
                    <Box className="container_form animate__animated animate__fadeInRight animate__faster">
                        <ResidentRegisterComponent type={typeRegister}/>
                    </Box>
                }
            </Card>
        </div>
    )
}