#!/bin/bash
# Vercel build script — injects the Google Maps API key from environment variable.
# The key is stored securely in Vercel's environment settings, never in this repo.

if [ -z "$GOOGLE_MAPS_API_KEY" ]; then
  echo "ERROR: GOOGLE_MAPS_API_KEY environment variable is not set."
  echo "Please add it in Vercel → Project Settings → Environment Variables."
  exit 1
fi

sed -i "s|__GOOGLE_MAPS_API_KEY__|${GOOGLE_MAPS_API_KEY}|g" index.html
echo "✅ API key injected successfully."
