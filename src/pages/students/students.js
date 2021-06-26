import { StudentList } from "../../component/student-list/student-list"
import { Fragment } from "react"
import { Header } from "../../component/shared/header/header"

export function Students() {

    return (
        <Fragment>
            <Header></Header>
            <StudentList></StudentList>
        </Fragment>
    )
}