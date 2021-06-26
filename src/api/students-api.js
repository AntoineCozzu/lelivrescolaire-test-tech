import { studentMock } from "../assets/mock/students-mock"

export function getStudents() {
    return Promise.resolve(studentMock);
}