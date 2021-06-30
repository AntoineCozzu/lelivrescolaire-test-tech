import moment from "moment";
import { Fragment, useState } from "react";
import ReactModal from "react-modal";
import { StudentForm } from "../student-form/student-form";
import "./student-modal.css";
import 'moment/locale/fr';
import { getImgUrl } from "../../../utils/img-url-helper";

const modalStyle = {
    content: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#264653',
        alignItems: 'center',
        color: 'white'
    }
}

export function StudentModal(props) {
    const student = props.student;
    const [isEditing, setEditing] = useState(false);

    function handleEditStudent(student) {
        props.onEditStudent(student);
        setEditing(false);
    }

    return (
        <ReactModal
            isOpen={student != null}
            ariaHideApp={false}
            shouldCloseOnOverlayClick={true}
            onRequestClose={props.onClose}
            closeTimeoutMS={300}
            style={modalStyle}>

            <div className="modal-header">
                <button className="themed-button bg-alternative" onClick={props.onClose}>x</button>
                <h2>Informations de l'élève</h2>
            </div>
            <img className="student-img" alt="Photographie de l'élève" src={getImgUrl(student.img)} />
            <div className="student-detail-section">
                {
                    isEditing ?
                        <StudentForm student={student} onEditStudent={(student) => handleEditStudent(student)} />
                        :
                        <Fragment>
                            <div className="student-info-field">
                                Prénom : <span className="student-info-text">{student.firstname}</span>
                            </div>
                            <div className="student-info-field">
                                Nom : <span className="student-info-text">{student.lastname}</span>
                            </div>
                            <div>
                                Né(e) le : {moment(student.birthdate).locale('fr').format("Do MMM YYYY")}
                            </div>

                        </Fragment>

                }
            </div>
            <div className="button-container">
                <button className="themed-button bg-alternative button-padding" onClick={() => setEditing(!isEditing)}>{isEditing ? 'Annuler' : 'Modifier l\'élève'}</button>
                <button className="themed-button bg-secondary button-padding" onClick={() => props.onDeleteStudent(student.id)}>Supprimer l'élève</button>
            </div>



        </ReactModal>
    )
}