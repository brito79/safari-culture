#!/bin/bash

# Configuration
PROJECT_DIR="./"
LOCAL_PREFIX="images/"
S3_BASE="https://namibiawilderness-image-store.s3.us-east-1.amazonaws.com/images"
EXTENSIONS=("js" "jsx" "ts" "tsx" "md")

# Function to process each file
process_file() {
  local file="$1"
  local temp_file="${file}.tmp"

  # Replace local image paths with S3 URLs (spaces already renamed with hyphens)
  sed -E "s@(['\"\`])${LOCAL_PREFIX}([^'\"]+)\\1@\1${S3_BASE}/\2\1@g" "$file" > "$temp_file" && mv "$temp_file" "$file"
  echo "✅ Updated: $file"
}

# Find and process files, skipping node_modules
for ext in "${EXTENSIONS[@]}"; do
  find "$PROJECT_DIR" -type f -name "*.${ext}" ! -path "*/node_modules/*" | while read -r file; do
    process_file "$file"
  done
done
