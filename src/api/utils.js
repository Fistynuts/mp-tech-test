/* eslint-disable-next-line import/prefer-default-export */
export async function getDataIfOk(response) {
  if (response.ok) {
    return response.json();
  }
  throw new Error(`Response was not ok: ${JSON.stringify(response)}`);
}