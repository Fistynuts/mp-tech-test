import React from 'react';
import { shallow } from 'enzyme';
import ProductListingsPage from '../ProductListingsPage';

it('matches the snapshot', () => {
  const app = shallow(<ProductListingsPage />);
  expect(app).toMatchSnapshot();
});
