import {useContext, useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {Condo} from '../../../core/models/condos/Condo';
import {Home} from '../../../core/models/homes/Home';
import {Invitation} from '../../../core/models/invitations/Invitation';
import {useNavigate} from 'react-router-dom';
import {GeneralContext} from '../../../contexts/GeneralContext';
import {useAppSelector} from '../../../store';

export const HomeComponent = ({home}: {home: Home}) => {
    // @ts-ignore
    const {setHomeSelected,} = useContext(GeneralContext);
    const navigate = useNavigate();
    const condo: Condo = home.condo;
    const { actives } = useAppSelector((state) => state.invitation);
    const { t } = useTranslation();
    const [invitations, setInvitations] = useState<Invitation[]>([]);

    const handleInvitationList = (home: Home): void => {
        setHomeSelected(home);
        navigate(`../list-invitation`)
    };

    useEffect(() => {
        if (actives.length > 0) {
            setInvitations([...actives])
        }
    }, [actives]);


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
                    <span className={'condo'}>{home.condo.name}</span>
                </div>
            </div>
        </>
    )
}