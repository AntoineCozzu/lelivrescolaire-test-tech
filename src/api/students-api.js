import { studentMock } from "../assets/mock/students-mock"

export function getStudents() {
    return new Promise(studentMock);
}