# 👻 From the Other Side

A platform for sharing ghostly encounters and paranormal sightings, built with vanilla Node.js.

## 📖 About

**From the Other Side** is a web application that allows users to read and share their supernatural experiences. Whether you've encountered a phantom, witnessed unexplainable events, or have a chilling story to tell—this is the place to document it.

## ✨ Features

- **Browse Sightings** - Read paranormal encounters submitted by the community
- **Upload Your Story** - Share your own ghostly experiences with others
- **Real-time News Feed** - Server-Sent Events (SSE) powered news updates with random spooky stories
- **Input Sanitization** - Protection against XSS attacks using `sanitize-html`
- **Event-Driven Alerts** - Automatic notifications to "Ghost Hunters" when new sightings are added

## 🛠️ Tech Stack

- **Runtime**: Node.js (ES Modules)
- **Server**: Native `http` module (no Express)
- **Data Storage**: JSON file-based storage
- **Real-time**: Server-Sent Events (SSE)
- **Security**: `sanitize-html` for input sanitization
- **Architecture**: Event-driven with Node.js `EventEmitter`

## 📁 Project Structure

```
from-the-other-side/
├── server.js              # Main server entry point
├── data/
│   ├── data.json          # Sightings database
│   └── stories.js         # News feed stories
├── events/
│   └── sightingEvents.js  # Event emitter for sightings
├── handlers/
│   └── routeHandlers.js   # API route handlers
├── public/                # Static frontend files
│   ├── index.html         # Homepage
│   ├── sightings.html     # View sightings page
│   ├── upload-sighting.html # Submit sighting form
│   ├── news.html          # Live news feed
│   └── ...
└── utils/
    ├── addNewSighting.js  # Add sighting to database
    ├── createAlert.js     # Alert ghost hunters
    ├── getData.js         # Read sightings data
    ├── parseJSONBody.js   # Parse request body
    ├── sanitizeInput.js   # Sanitize user input
    ├── sendResponse.js    # HTTP response helper
    └── serveStatic.js     # Static file server
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/semizemes/from-the-other-side.git
   cd from-the-other-side
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

## 📡 API Endpoints

| Method | Endpoint     | Description                          |
|--------|--------------|--------------------------------------|
| GET    | `/api`       | Retrieve all sightings               |
| POST   | `/api`       | Submit a new sighting                |
| GET    | `/api/news`  | SSE stream for real-time news feed   |

### POST `/api` Request Body

```json
{
  "location": "City, Country",
  "timeStamp": "Date and time",
  "title": "Sighting title",
  "text": "Detailed description of the encounter"
}
```

## 🔒 Security

User input is sanitized using the `sanitize-html` library to prevent XSS (Cross-Site Scripting) attacks before storing any data.

## 👤 Author

**Abbos Soatmurodov**

