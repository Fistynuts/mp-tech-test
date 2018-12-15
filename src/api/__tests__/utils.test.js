import { getDataIfOk } from '../utils';

describe('getDataIfOk', () => {

  const data = {
    field: "value"
  };

  const validResponse = {
    ok: true,
    json: async () => {
      return data;
    }
  };

  const invalidResponse = {
    ok: false,
    json: async () => {
      return data;
    }
  };

  it('should, if passed a valid response, return the contained JSON data', async () => {
    await expect(getDataIfOk(validResponse)).resolves.toEqual(data);
  });

  it('should, if passed an invalid response, throw an exception', async () => {
    expect.assertions(1);
    await expect(getDataIfOk(invalidResponse)).rejects.toBeInstanceOf(Error);
  });
});