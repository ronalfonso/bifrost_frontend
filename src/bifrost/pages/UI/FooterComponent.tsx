import {
    AutoStoriesOutlined,
    Home,
    QrCode,
    BallotOutlined,
    MiscellaneousServices
} from '@mui/icons-material';
import {ButtonFooterComponent} from './components/ButtonFooterComponent';
import {useTranslation} from 'react-i18next';

export const FooterComponent = () => {
    const { t } = useTranslation();
    const buttonsList = [
        {path: '../home', Component: <Home/>, name: `${t('FOOTER_BAR.HOME')}`},
        {path: '../profile', Component: <MiscellaneousServices />, name: `${t('FOOTER_BAR.SETUP')}`},
        {path: '../create-invitation', Component: <QrCode/>, name: 'QR'},
        {path: '', Component: <AutoStoriesOutlined/>, name: `${t('FOOTER_BAR.CONTACTS')}`},
        {path: '../list-invitation', Component: <BallotOutlined/>, name: `${t('FOOTER_BAR.INVITATIONS')}`},
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