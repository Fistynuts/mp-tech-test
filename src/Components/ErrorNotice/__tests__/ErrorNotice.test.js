import React from 'react';
import { shallow } from 'enzyme';
import ErrorNotice from '../ErrorNotice';

it('matches the snapshot', () => {
  const app = shallow(<ErrorNotice />);
  expect(app).toMatchSnapshot();
});
