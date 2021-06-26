import { useEffect, useState } from "react";
import { getStudents } from "../../api/students-api";

export function StudentList() {
    const [students, setStudents] = useState(null);
    useEffect(() => {
        getStudents().then(studentData =>  setStudents(studentData) );
    }, []);
    
    return(
    <div>
        <ul>
            { students?.map((student) => <li>{student.firstname} </li>)}
        </ul>

    </div>)
}