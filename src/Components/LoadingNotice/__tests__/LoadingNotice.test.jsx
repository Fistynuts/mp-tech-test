import React from 'react';
import { shallow } from 'enzyme';
import LoadingNotice from '../LoadingNotice';

describe('LoadingNotice', () => {

  it('should match the snapshot', () => {
    const app = shallow(<LoadingNotice />);
    expect(app).toMatchSnapshot();
  });

});