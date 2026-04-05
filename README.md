# 🍜 Radius — Office Lunch OS

> **Live Demo:** [debdatta21.github.io/radius](https://debdatta21.github.io/radius)

Radius is a team lunch coordination app that helps office teams discover nearby restaurants, vote on where to eat, build a shared cart, and track ordering history — all in one place, with no backend required.

---

## Features

**Restaurant Discovery**
- Automatically detects your location and surfaces nearby restaurants, cafes, and food spots using the Google Maps Places API
- Finds local hidden gems (not just chains) through multi-pass keyword and cuisine searches
- Live search fallback — type any restaurant name and it searches Google in real time if it's not already in the list
- Filter by cuisine type, rating, price range, and distance

**Team Voting**
- Create or join a team with a shared team code
- Every team member votes thumbs up/down on restaurants each day
- Running vote tally visible to the whole team in real time

**Shared Cart**
- Add dishes to a shared daily team cart (Editors and Managers only)
- Links out to DoorDash, Uber Eats, and Grubhub for easy ordering
- Cart resets each day automatically

**Team Management**
- Role-based access: Manager, Editor, Guest
- See all team members and their roles in the nav dropdown
- Team stats track total orders placed

**No backend required** — everything runs in the browser using the Google Maps Places API and localStorage.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla HTML, CSS, JavaScript |
| Maps & Places | Google Maps JavaScript API + Places API |
| Storage | Browser localStorage |
| Hosting | GitHub Pages |

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Debdatta21/radius.git
cd radius
```

### 2. Get a Google Maps API key

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a project and enable **Maps JavaScript API** and **Places API**
3. Create an API key under **APIs & Services → Credentials**
4. Restrict the key to your domain under **Application restrictions → Websites**

### 3. Add your API key

Open `index.html` and find this line near the bottom:

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>
```

Replace `YOUR_API_KEY` with your actual key.

### 4. Open in browser

Since this is a static app, you can open `index.html` directly in your browser or serve it with any static file server:

```bash
npx serve .
```

---

## How to Use

### Sign Up / Log In
- Open the app and create an account with your name and email
- Create a new team or join an existing one with a team code

### Discover Restaurants
- The app asks for your location and loads nearby food spots
- Use the filters to narrow by cuisine, rating, or distance
- Search by name — if it's not loaded, the app queries Google live

### Vote
- Click the thumbs up/down on any restaurant card
- Your whole team's votes are tallied and shown in real time

### Add to Cart
- Click any restaurant → open the detail panel → **Add to Cart**
- Choose your dish, quantity, and notes
- The Manager clicks the delivery link (DoorDash / Uber Eats / Grubhub) to place the order

### Team Roles

| Role | Can Vote | Can Edit Cart | Can Manage Team |
|---|---|---|---|
| Guest | ✅ | ❌ | ❌ |
| Editor | ✅ | ✅ | ❌ |
| Manager | ✅ | ✅ | ✅ |

---

## Project Structure

```
radius/
└── index.html      # The entire app — HTML, CSS, and JavaScript in one file
```

This is intentionally a single-file app for simplicity and easy deployment.

---

## Deployment

This app is deployed via **GitHub Pages**:

1. Push `index.html` to the `main` branch (root of the repo)
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch → main → / (root)**
4. Your app will be live at `https://<your-username>.github.io/<repo-name>/`

---

## Security Note

The Google Maps API key is visible in the HTML source (unavoidable for client-side apps). To prevent misuse:
- Restrict the key to your domain in Google Cloud Console under **Application restrictions → Websites**
- Also restrict which APIs the key can call under **API restrictions**

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute.

---

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.
