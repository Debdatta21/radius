#!/bin/bash
# Vercel build script — injects API keys from environment variables.
# Keys are stored securely in Vercel's environment settings, never in this repo.

# ── Google Maps ──
if [ -z "$GOOGLE_MAPS_API_KEY" ]; then
  echo "ERROR: GOOGLE_MAPS_API_KEY is not set. Add it in Vercel → Project Settings → Environment Variables."
  exit 1
fi

# ── Firebase ──
if [ -z "$FIREBASE_API_KEY" ] || [ -z "$FIREBASE_PROJECT_ID" ] || [ -z "$FIREBASE_APP_ID" ] || [ -z "$FIREBASE_SENDER_ID" ]; then
  echo "ERROR: One or more Firebase environment variables are missing."
  echo "Required: FIREBASE_API_KEY, FIREBASE_PROJECT_ID, FIREBASE_APP_ID, FIREBASE_SENDER_ID"
  exit 1
fi

sed -i "s|__GOOGLE_MAPS_API_KEY__|${GOOGLE_MAPS_API_KEY}|g" index.html
sed -i "s|__FIREBASE_API_KEY__|${FIREBASE_API_KEY}|g" index.html
sed -i "s|__FIREBASE_PROJECT_ID__|${FIREBASE_PROJECT_ID}|g" index.html
sed -i "s|__FIREBASE_APP_ID__|${FIREBASE_APP_ID}|g" index.html
sed -i "s|__FIREBASE_SENDER_ID__|${FIREBASE_SENDER_ID}|g" index.html

echo "✅ All keys injected successfully."
