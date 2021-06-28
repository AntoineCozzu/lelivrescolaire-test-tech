import { Fragment } from "react";
import { Formik } from "formik";
import { DatePickerField } from "../shared/datepicker/datepicker-field";

export function StudentForm(props) {
    const student = props.student;

    function handleSubmit(values) {
        const newStudent = { ...student };
        newStudent.firstname = values.firstname;
        newStudent.lastname = values.lastname;
        newStudent.birthdate = values.birthdate;
        props.onEditStudent(newStudent);
    }

    return (
        <Fragment>
            <Formik
                validateOnBlur={false}
                validateOnChange={false}
                initialValues={{ firstname: student.firstname, lastname: student.lastname, birthdate: student.birthdate }}
                onSubmit={(values) => handleSubmit(values)}>

                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    setFieldValue
                    /* and other goodies */
                }) => (
                    <form className="student-form" onSubmit={handleSubmit}>

                        <input name="firstname" value={values.firstname}
                            label="Prénom" type="text" onChange={handleChange} />

                        <input name="lastname" value={values.lastname}
                            label="Nom de famille" type="text" onChange={handleChange} />

                        <DatePickerField name="birthdate" selected={values.birthdate} onChange={setFieldValue} />

                        <input label="Valider" value="Valider" type="submit" />
                    </form>
                )}
            </Formik>

        </Fragment>
    )
}