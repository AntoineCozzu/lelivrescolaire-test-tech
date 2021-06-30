import { Fragment } from "react";
import { Formik } from "formik";
import { DatePickerField } from "../../shared/datepicker/datepicker-field";
import './student-form.css';

export function StudentForm(props) {
    const student = props.student;

    function handleSubmit(values) {
        const newStudent = { ...student };
        newStudent.firstname = values.firstname;
        newStudent.lastname = values.lastname;
        newStudent.birthdate = values.birthdate;
        props.onUpdateStudent(newStudent);
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
                        <div className="student-form-fields">
                        <div className="student-form-field">
                            <label>
                                Prénom
                            </label>
                            <input name="firstname" value={values.firstname}
                                label="Prénom" type="text" onChange={handleChange} />
                        </div>

                        <div className="student-form-field">
                            <label>
                                Nom de famille
                            </label>
                            <input name="lastname" value={values.lastname}
                                label="Nom de famille" type="text" onChange={handleChange} />
                        </div>
                        <div className="student-form-field">
                            <label>Date de naissance</label>
                            <DatePickerField name="birthdate" selected={values.birthdate} onChange={setFieldValue} />
                        </div>
                        </div>
                        

                        <input className="themed-button button-padding bg-emphasis" label="Valider" value="Valider" type="submit" />
                    </form>
                )}
            </Formik>

        </Fragment>
    )
}