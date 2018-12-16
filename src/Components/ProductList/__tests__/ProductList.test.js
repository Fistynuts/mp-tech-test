import React from 'react';
import { shallow } from 'enzyme';
import ProductList from '../ProductList';

describe('ProductList', () => {

  const getProducts = jest.fn();
  const testError = { error: 'test' };
  const testProducts = [
    {
        "Price": {
            "Value": 3.29,
            "Currency": "£"
        },
        "SoldOut": 0,
        "Title": "Champagne Bottle Personalised Congratulations Card",
        "ProductCategory": {
            "ProductCategoryId": 1,
            "Name": "greeting cards"
        },
        "PhotoUploadCount": 0,
        "CardShopId": 1,
        "DirectSmile": true,
        "DefaultSizeId": 1,
        "ProductId": 17715,
        "MoonpigProductNo": "ll037",
        "TradingFaces": 0,
        "IsLandscape": 0,
        "ShortDescription": null,
        "IsCustomisable": 1,
        "IsMultipack": 0,
        "SeoPath": "champagne-bottle-personalised-congratulations-card",
        "ProductCategoryGroupSeoPath": "personalised-cards/",
        "ProductLink": {
            "Href": "https://api-rest.moonpig.com/v2/products/ll037/1",
            "Method": "GET",
            "Rel": "self",
            "Title": "17715"
        },
        "ProductImage": {
            "Link": {
                "Href": "https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/1/product/ll037",
                "Method": "GET",
                "Rel": "self",
                "Title": "17715"
            },
            "MimeType": "image/jpeg"
        },
        "Reviews": {
            "MinReviewData": 0,
            "MaxReviewData": 0,
            "AverageStarReviewRating": 4.7561,
            "ReviewCount": 41
        }
    },
    {
        "Price": {
            "Value": 6.59,
            "Currency": "$"
        },
        "SoldOut": 0,
        "Title": "Grapes And Personalised Champagne Well Done Card",
        "ProductCategory": {
            "ProductCategoryId": 1,
            "Name": "greeting cards"
        },
        "PhotoUploadCount": 0,
        "CardShopId": 39,
        "DirectSmile": true,
        "DefaultSizeId": 1,
        "ProductId": 51500,
        "MoonpigProductNo": "ll1064",
        "TradingFaces": 0,
        "IsLandscape": 1,
        "ShortDescription": null,
        "IsCustomisable": 1,
        "IsMultipack": 0,
        "SeoPath": "grapes-and-personalised-champagne-well-done-card",
        "ProductCategoryGroupSeoPath": "personalised-cards/",
        "ProductLink": {
            "Href": "https://api-rest.moonpig.com/v2/products/ll1064/1",
            "Method": "GET",
            "Rel": "self",
            "Title": "51500"
        },
        "ProductImage": {
            "Link": {
                "Href": "https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/39/product/ll1064",
                "Method": "GET",
                "Rel": "self",
                "Title": "51500"
            },
            "MimeType": "image/jpeg"
        },
        "Reviews": {
            "MinReviewData": 0,
            "MaxReviewData": 0,
            "AverageStarReviewRating": 4.9167,
            "ReviewCount": 12
        }
    }
  ];
  
  afterEach(() => {
    getProducts.mockReset();
  });

  it('should match the default snapshot', () => {
    const app = shallow(<ProductList getProducts={getProducts} />);
    expect(app).toMatchSnapshot('default');
  });

  it('should match the loading snapshot', () => {
    const app = shallow(<ProductList getProducts={getProducts} isLoading />);
    expect(app).toMatchSnapshot('loading');
  });

  it('should match the error snapshot', () => {
    const app = shallow(<ProductList getProducts={getProducts} error={testError} />);
    expect(app).toMatchSnapshot('error');
  });

  it('should match the product results snapshot', () => {
    const app = shallow(<ProductList getProducts={getProducts} productCollection={testProducts} />);
    expect(app).toMatchSnapshot('results');
  });
  
  it('should call getProducts', () => {
    shallow(<ProductList getProducts={getProducts} />);
    expect(getProducts).toHaveBeenCalledTimes(1);
  });

  it('should contain a loading notice when loading', () => {
    const app = shallow(<ProductList getProducts={getProducts} isLoading />);

    expect(app.find('LoadingNotice')).toHaveLength(1);
  });

  it('should contain an error notice when passed an error', () => {
    const app = shallow(<ProductList getProducts={getProducts} error={testError} />);

    expect(app.find('ErrorNotice')).toHaveLength(1);
  });

  it('should contain two ProductSummary components when passed the product results', () => {
    const app = shallow(<ProductList getProducts={getProducts} productCollection={testProducts} />);

    expect(app.find('ProductSummary')).toHaveLength(2);
  });

  it('should contain a no products found notice when passed an empty results array', () => {
    const app = shallow(<ProductList getProducts={getProducts} productCollection={[]} />);

    expect(app.find('.product-list--no-products-notice')).toHaveLength(1);
  });
});
