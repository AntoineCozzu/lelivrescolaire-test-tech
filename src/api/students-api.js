import { studentMock } from "../assets/mock/students-mock"

export function getStudents() {
    // TODO : Call real api to get list of students
    return Promise.resolve(studentMock);
}

export function updateStudent(student) {
    // TODO : Call real api to update a student
    return Promise.resolve(student);
}