import {ResidentHomes} from "../../../core/models/residents/Resident-homes";
import {useTranslation} from "react-i18next";

export const HomeComponent = ({resident}: {resident: ResidentHomes}) => {
    const home = resident.home;
    const condo = resident.home.condo;
    const invitations = resident.invitations;
    const { t } = useTranslation();

    return (
        <>
            <div className="content_card">
                <div className="header_card">
                    <div className={'home_number'}>{invitations.length}</div>
                </div>
                <div className="body_card">
                    <div className={'number_house'}><span>{t(`DICTIONARY.${condo.type.description}`)} { home.numberHouse }</span></div>


                </div>
                <div className="footer_card">
                    <span className={'condo'}>{resident.home.condo.name}</span>
                </div>
            </div>
        </>
    )
}