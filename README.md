# 🍜 Radius- Office Lunch OS

> **Live Demo:** [radius-blush.vercel.app](https://radius-blush.vercel.app)

Radius is a team lunch coordination app that helps office teams discover nearby restaurants, vote on where to eat, build a shared cart, and track ordering history- all in one place, with no backend required.

---

## Features

**Restaurant Discovery**
- Automatically detects your location and surfaces nearby restaurants, cafes, and food spots using **OpenStreetMap + Overpass API**- 100% free, no API key needed
- Finds local gems (not just chains) across 7 place types: restaurants, cafes, fast food, bars, pubs, food courts, and ice cream shops
- Interactive **Leaflet.js map** with walk-time rings (5 / 10 / 15 min) and colour-coded markers
- Address autocomplete powered by **Nominatim** (free geocoding)

**Team Sync**
- Real-time shared voting- everyone on the team sees live vote counts
- One-click ordering coordination and shared cart
- Firebase-backed- no server to run, works instantly in any browser

**Filters & Sorting**
- Filter by walkable vs. delivery, cuisine type, rating, open now, and "haven't tried yet"
- Sort by distance or rating
- Quick-filter chips update the map and list simultaneously

**History & Ratings**
- Team ordering history with date stamps
- Mark places as tried, leave ratings
- Persisted per-team in Firebase

---

## Tech Stack

| Layer | Technology |
|---|---|
| Map rendering | [Leaflet.js](https://leafletjs.com) v1.9.4 |
| Map tiles | [OpenStreetMap](https://www.openstreetmap.org) |
| Place search | [Overpass API](https://overpass-api.de) (with kumi.systems fallback) |
| Geocoding | [Nominatim](https://nominatim.org) |
| Real-time sync | [Firebase Realtime Database](https://firebase.google.com) |
| Hosting | [Vercel](https://vercel.com) |
| Frontend | Vanilla HTML/CSS/JS- zero build step |

No Google Maps. No paid APIs. No Node.js. Just open-source data.

---

## Setup

### 1. Clone & open
```bash
git clone https://github.com/Debdatta21/radius.git
cd radius
```

### 2. Configure Firebase
Copy `.env.example` to `.env` and fill in your Firebase project credentials:
```
FIREBASE_API_KEY=...
FIREBASE_AUTH_DOMAIN=...
FIREBASE_DATABASE_URL=...
FIREBASE_PROJECT_ID=...
FIREBASE_APP_ID=...
```

Then run `build.sh` to inject the keys:
```bash
bash build.sh
```

> **Note:** The map and restaurant discovery work with zero configuration- they use free public APIs (Overpass, Nominatim, OpenStreetMap tiles) that require no key.

### 3. Deploy
Push to `main` - Vercel auto-deploys on every commit.

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute.

---

## License

This project is licensed under the MIT License- see [LICENSE](LICENSE) for details.
