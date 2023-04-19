import {
    AutoStoriesOutlined,
    Home,
    PersonOutline,
    QrCode,
    WorkHistoryOutlined
} from '@mui/icons-material';
import {ButtonFooterComponent} from './components/ButtonFooterComponent';

export const FooterComponent = () => {
    const buttonsList = [
        {path: '../home', Component: <Home/>, name: 'Home'},
        {path: '../profile', Component: <PersonOutline/>, name: 'Profile'},
        {path: '../invitations', Component: <QrCode/>, name: 'QR'},
        {path: '', Component: <AutoStoriesOutlined/>, name: 'Contactos'},
        {path: '', Component: <WorkHistoryOutlined/>, name: 'Hitorial'},
    ]

    return (
        <>
            <div className="navigation">
                <ul>
                    {
                        buttonsList.map((button) => (
                            <ButtonFooterComponent key={button.name} button={button}/>
                        ))
                    }
                    <div className="indicator"></div>
                </ul>
            </div>
        </>
    )
}