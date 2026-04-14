export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { ll, radius } = req.query;
  if (!ll) {
    return res.status(400).json({ error: 'Missing required parameter: ll' });
  }
  const clientId = process.env.FSQ_CLIENT_ID;
  const clientSecret = process.env.FSQ_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return res.status(500).json({ error: 'FSQ_CLIENT_ID and FSQ_CLIENT_SECRET not configured in Vercel' });
  }
  try {
    const searchRadius = parseInt(radius) || 1000;
    const url = `https://api.foursquare.com/v2/venues/search?ll=${encodeURIComponent(ll)}&intent=browse&radius=${searchRadius}&categoryId=4d4b7105d754a06374d81259&limit=50&v=20231201&client_id=${clientId}&client_secret=${clientSecret}`;
    const response = await fetch(url);
    if (!response.ok) {
      const errText = await response.text();
      return res.status(response.status).json({ error: 'Foursquare API error: ' + errText });
    }
    const data = await response.json();
    const results = ((data.response && data.response.venues) || []).map(function(v) {
      return {
        fsq_id: v.id,
        name: v.name,
        geocodes: { main: { latitude: v.location.lat, longitude: v.location.lng } },
        location: { address: v.location.address || '' },
        categories: v.categories || [],
        distance: v.location.distance || 0,
        rating: null,
        hours: (v.hours && v.hours.status) ? { display: v.hours.status } : null,
        tel: (v.contact && v.contact.phone) || null,
        website: v.url || null
      };
    });
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=60');
    return res.status(200).json({ results: results });
  } catch (e) {
    return res.status(500).json({ error: 'Internal server error: ' + e.message });
  }
}
