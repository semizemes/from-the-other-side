import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";

export async function handleGet(res) {
  const response = await getData();
  const data = JSON.stringify(response);

  sendResponse(res, 200, "application/json", data);
}
