import fs from "node:fs/promises";
import path from "node:path";

export async function addNewSighting(newSighting) {
  try {
    const pathJSON = path.join("data", "data.json");
    const existingData = await fs.readFile(pathJSON, "utf8");
    const JSONArray = JSON.parse(existingData);
    JSONArray.push(newSighting);
    await fs.writeFile(pathJSON, JSON.stringify(JSONArray, null, 2), "utf8");
  } catch (err) {
    throw new Error(err);
  }
}
