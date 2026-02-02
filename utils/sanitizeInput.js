import sanitizeHtml from "sanitize-html";

export default function sanitizeInput(parsedBody){
    const sanitizedData = {}
        for (const [key, value] of Object.entries(parsedBody)) {
          sanitizedData[key] = sanitizeHtml(value, {allowedTags: ["b"]})
        }
    return sanitizedData
}