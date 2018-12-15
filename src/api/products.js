import { getDataIfOk } from './utils';

const searchUrl = "https://search.moonpig.com/api/products";
const searchSizeParam = "size";
const searchFacetsParam = "searchFacets";
const detailsUrl = "https://www.moonpig.com/uk/api/product/product/";
const detailsProductIdParam = "mpn";

export async function searchProducts(size = 12, searchFacets = "occasion_level_3:occasion%3Ewell%20done%3Enew%20job") {
  // https://search.moonpig.com/api/products?size=12&searchFacets=occasion_level_3:occasion%3Ewell%20done%3Enew%20job

  const url = `${searchUrl}?${searchSizeParam}=${size}&${searchFacetsParam}=${searchFacets}`;

  console.log(`about to call url ${url}`);

  try {
    const fetchOptions = {
      method: 'GET',
      cache: 'no-cache'
    };

    const response = await fetch(url, fetchOptions);
    const data = await getDataIfOk(response);
    
    console.log('data was ok:');
    console.log(data);

    return data;
  }
  catch (e) {
    console.error('error fetching');
    console.error(e);
    throw e;
  }
}

export async function getProductDetails(productId) {
  // https://www.moonpig.com/uk/api/product/product/?mpn=pu1162

  const url = `${detailsUrl}?${detailsProductIdParam}=${productId}`;

  console.log(`about to call url ${url}`);
  
  try {
    const fetchOptions = {
      method: 'GET',
      cache: 'no-cache'
    };

    const response = await fetch(url, fetchOptions);
    const data = await getDataIfOk(response);
    
    console.log('data was ok:');
    console.log(data);

    return data;
  }
  catch (e) {
    console.error('error fetching');
    console.error(e);
    throw e;
  }
}