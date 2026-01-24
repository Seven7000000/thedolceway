// IndexNow ping script - runs after every build
// Notifies Bing, Yandex, DuckDuckGo of new/updated content

const SITE_URL = 'https://www.thedolceway.com';
const INDEXNOW_KEY = 'e202baeb69a813b9004c3275c59ae0c8';

async function pingIndexNow() {
  console.log('🔍 Pinging IndexNow after build...');

  // Key pages to always notify about
  const priorityUrls = [
    `${SITE_URL}/`,
    `${SITE_URL}/blog/`,
    `${SITE_URL}/apps/`,
    `${SITE_URL}/about/`,
  ];

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: 'www.thedolceway.com',
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: priorityUrls
      })
    });

    if (response.ok) {
      console.log('✅ IndexNow pinged successfully!');
      console.log('   Notified: Bing, Yandex, DuckDuckGo, Seznam');
    } else {
      console.log(`⚠️  IndexNow returned ${response.status}`);
    }
  } catch (error) {
    console.log('⚠️  IndexNow ping failed:', error.message);
  }

  // Also ping Google
  try {
    const googleResponse = await fetch(
      `https://www.google.com/ping?sitemap=${SITE_URL}/sitemap-index.xml`
    );
    if (googleResponse.ok) {
      console.log('✅ Google sitemap ping sent');
    }
  } catch (error) {
    console.log('⚠️  Google ping failed:', error.message);
  }
}

pingIndexNow();
