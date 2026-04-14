export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { ll, radius } = req.query;
  if (!ll) {
    return res.status(400).json({ error: 'Missing required parameter: ll (lat,lng)' });
  }
  const key = process.env.FSQ_KEY;
  if (!key) {
    return res.status(500).json({ error: 'FSQ_KEY environment variable is not configured in Vercel' });
  }
  try {
    const fields = 'fsq_id,name,geocodes,location,categories,distance,rating,hours,tel,website';
    const searchRadius = parseInt(radius) || 1000;
    const url = `https://api.foursquare.com/v3/places/search?ll=${encodeURIComponent(ll)}&radius=${searchRadius}&categories=13000&limit=50&fields=${fields}`;
    const response = await fetch(url, {
      headers: {
        'Authorization': key,
        'Accept': 'application/json'
      }
    });
    if (!response.ok) {
      const errText = await response.text();
      return res.status(response.status).json({ error: 'Foursquare API error: ' + errText });
    }
    const data = await response.json();
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=60');
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ error: 'Internal server error: ' + e.message });
  }
}
