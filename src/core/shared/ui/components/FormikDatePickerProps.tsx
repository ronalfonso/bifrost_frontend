import {DateTimePicker} from '@mui/lab';
import {useTranslation} from 'react-i18next';

const FormikDatePicker = ({ name, value, onChange }) => {
    const {t} = useTranslation();
    return (
        <DateTimePicker
            label={t('INVITATIONS_FORM.TO_DATE')}
            selected={(value && new Date(value)) || null}
            onChange={val => {
                onChange(name, val);
            }}
        />
    );
};
export default FormikDatePicker;