import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import {useTranslation} from "react-i18next";

export const ContactsListPage = () => {
    const {t} = useTranslation();

    return (
        <PageWrapper title={'Contacts'}>
            <h3>{t('WARNING.COMING_SOON')}</h3>
        </PageWrapper>
    )
}

export default ContactsListPage;