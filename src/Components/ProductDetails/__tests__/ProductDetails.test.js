import React from 'react';
import { shallow } from 'enzyme';
import ProductDetails from '../ProductDetails';

describe('ProductDetails', () => {
  const getProductDetails = jest.fn();
  const testProductId = "testId";
  const testError = { error: "TestError" };

  // Note: Ideally this product would be placed in its own file.
  // However, Jest by default always runs all files inside a __tests__ folder and 
  // react-scripts has a bug where the regex specifying the files to run cannot be overridden.
  // Therefore it has to live here for now.
  const testProduct = {
    "Name": "PU1162",
    "SizeName": "Standard Card",
    "AvailableSizes": [
        {
            "AvailableSubstrates": null,
            "Category": {
                "Id": 1,
                "Name": "Greeting Cards"
            },
            "Currency": "£",
            "Description": "Lrg",
            "DisplayOrder": 4,
            "Id": 5,
            "Kind": {
                "Category": {
                    "Id": 1,
                    "Name": "Greeting Cards"
                },
                "Id": 1,
                "Name": "Greeting Card"
            },
            "MinimumBundle": 1,
            "Name": "Large Card",
            "PostageSize": {
                "Id": 2,
                "Name": "Large Letter"
            },
            "Price": 5.99,
            "Weights": {
                "EnvelopeWeight": 24,
                "ItemWeight": 106
            },
            "DisplayName": "Large Card",
            "DefaultNoOfPages": 4,
            "CanPrepay": false
        },
        {
            "AvailableSubstrates": null,
            "Category": {
                "Id": 1,
                "Name": "Greeting Cards"
            },
            "Currency": "£",
            "Description": "Sml",
            "DisplayOrder": 2,
            "Id": 8,
            "Kind": {
                "Category": {
                    "Id": 1,
                    "Name": "Greeting Cards"
                },
                "Id": 1,
                "Name": "Greeting Card"
            },
            "MinimumBundle": 4,
            "Name": "Small Card",
            "PostageSize": {
                "Id": 1,
                "Name": "Letter"
            },
            "Price": 1.5,
            "Weights": {
                "EnvelopeWeight": 11,
                "ItemWeight": 15
            },
            "DisplayName": "Card Pack",
            "DefaultNoOfPages": 4,
            "CanPrepay": false
        },
        {
            "AvailableSubstrates": null,
            "Category": {
                "Id": 15,
                "Name": "Frames"
            },
            "Currency": "£",
            "Description": "FSB",
            "DisplayOrder": 50,
            "Id": 54,
            "Kind": {
                "Category": {
                    "Id": 15,
                    "Name": "Frames"
                },
                "Id": 19,
                "Name": "Framed Print"
            },
            "MinimumBundle": 1,
            "Name": "Standard Frame - Black",
            "PostageSize": {
                "Id": 4,
                "Name": "Packet"
            },
            "Price": 7,
            "Weights": {
                "EnvelopeWeight": 0,
                "ItemWeight": 100
            },
            "DisplayName": "Standard Frame - Black",
            "DefaultNoOfPages": 1,
            "CanPrepay": false
        },
        {
            "AvailableSubstrates": null,
            "Category": {
                "Id": 15,
                "Name": "Frames"
            },
            "Currency": "£",
            "Description": "FSW",
            "DisplayOrder": 51,
            "Id": 55,
            "Kind": {
                "Category": {
                    "Id": 15,
                    "Name": "Frames"
                },
                "Id": 19,
                "Name": "Framed Print"
            },
            "MinimumBundle": 1,
            "Name": "Standard Frame - White",
            "PostageSize": {
                "Id": 4,
                "Name": "Packet"
            },
            "Price": 7,
            "Weights": {
                "EnvelopeWeight": 0,
                "ItemWeight": 100
            },
            "DisplayName": "Standard Frame - White",
            "DefaultNoOfPages": 1,
            "CanPrepay": false
        },
        {
            "AvailableSubstrates": null,
            "Category": {
                "Id": 15,
                "Name": "Frames"
            },
            "Currency": "£",
            "Description": "FLB",
            "DisplayOrder": 55,
            "Id": 56,
            "Kind": {
                "Category": {
                    "Id": 15,
                    "Name": "Frames"
                },
                "Id": 19,
                "Name": "Framed Print"
            },
            "MinimumBundle": 1,
            "Name": "Large Frame - Black",
            "PostageSize": {
                "Id": 4,
                "Name": "Packet"
            },
            "Price": 9,
            "Weights": {
                "EnvelopeWeight": 0,
                "ItemWeight": 100
            },
            "DisplayName": "Large Frame - Black",
            "DefaultNoOfPages": 1,
            "CanPrepay": false
        },
        {
            "AvailableSubstrates": null,
            "Category": {
                "Id": 15,
                "Name": "Frames"
            },
            "Currency": "£",
            "Description": "FLW",
            "DisplayOrder": 56,
            "Id": 57,
            "Kind": {
                "Category": {
                    "Id": 15,
                    "Name": "Frames"
                },
                "Id": 19,
                "Name": "Framed Print"
            },
            "MinimumBundle": 1,
            "Name": "Large Frame - White",
            "PostageSize": {
                "Id": 4,
                "Name": "Packet"
            },
            "Price": 9,
            "Weights": {
                "EnvelopeWeight": 0,
                "ItemWeight": 100
            },
            "DisplayName": "Large Frame - White",
            "DefaultNoOfPages": 1,
            "CanPrepay": false
        },
        {
            "AvailableSubstrates": null,
            "Category": {
                "Id": 1,
                "Name": "Greeting Cards"
            },
            "Currency": "£",
            "Description": "XLrg",
            "DisplayOrder": 4,
            "Id": 133,
            "Kind": {
                "Category": {
                    "Id": 1,
                    "Name": "Greeting Cards"
                },
                "Id": 1,
                "Name": "Greeting Card"
            },
            "MinimumBundle": 1,
            "Name": "Giant Card",
            "PostageSize": {
                "Id": 4,
                "Name": "Packet"
            },
            "Price": 9.99,
            "Weights": {
                "EnvelopeWeight": 0,
                "ItemWeight": 200
            },
            "DisplayName": "Giant Card",
            "DefaultNoOfPages": 4,
            "CanPrepay": false
        }
    ],
    "Description": "Happy Anniversary",
    "DesignFeatureTags": [
        "Portrait"
    ],
    "ImageUrls": [
        {
            "ImageNo": 1,
            "ImageUrl": "https://assets.moonpig.com/api/images/Cardshop/1/product/PU1162/1"
        },
        {
            "ImageNo": 2,
            "ImageUrl": "https://assets.moonpig.com/api/images/Cardshop/1/product/PU1162/2"
        },
        {
            "ImageNo": 3,
            "ImageUrl": "https://assets.moonpig.com/api/images/Cardshop/1/product/PU1162/3"
        },
        {
            "ImageNo": 4,
            "ImageUrl": "https://assets.moonpig.com/api/images/Cardshop/1/product/PU1162/4"
        }
    ],
    "IsCustomisable": true,
    "Metadata": {
        "Default": false,
        "Quality": 0
    },
    "MoonpigProductNo": "PU1162",
    "Pages": [
        {
            "PageNo": 1,
            "Template": {
                "FontColors": null,
                "FontOptions": null,
                "FontSizes": null,
                "Height": 0,
                "Id": 82125,
                "ImageObjects": null,
                "ShapeObjects": null,
                "TextCustomisations": null,
                "TextObjects": null,
                "Width": 0,
                "XBleed": 0,
                "YBleed": 0
            }
        },
        {
            "PageNo": 2,
            "Template": {
                "FontColors": null,
                "FontOptions": null,
                "FontSizes": null,
                "Height": 0,
                "Id": 67716,
                "ImageObjects": null,
                "ShapeObjects": null,
                "TextCustomisations": null,
                "TextObjects": null,
                "Width": 0,
                "XBleed": 0,
                "YBleed": 0
            }
        },
        {
            "PageNo": 3,
            "Template": {
                "FontColors": null,
                "FontOptions": null,
                "FontSizes": null,
                "Height": 0,
                "Id": 67720,
                "ImageObjects": null,
                "ShapeObjects": null,
                "TextCustomisations": null,
                "TextObjects": null,
                "Width": 0,
                "XBleed": 0,
                "YBleed": 0
            }
        },
        {
            "PageNo": 4,
            "Template": {
                "FontColors": null,
                "FontOptions": null,
                "FontSizes": null,
                "Height": 0,
                "Id": 82140,
                "ImageObjects": null,
                "ShapeObjects": null,
                "TextCustomisations": null,
                "TextObjects": null,
                "Width": 0,
                "XBleed": 0,
                "YBleed": 0
            }
        }
    ],
    "ProductCategoryGroup": {
        "Name": "Personalised Cards",
        "PageUrl": "https://www.moonpig.com/uk/personalised-cards",
        "SeoPath": "personalised-cards/"
    },
    "ProductId": "92640",
    "ProductUrl": "https://www.moonpig.com/uk/personalised-cards/anniversary-card-happy-anniversary-photo-upload/pu1162",
    "RangeId": 16321,
    "Rank": 9999,
    "SeoPath": "Anniversary-Card-Happy-Anniversary-Photo-Upload",
    "Size": {
        "AvailableSubstrates": [],
        "Category": {
            "Id": 1,
            "Name": "Greeting Cards"
        },
        "Currency": "£",
        "Description": "Std",
        "DisplayOrder": 3,
        "Id": 1,
        "Kind": {
            "Category": {
                "Id": 1,
                "Name": "Greeting Cards"
            },
            "Id": 1,
            "Name": "Greeting Card"
        },
        "MinimumBundle": 1,
        "Name": "Standard Card",
        "PostageSize": {
            "Id": 1,
            "Name": "Letter"
        },
        "Price": 3.49,
        "Weights": {
            "EnvelopeWeight": 8,
            "ItemWeight": 22
        },
        "DisplayName": "Standard Card",
        "DefaultNoOfPages": 4,
        "CanPrepay": false
    },
    "SoldOut": false,
    "SupplierNo": "PU1162",
    "ThumbnailUrl": "https://d1xkhapf8f3lxw.cloudfront.net/api/images/Cardshop/1/product/PU1162",
    "Title": "Anniversary Card - Happy Anniversary - Photo Upload",
    "AdditionalInfo": "",
    "IsMultipack": false,
    "UndeliverableDates": [],
    "InStock": true,
    "OccasionId": 1,
    "PageCountOverride": null,
    "ProductCategoryId": 1,
    "PublishedOnSite": true,
    "StyleId": 17,
    "SupplierId": 4973
  };
  
  afterEach(() => {
    getProductDetails.mockReset();
  });
 
  it('matches the default snapshot', () => {
    
    const app = shallow(<ProductDetails getProductDetails={getProductDetails} mpProductId={testProductId} />);

    expect(app).toMatchSnapshot('default');
  }); 

  it('matches the loading snapshot', () => {
    
    const app = shallow(<ProductDetails getProductDetails={getProductDetails} mpProductId={testProductId} isLoading />);

    expect(app).toMatchSnapshot('loading');
  });

  it('matches the error snapshot', () => {
    
    const app = shallow(<ProductDetails getProductDetails={getProductDetails} mpProductId={testProductId} error={testError} />);

    expect(app).toMatchSnapshot('error');
  });

  it('matches the product snapshot', () => {
    
    const app = shallow(<ProductDetails getProductDetails={getProductDetails} mpProductId={testProductId} detailProduct={testProduct} />);

    expect(app).toMatchSnapshot('product');
  });

  it('calls getProductDetails with the supplied product ID', () => {
    shallow(<ProductDetails getProductDetails={getProductDetails} mpProductId={testProductId} />);

    expect(getProductDetails).toHaveBeenCalledWith(testProductId);
  });

  it('by default shows a loading notice', () => {
    const app = shallow(<ProductDetails getProductDetails={getProductDetails} mpProductId={testProductId} />);

    expect(app.find('LoadingNotice')).toHaveLength(1);
  });

  it('if isLoading is true, shows a loading notice', () => {
    const app = shallow(<ProductDetails getProductDetails={getProductDetails} mpProductId={testProductId} isLoading />);

    expect(app.find('LoadingNotice')).toHaveLength(1);
  });

  it('if an error is supplied, shows an error notice', () => {
    const app = shallow(<ProductDetails getProductDetails={getProductDetails} mpProductId={testProductId} error={testError} />);

    expect(app.find('ErrorNotice')).toHaveLength(1);
  });

  it('if a product is supplied, shows some product details', () => {
    const app = shallow(<ProductDetails getProductDetails={getProductDetails} mpProductId={testProductId} detailProduct={testProduct} />);

    expect(app.find('.product-details--container')).toHaveLength(1);
  });
});