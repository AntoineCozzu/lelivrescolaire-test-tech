import { useEffect, useState } from "react"
import { getStudents } from "../../api/students-api"

export function Students() {
    const [students, setStudents] = useState(null);
    useEffect(() => {});
    getStudents()
    return(<div>Hello</div>)
}