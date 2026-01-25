import path from "node:path";
import fs from "node:fs/promises";

export async function getData() {
  const __dirname = import.meta.dirname
  const parentDir = path.join(__dirname, '..')
  // const content = path.join(parentDir, "/data/data.json")
  
  const content = path.join("data", 'data.json')
  console.log(content);

  try {
    const readPromise = await fs.readFile(content, "utf8")
    return JSON.parse(readPromise)
  } catch (err) {
    console.error(err)
    return []
  }
}
