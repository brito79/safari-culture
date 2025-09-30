#!/bin/bash

# Script to fix all image paths from spaces to hyphens
# This matches the renamed files in public/images

echo "Fixing image paths to use hyphens instead of spaces..."

# Find all TypeScript/JavaScript files and replace image paths
find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's|Wilderness Doro Nawas|Wilderness-Doro-Nawas|g'
find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's|Wilderness Little Kulala|Wilderness-Little-Kulala|g'
find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's|Wilderness Damaraland Camp|Wilderness-Damaraland-Camp|g'
find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's|Wilderness Hoanib Skeleton|Wilderness-Hoanib-Skeleton|g'

echo "Image paths updated successfully!"