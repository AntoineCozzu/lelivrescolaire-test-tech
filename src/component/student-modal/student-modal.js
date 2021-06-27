import { Fragment, useState } from "react";
import ReactModal from "react-modal";
import { StudentForm } from "../student-form/student-form";

export function StudentModal(props) {
    const student = props.student;
    return (
        <Fragment>
            <ReactModal isOpen={student != null} ariaHideApp={false}>
                <button onClick={props.onClose}>x</button>
                Hello
                {student?.firstname}

                {student != null && <StudentForm student={student}></StudentForm> }
                
                <button onClick={() => props.onDeleteStudent(student.id)}>Delete student</button>
            </ReactModal>
        </Fragment>
    )
}