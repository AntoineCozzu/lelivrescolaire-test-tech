import { useEffect, useState } from "react";
import { getStudents, updateStudent } from "../../api/students-api";
import { StudentModal } from '../student-modal/student-modal';

export function StudentList() {
    const [students, setStudents] = useState([]);
    const [currentStudent, setCurrentStudent] = useState(null);
    useEffect(() => {
        getStudents().then(studentData => setStudents(studentData));
    }, []);

    function selectStudent(student) {
        setCurrentStudent(student);
    }

    function closeStudentModal() {
        setCurrentStudent(null);
    }

    function deleteStudent(id) {
        const index = students.findIndex((student) => student.id === id);
        const newStudentArray = [...students];
        newStudentArray.splice(index, 1);
        setStudents(newStudentArray);
        closeStudentModal();
    }

    function editStudent(student) {
        updateStudent(student).then(
            (updatedStudent) => {
                console.log('Updated student', updatedStudent);
                const index = students.findIndex((currentStudent) => updatedStudent.id === currentStudent.id);
                const newStudentArray = [...students];
                newStudentArray.splice(index, 1, updatedStudent);
                setStudents(newStudentArray);
                closeStudentModal();
            }
        )

    }

    return (
        <div>
            <ul>
                {students?.map((student) => <li key={student.id} onClick={() => selectStudent(student)}>{student.firstname} </li>)}
            </ul>
            {currentStudent &&
                <StudentModal
                    student={currentStudent}
                    onClose={closeStudentModal}
                    onDeleteStudent={(id) => deleteStudent(id)}
                    onEditStudent={(student) => editStudent(student)}>

                </StudentModal>
            }
        </div>)
}