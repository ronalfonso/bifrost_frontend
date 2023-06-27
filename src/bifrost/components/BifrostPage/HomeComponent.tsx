import {useContext, useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {Condo} from '../../../core/models/condos/Condo';
import {Home} from '../../../core/models/homes/Home';
import {Invitation} from '../../../core/models/invitations/Invitation';
import {useNavigate} from 'react-router-dom';
import {FiltersContext} from "../../../contexts/filters/FiltersContext";
import {useAppSelector} from '../../../store';
import {capitalizeLabel} from '../../../core/utils/handle-lables';
import {RoleEnum} from '../../../store/auth/enum/role.enum';

export const HomeComponent = ({home}: {home: Home}) => {
    const {setHomeSelected,} = useContext<any>(FiltersContext);
    const navigate = useNavigate();
    const { role } = useAppSelector((state) => state.auth.user);
    const { actives } = useAppSelector((state) => state.invitation);
    const { infoCondo } = useAppSelector((state) => state.condo);
    const { t } = useTranslation();
    const [invitations, setInvitations] = useState<Invitation[]>([]);
    const [condoName, setCondoName] = useState('');
    const [type, setType] = useState('');
    let condo: Condo = home.condo;

    const handleInvitationList = (home: Home): void => {
        setHomeSelected(home);
        navigate(`../list-invitation`)
    };

    useEffect(() => {
        if (actives.length > 0) {
            setInvitations([...actives])
        }
    }, [actives]);

    useEffect(() => {
        if (role.name === RoleEnum.CONDO) {
            condo = infoCondo;
            setCondoName(infoCondo.name)
            setType(infoCondo.type.description);
        } else {
            setCondoName(home.condo.name);
            setType(condo.type.description);
        }
    }, [role]);



    return (
        <>
            <div className="content_card" onClick={() => handleInvitationList(home)}>
                <div className="header_card">
                    <div className={'home_number'}>{invitations.length}</div>
                </div>
                <div className="body_card">
                    <div className={'number_house'}>
                        <div className="background_number">
                            <span>{t(`DICTIONARY.${type}`)} { home.numberHouse }</span>
                        </div>
                    </div>
                </div>
                <div className="footer_card">
                    <span className={'condo'}>{capitalizeLabel(home.description)}</span>
                    <span className={'condo'}>{capitalizeLabel(condoName)}</span>
                </div>
            </div>
        </>
    )
}