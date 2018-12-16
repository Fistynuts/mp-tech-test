import React from 'react';
import { shallow } from 'enzyme';
import ProductDetailsPage from '../ProductDetailsPage';

describe('ProductDetailsPage', () => {

  const testProductId = 'abc123';
  const testMatch = {
    params: {
      mpProductId: testProductId
    }
  };

  it('should match the snapshot', () => {
    const app = shallow(<ProductDetailsPage match={testMatch} />);
    expect(app).toMatchSnapshot();
  });

  it('should contain a ProductDetails component', () => {
    const app = shallow(<ProductDetailsPage match={testMatch} />);

    expect(app.find('Connect(ProductDetails)')).toHaveLength(1);
  });

  it('should have passed the correct product ID to the ProductDetails component', () => {
    const app = shallow(<ProductDetailsPage match={testMatch} />);

    expect(app.find('Connect(ProductDetails)').prop('mpProductId')).toEqual(testProductId);
  });
});
