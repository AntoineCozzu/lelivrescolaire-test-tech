import { useEffect, useState } from "react";
import { getStudents } from "../../api/students-api";
import { StudentModal } from '../student-modal/student-modal';

export function StudentList() {
    const [students, setStudents] = useState(null);
    const [currentStudent, setCurentStudent] = useState(null);
    useEffect(() => {
        getStudents().then(studentData =>  setStudents(studentData) );
    }, []);

    function selectStudent(student) {
        setCurentStudent(student);
    }

    function closeStudentModal() {
        setCurentStudent(null);
    }
    
    return(
    <div>
        <ul>
            { students?.map((student) => <li key={student.id} onClick={ () => selectStudent(student)}>{student.firstname} </li>)}
        </ul>
        <StudentModal student={currentStudent} onClose={closeStudentModal}></StudentModal>
    </div>)
}