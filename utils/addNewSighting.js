import fs from "node:fs/promises";
import path from "node:path";

export async function addNewSighting(newSighting) {
  try {
    const __dirname = import.meta.dirname;
    const baseDir = path.join(__dirname, "..");
    const dataJSON = path.join(baseDir, 'data', 'data.json')
    // console.log(dataJSON); //D:\Scrimba\NodeJS\from-the-other-side\data\data.json

    // console.log(newSighting);
//            {
//          location: '1231',
//          timeStamp: '12 March 2004 at 23:13',
//          text: '12312',
//          title: 'asd'
//              }
    const existingData = await fs.readFile(dataJSON, 'utf8');
    // console.log(typeof existingData); //bu string data, shunig uchun shunchaki yangi obektni qo'shib bo'lmaydi
    
    const JSONArray = JSON.parse(existingData)
    // console.log(typeof JSONArray); // bu ujee array, shunchun yangi kelgan obejctni bunga push qilish mumkin

    JSONArray.push(newSighting)
    console.log(JSONArray);
    
    
    
  } catch (err) {

  }
}
