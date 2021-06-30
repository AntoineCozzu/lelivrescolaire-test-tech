import { StudentList } from "../../component/student/student-list/student-list"
import { Fragment } from "react"
import { Header } from "../../component/shared/header/header"
import "./students.css";

export function Students() {

    return (
        <Fragment>
            <Header></Header>
            <div className="page-wrapper bg-primary">
                <h2 className="page-title">Liste des élèves</h2>
                <StudentList></StudentList>
            </div>

        </Fragment>
    )
}