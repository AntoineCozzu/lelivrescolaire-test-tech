import { studentMock } from "../assets/mock/students-mock"

export function getStudents() {
    // TODO : Call real api to get list of students
    return Promise.resolve(studentMock);
}

export function updateStudent(student) {
    return Promise.resolve(student);
}