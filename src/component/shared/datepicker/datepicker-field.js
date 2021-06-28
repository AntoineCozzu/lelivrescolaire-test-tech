import { useField, useFormikContext } from "formik";
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr";

export function DatePickerField(props) {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    registerLocale('fr', fr);
    return (<DatePicker
        locale='fr'
        dateFormat="P"
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={value => {
            setFieldValue(field.name, value);
        }}
    />)
}