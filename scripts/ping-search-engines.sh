#!/bin/bash

# Ping Search Engines Script for thedolceway.com
# Run this after every deploy to notify search engines of updates

SITE_URL="https://www.thedolceway.com"
SITEMAP_URL="$SITE_URL/sitemap-index.xml"
INDEXNOW_KEY="e202baeb69a813b9004c3275c59ae0c8"

echo "🔍 Pinging search engines for $SITE_URL..."

# 1. Ping Google
echo "📍 Pinging Google..."
curl -s "https://www.google.com/ping?sitemap=$SITEMAP_URL" > /dev/null && echo "   ✓ Google pinged" || echo "   ✗ Google failed"

# 2. Ping Bing via IndexNow (also covers Yandex, DuckDuckGo, Seznam)
echo "📍 Pinging Bing via IndexNow..."
curl -s -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json" \
  -d "{
    \"host\": \"www.thedolceway.com\",
    \"key\": \"$INDEXNOW_KEY\",
    \"keyLocation\": \"$SITE_URL/$INDEXNOW_KEY.txt\",
    \"urlList\": [
      \"$SITE_URL/\",
      \"$SITE_URL/blog/\",
      \"$SITE_URL/apps/\",
      \"$SITE_URL/about/\"
    ]
  }" > /dev/null && echo "   ✓ IndexNow pinged (Bing, Yandex, DuckDuckGo)" || echo "   ✗ IndexNow failed"

# 3. Ping Bing directly
echo "📍 Pinging Bing Webmaster..."
curl -s "https://www.bing.com/ping?sitemap=$SITEMAP_URL" > /dev/null && echo "   ✓ Bing pinged" || echo "   ✗ Bing failed"

echo ""
echo "✅ Search engine pings complete!"
echo ""
echo "Next steps for better indexing:"
echo "  1. Submit sitemap to Google Search Console: https://search.google.com/search-console"
echo "  2. Submit sitemap to Bing Webmaster Tools: https://www.bing.com/webmasters"
echo "  3. Share your content on social media for backlinks"
