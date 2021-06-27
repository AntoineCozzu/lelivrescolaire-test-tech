import { Fragment } from "react";
import { Formik } from "formik";

export function StudentForm(props) {
    const student = props.student;
    return(
        <Fragment>
            <Formik
                    validateOnBlur={false}
                    validateOnChange={false}
                    initialValues={{ firstname: student.firstname, lastname: student.lastname, birthdate: student.birthdate}}>
                    
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
                        <form className="student-form"
                            onSubmit={handleSubmit}
                        >
                            <input  name="firstname" value={values.firstname}
                                label="Prénom" type="text"></input>
                                <input  name="lastname" value={values.lastname}
                                label="Nom de famille" type="text"></input>
                            <input label="Valider" value="Valider" type="submit"/>
                        </form>
                    )}
            </Formik>

        </Fragment>
    ) 
}