import React from 'react';
import { shallow } from 'enzyme';
import ProductSummary from '../ProductSummary';

describe('ProductSummary', () => {

  const testProduct = {
    Price: {
      Value: 3.29,
      Currency: '£'
    },
    SoldOut: 0,
    Title: 'Champagne Bottle Personalised Congratulations Card',
    ProductCategory: {
      ProductCategoryId: 1,
      Name: 'greeting cards'
    },
    PhotoUploadCount: 0,
    CardShopId: 1,
    DirectSmile: true,
    DefaultSizeId: 1,
    ProductId: 17715,
    MoonpigProductNo: 'll037',
    TradingFaces: 0,
    IsLandscape: 0,
    ShortDescription: null,
    IsCustomisable: 1,
    IsMultipack: 0,
    SeoPath: 'champagne-bottle-personalised-congratulations-card',
    ProductCategoryGroupSeoPath: 'personalised-cards/',
    ProductLink: {
      Href: 'https://api-rest.moonpig.com/v2/products/ll037/1',
      Method: 'GET',
      Rel: 'self',
      Title: '17715'
    },
    ProductImage: {
      Link: {
        Href: 'https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/1/product/ll037',
        Method: 'GET',
        Rel: 'self',
        Title: '17715'
      },
      MimeType: 'image/jpeg'
    },
    Reviews: {
      MinReviewData: 0,
      MaxReviewData: 0,
      AverageStarReviewRating: 4.7561,
      ReviewCount: 41
    }
  };

  it('should match the snapshot', () => {
    const app = shallow(<ProductSummary product={testProduct} />);
    expect(app).toMatchSnapshot();
  });
});
