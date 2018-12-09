import { getDataIfOk } from './utils';

const searchUrl = "https://search.moonpig.com/api/products";
const sizeParam = "size";
const searchFacetsParam = "searchFacets";

export async function searchCards(size = 12, searchFacets = "occasion_level_3:occasion%3Ewell%20done%3Enew%20job") {
  // https://search.moonpig.com/api/products?size=12&searchFacets=occasion_level_3:occasion%3Ewell%20done%3Enew%20job

  const url = `${searchUrl}?${sizeParam}=${size}&${searchFacetsParam}=${searchFacets}`;

  console.log(`about to call url ${url}`);

  try {
    const fetchOptions = {
      method: 'GET',
      cache: 'no-cache'
    };

    const response = await fetch(url, fetchOptions);

    console.log('successful fetch response:');
    console.log(response);

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