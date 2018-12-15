export async function getDataIfOk(response) {
  if (response.ok) {
    return await response.json();
  }
  throw new Error(`Response was not ok: ${response}`);
}