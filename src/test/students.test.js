import React from 'react';
import { StudentModal } from '../component/student/student-modal/student-modal';
import { StudentList } from '../component/student/student-list/student-list';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, mount } from 'enzyme';
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';

configure({ adapter: new Adapter() });

test('listRendersWithStudents', async () => {
  const wrapper = mount(<StudentList />);
  await act(async () => wrapper);
  const list = wrapper.find('.student-list');
  expect(list.render().children()).toHaveLength(5);
});

test('modalRendersWithFirstName', () => {
  const student = { id: 1, lastname: 'Breton', firstname: 'Lucas', birthdate: new Date() };
  const wrapper = mount(<StudentModal student={student} />);
  expect(wrapper.find('.student-info-text').first().text()).toBe('Lucas');
});
