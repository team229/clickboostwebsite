#!/usr/bin/env bash
set -euo pipefail

BUCKET="${1:-${S3_BUCKET:-}}"
if [ -z "$BUCKET" ]; then
  echo "Usage: $0 <s3-bucket-name>"
  echo "Or set S3_BUCKET environment variable"
  exit 1
fi

ENDPOINT="${S3_ENDPOINT_URL:-}"
AWS_ARGS=()
if [ -n "$ENDPOINT" ]; then
  AWS_ARGS+=(--endpoint-url "$ENDPOINT")
fi

echo "Building Tailwind CSS..."
npx tailwindcss -i ./input.css -o ./styles.css --minify

echo "Deploying to s3://$BUCKET ..."

aws s3 sync . "s3://$BUCKET" \
  "${AWS_ARGS[@]}" \
  --exclude ".git/*" \
  --exclude ".gitignore" \
  --exclude "node_modules/*" \
  --exclude "package.json" \
  --exclude "package-lock.json" \
  --exclude "tailwind.config.js" \
  --exclude "input.css" \
  --exclude "deploy.sh" \
  --exclude ".github/*" \
  --delete

echo "Setting cache headers..."
aws s3 cp "s3://$BUCKET" "s3://$BUCKET" \
  "${AWS_ARGS[@]}" \
  --exclude "*" \
  --include "*.html" \
  --metadata-directive REPLACE \
  --cache-control "no-cache, no-store, must-revalidate" \
  --recursive

aws s3 cp "s3://$BUCKET" "s3://$BUCKET" \
  "${AWS_ARGS[@]}" \
  --exclude "*" \
  --include "styles.css" \
  --metadata-directive REPLACE \
  --cache-control "public, max-age=31536000, immutable" \
  --recursive

echo "Done!"
