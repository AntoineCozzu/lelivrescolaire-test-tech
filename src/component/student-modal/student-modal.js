import { Fragment, useState } from "react";
import ReactModal from "react-modal";

export function StudentModal(props) {
    const student = props.student;
    return (
        <Fragment>
            <ReactModal isOpen={student != null} ariaHideApp={false}>
                <button onClick={props.onClose}>x</button>
                Hello
                {student?.firstname}
            </ReactModal>
        </Fragment>
    )
}