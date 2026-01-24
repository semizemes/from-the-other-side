import http from "node:http" 
import { serveStatic } from "./utils/serveStatic.js";

const PORT = 8000

const __dirname = import.meta.dirname
console.log(__dirname);


const server = http.createServer((req, res) => {
    serveStatic(__dirname)
    res.setHeader("Content-Type", "text/html")
    res.statusCode = 200
    res.end("<html><h1>The server is working</h1></html>")
})

server.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`)
})