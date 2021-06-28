import moment from "moment";
import { Fragment, useState } from "react";
import ReactModal from "react-modal";
import { StudentForm } from "../student-form/student-form";
import "./student-modal.css";
import 'moment/locale/fr';

export function StudentModal(props) {
    const student = props.student;
    const [isEditing, setEditing] = useState(false);
    return (
        <Fragment>
            <ReactModal isOpen={student != null} ariaHideApp={false}>
                <button onClick={props.onClose}>x</button>
                <img src={student.img}/>

                {
                    isEditing ?
                        <StudentForm student={student} onEditStudent={(student) => props.onEditStudent(student)} />
                        :
                        <div>
                            <div>
                                Prénom : {student.firstname}
                            </div>
                            <div>
                                Nom : {student.lastname}
                            </div>
                            <div>
                                Né(e) le : {moment(student.birthdate).locale('fr').format("Do MMM YYYY")}
                            </div>

                        </div>

                }

                <button onClick={() => props.onDeleteStudent(student.id)}>Supprimer l'évève</button>
                <button onClick={() => setEditing(!isEditing)}>{isEditing ? 'Annuler' : 'Modifier l\'élève'}</button>
            </ReactModal>
        </Fragment>
    )
}