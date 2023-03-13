import {useNavigate} from 'react-router-dom';
import {IconButton} from '@mui/material';
import {
    AutoStoriesOutlined,
    CalendarMonth,
    PersonOutline,
    QrCode,
    WorkHistoryOutlined
} from '@mui/icons-material';

export const FooterComponent = () => {
    const navigate = useNavigate();

    return (
        <div className={'buttons_container'}>
            <div className={`button_content `}>
                <IconButton onClick={() => navigate('/profile')} aria-label="delete">
                    <PersonOutline />
                </IconButton>
            </div>
            <div className={`button_content button_content_perfil`}>
                <IconButton onClick={() => navigate('/profile')} aria-label="delete">
                    <CalendarMonth />
                </IconButton>
            </div>

            <div className={`button_content button_content_qr`}>
                <div className="circle">
                    <IconButton onClick={() => navigate('/profile')} aria-label="delete">
                        <QrCode className={'qr-button'}/>
                    </IconButton>
                </div>
            </div>
            <div className={`button_content button_content_frecuentes`}>
                <IconButton onClick={() => navigate('/profile')} aria-label="delete">
                    <AutoStoriesOutlined />
                </IconButton>
            </div>
            <div className={`button_content `}>
                <IconButton onClick={() => navigate('/profile')} aria-label="delete">
                    <WorkHistoryOutlined />
                </IconButton>
            </div>
        </div>
    )
}