import React from 'react';
import { shallow } from 'enzyme';
import ProductListingsPage from '../ProductListingsPage';

describe('ProductListingsPage', () => {
  
  it('should match the snapshot', () => {
    const app = shallow(<ProductListingsPage />);
    expect(app).toMatchSnapshot();
  });

  it('should contain a ProductList component', () => {
    const app = shallow(<ProductListingsPage />);

    expect(app.find('Connect(ProductList)')).toHaveLength(1);
  });
});
