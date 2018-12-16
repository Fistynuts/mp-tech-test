import React from 'react';
import { shallow } from 'enzyme';
import AppRouter from '../AppRouter';

describe('AppRouter', () => {

  it('should match the snapshot', () => {
    const app = shallow(<AppRouter />);
    expect(app).toMatchSnapshot();
  });
  
  it('should have a route to /', () => {
    const app = shallow(<AppRouter />);
  
    expect(app.find('Route').find('[path="/"]')).toHaveLength(1);
  });
  
  it('should have a route to /details/:mpProductId', () => {
    const app = shallow(<AppRouter />);
  
    expect(app.find('Route').find('[path="/details/:mpProductId"]')).toHaveLength(1);
  });

});
