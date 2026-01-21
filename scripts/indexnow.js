// IndexNow - Auto-ping Bing/Yandex after deploy
// Run with: node scripts/indexnow.js

const INDEXNOW_KEY = 'e202baeb69a813b9004c3275c59ae0c8';
const HOST = 'thedolceway.com';

const urls = [
  `https://${HOST}/`,
  `https://${HOST}/apps`,
  `https://${HOST}/blog`,
  `https://${HOST}/about`,
  `https://${HOST}/connect`,
];

async function pingIndexNow() {
  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    urlList: urls
  };

  try {
    // Ping Bing
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (response.ok || response.status === 202) {
      console.log('✓ IndexNow: Submitted', urls.length, 'URLs to Bing/Yandex');
    } else {
      console.log('✗ IndexNow failed:', response.status);
    }
  } catch (err) {
    console.error('Error:', err.message);
  }
}

pingIndexNow();
