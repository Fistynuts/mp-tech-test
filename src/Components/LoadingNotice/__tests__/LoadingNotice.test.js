import React from 'react';
import { shallow } from 'enzyme';
import LoadingNotice from '../LoadingNotice';

it('matches the snapshot', () => {
  const app = shallow(<LoadingNotice />);
  expect(app).toMatchSnapshot();
});
