#!/bin/bash

# Target directory
TARGET_DIR="./public/images"

# Recursively find files with spaces in their names
find "$TARGET_DIR" -depth -name "* *" | while IFS= read -r file; do
  # Get the directory and filename
  dir=$(dirname "$file")
  base=$(basename "$file")
  
  # Replace spaces with hyphens
  newbase=$(echo "$base" | tr ' ' '-')
  newfile="$dir/$newbase"
  
  # Rename the file
  mv "$file" "$newfile"
  echo "Renamed: $file → $newfile"
done
