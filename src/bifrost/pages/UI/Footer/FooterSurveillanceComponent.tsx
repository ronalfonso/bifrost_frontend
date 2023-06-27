import {useTranslation} from "react-i18next";
import {menu} from "../../../../routes/routes";
import {AutoStoriesOutlined, BallotOutlined, Home, MiscellaneousServices, QrCode} from "@mui/icons-material";
import {ButtonFooterComponent} from "../components/ButtonFooterComponent";

export const FooterSurveillanceComponent = () => {
    const { t } = useTranslation();
    const buttonsList = [
        {path: `..${menu.home.path}`, Component: <Home/>, name: `${t('FOOTER_BAR.HOME')}`},
        {path: `../${menu.config.path}`, Component: <MiscellaneousServices />, name: `${t('FOOTER_BAR.SETUP')}`},
        {path: `../${menu.createInvitation.path}`, Component: <QrCode/>, name: 'QR'},
        {path: `../${menu.listContacts.path}`, Component: <AutoStoriesOutlined/>, name: `${t('FOOTER_BAR.CONTACTS')}`},
        {path: `../${menu.listInvitation.path}`, Component: <BallotOutlined/>, name: `${t('FOOTER_BAR.INVITATIONS')}`},
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

export default FooterSurveillanceComponent;