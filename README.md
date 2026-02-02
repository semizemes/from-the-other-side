# From the Other Side

A platform for sharing ghostly encounters and paranormal sightings.

## Features

- View paranormal sightings from other users
- Upload your own sightings (requires server)
- Responsive design with spooky styling

## Development

### Running locally with server

```bash
npm install
npm start
```

The server will start at http://localhost:8000

### API Endpoints

- `GET /api` - Get all sightings
- `POST /api` - Add a new sighting

## Deployment with GitHub Pages

This project can be deployed as a static site using GitHub Pages. Note that the upload functionality requires a backend server and won't work on static hosting.

### Setup Steps

1. **Enable GitHub Pages in your repository settings:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment", select **Source**: **GitHub Actions**

2. **Push to main branch:**
   - The GitHub Actions workflow will automatically deploy your site
   - The workflow is defined in `.github/workflows/deploy.yml`

3. **Access your site:**
   - Your site will be available at: `https://<username>.github.io/from-the-other-side/`

### What works on GitHub Pages

- ✅ Homepage
- ✅ Viewing sightings (reads from static `data.json`)
- ✅ All styling and images
- ❌ Uploading new sightings (requires backend server)

### Updating sightings data

To add new sightings for the static site, edit `data/data.json` directly and push to the main branch.

## License

ISC
