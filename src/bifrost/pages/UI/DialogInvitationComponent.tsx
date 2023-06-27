import {useTranslation} from "react-i18next";

export const DialogInvitationComponent = () => {

    const {t} = useTranslation();

    return (
        <>
            <div className="invitatrion_container">
                <span>{t('DICTIONARY.INVITATION')}</span>
            </div>
        </>
    )
}