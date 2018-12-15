import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

it('matches the snapshot', () => {
  const app = shallow(<App />);
  expect(app).toMatchSnapshot();
});
 
it('contains a Provider', () => {
  const app = shallow(<App />);

  expect(app.find('Provider')).toHaveLength(1);
});

it('contains an AppRouter', () => {
  const app = shallow(<App />);

  expect(app.find('AppRouter')).toHaveLength(1);
});