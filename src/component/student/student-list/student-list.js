import { useEffect, useState } from "react";
import { deleteStudent, getStudents, updateStudent } from "../../../api/students-api";
import { StudentModal } from "../student-modal/student-modal";
import { Popover } from 'react-tiny-popover'
import "./student-list.css";
import { getImgUrl } from "../../../utils/img-url-helper";

export function StudentList() {
    const [students, setStudents] = useState([]);
    const [currentStudent, setCurrentStudent] = useState(null);
    const [openPopoverId, setOpenPopoverId] = useState({});

    useEffect(() => {
        getStudents().then(studentData => {
            setStudents(studentData);
        });
    }, []);

    function selectStudent(student) {
        setCurrentStudent(student);
    }

    function closeStudentModal() {
        setCurrentStudent(null);
    }

    function onDeleteStudent(id) {
        deleteStudent(id).then(
            (returnedId) => {
                const index = students.findIndex((student) => student.id === returnedId);
                const newStudentArray = [...students];
                newStudentArray.splice(index, 1);
                setStudents(newStudentArray);
                closeStudentModal();
            })
    }

    function onUpdateStudent(student) {
        updateStudent(student).then(
            (updatedStudent) => {
                const index = students.findIndex((currentStudent) => updatedStudent.id === currentStudent.id);
                const newStudentArray = [...students];
                newStudentArray.splice(index, 1, updatedStudent);
                setStudents(newStudentArray);
                selectStudent(updatedStudent);
            }
        )

    }

    function onHoverStudent(id) {
        setOpenPopoverId(id)
    }

    function onHoverLeaveStudent(id) {
        setOpenPopoverId(null);
    }

    function sortBy(criteria, order) {
        const newStudents = [...students];
        newStudents.sort((a, b) => {
            if (a[criteria] < b[criteria]) return -1
            if (a[criteria] > b[criteria]) return 1;
            return 0
        });
        setStudents(newStudents);
    }

    return (
        <div className="student-list-container">
            <div className="student-button-section">
                <button className="themed-button bg-secondary button-padding" onClick={() => sortBy('lastname')}>Trier par nom</button>
                <button className="themed-button bg-alternative button-padding" onClick={() => sortBy('firstname')}>Trier par prénom</button>
            </div>

            <ul className="student-list ">

                {students?.map((student) =>
                    <Popover
                        key={student.id}
                        isOpen={openPopoverId === student.id}

                        positions={['right', 'top']}
                        content={<img className="img-popover" src={getImgUrl(student.img)} alt="Photographie de l'élève" />}
                    >
                        <li
                            key={student.id}
                            onMouseEnter={() => onHoverStudent(student.id)}
                            onMouseLeave={() => onHoverLeaveStudent(student.id)}
                            onClick={() => selectStudent(student)}>
                            <div className="student-name-info">
                                {student.firstname} <em>{student.lastname}</em>
                            </div>

                            <div className="details">
                                Détails
                            </div>
                        </li>
                    </Popover>
                )}
            </ul>
            {currentStudent &&
                <StudentModal
                    student={currentStudent}
                    onClose={closeStudentModal}
                    onDeleteStudent={(id) => onDeleteStudent(id)}
                    onUpdateStudent={(student) => onUpdateStudent(student)}>

                </StudentModal>
            }
        </div>)
}