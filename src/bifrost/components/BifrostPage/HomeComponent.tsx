import {useContext} from 'react';
import {ResidentHomes} from "../../../core/models/residents/Resident-homes";
import {useTranslation} from "react-i18next";
import {Condo} from '../../../core/models/condos/Condo';
import {Home} from '../../../core/models/homes/Home';
import {Invitation} from '../../../core/models/invitations/Invitation';
import {useNavigate} from 'react-router-dom';
import {GeneralContext} from '../../../contexts/GeneralContext';

export const HomeComponent = ({resident}: {resident: ResidentHomes}) => {
    // @ts-ignore
    const {setHomeSelected,} = useContext(GeneralContext);
    const navigate = useNavigate();
    const home: Home = resident.home;
    const condo: Condo = resident.home.condo;
    const invitations: Invitation[] = resident.invitations.filter(invitation => invitation.isActive);
    const { t } = useTranslation();

    const handleInvitationList = (home: Home): void => {
        setHomeSelected(home);
        navigate(`../list-invitation`)
    };

    return (
        <>
            <div className="content_card" onClick={() => handleInvitationList(home)}>
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