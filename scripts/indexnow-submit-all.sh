#!/bin/bash

# IndexNow Submit All URLs Script
# Submits all URLs from sitemap to IndexNow for instant indexing on Bing, Yandex, DuckDuckGo

SITE_URL="https://www.thedolceway.com"
INDEXNOW_KEY="e202baeb69a813b9004c3275c59ae0c8"

echo "🚀 Extracting URLs from sitemap..."

# Extract all URLs from sitemap (macOS compatible)
URLS=$(curl -s "$SITE_URL/sitemap-0.xml" | tr '>' '\n' | grep -o 'https://www.thedolceway.com[^<]*')

# Convert to JSON array
URL_ARRAY="["
first=true
count=0
for url in $URLS; do
  if [ "$first" = true ]; then
    URL_ARRAY="$URL_ARRAY\"$url\""
    first=false
  else
    URL_ARRAY="$URL_ARRAY,\"$url\""
  fi
  ((count++))
done
URL_ARRAY="$URL_ARRAY]"

echo "📊 Found $count URLs to submit"

# IndexNow has a limit of 10,000 URLs per request
if [ $count -gt 10000 ]; then
  echo "⚠️  Warning: More than 10,000 URLs. Only first 10,000 will be submitted."
fi

echo ""
echo "📤 Submitting to IndexNow..."

# Submit to IndexNow
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json" \
  -d "{
    \"host\": \"www.thedolceway.com\",
    \"key\": \"$INDEXNOW_KEY\",
    \"keyLocation\": \"$SITE_URL/$INDEXNOW_KEY.txt\",
    \"urlList\": $URL_ARRAY
  }")

HTTP_CODE=$(echo "$RESPONSE" | tail -1)

if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "202" ]; then
  echo "✅ Successfully submitted $count URLs to IndexNow!"
  echo "   HTTP Status: $HTTP_CODE"
  echo ""
  echo "🎉 Your URLs will be indexed by:"
  echo "   - Bing"
  echo "   - Yandex"
  echo "   - DuckDuckGo"
  echo "   - Seznam.cz"
else
  echo "⚠️  IndexNow returned HTTP $HTTP_CODE"
  echo "   Response: $(echo "$RESPONSE" | head -1)"
fi
