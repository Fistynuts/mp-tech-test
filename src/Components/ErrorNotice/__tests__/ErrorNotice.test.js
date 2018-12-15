import React from 'react';
import { shallow } from 'enzyme';
import ErrorNotice from '../ErrorNotice';

describe('ErrorNotice', () => {

  it('should match the snapshot', () => {
    const app = shallow(<ErrorNotice />);
    expect(app).toMatchSnapshot();
  });

});