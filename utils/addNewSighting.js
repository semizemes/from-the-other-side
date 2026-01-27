import fs from "node:fs/promises";
import path from "node:path";

export async function addNewSighting(newSighting) {
  try {
    const __dirname = import.meta.dirname;
    const baseDir = path.join(__dirname, "..");
    const filePath = path.join(baseDir, 'data', 'data.json')
    console.log(filePath);

    console.log(newSighting);
    const existingData = await fs.readFile();
  } catch (err) {}
}
