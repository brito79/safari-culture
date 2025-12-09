/**
 * Utility functions for camp name and URL slug conversions
 */

/**
 * Converts a camp display name to a URL-friendly slug
 * Examples:
 * - "Little Kulala" -> "little-kulala"
 * - "Doro Nawas" -> "doro-nawas"
 * - "Hoanib Skeleton Coast" -> "hoanib-skeleton-coast"
 * 
 * @param campName - The display name of the camp
 * @returns URL-friendly slug in lowercase with hyphens
 */
export function campNameToSlug(campName: string): string {
  return campName
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
}

/**
 * Converts a URL slug to the database name format
 * Examples:
 * - "little-kulala" -> "Wilderness-Little-Kulala"
 * - "doro-nawas" -> "Wilderness-Doro-Nawas"
 * - "wilderness-doro-nawas" -> "Wilderness-Doro-Nawas" (handles existing prefix)
 * - "hoanib-skeleton-coast" -> "Wilderness-Hoanib-Skeleton-Coast"
 * 
 * @param slug - The URL slug
 * @returns Database name format with "Wilderness-" prefix
 */
export function slugToCampDbName(slug: string): string {
  // Remove 'wilderness-' prefix if it exists in the slug
  const cleanSlug = slug.replace(/^wilderness-/i, '');
  
  const titleCased = cleanSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('-');
  
  return `Wilderness-${titleCased}`;
}

/**
 * Extracts the camp name from a database name
 * Examples:
 * - "Wilderness-Little-Kulala" -> "Little Kulala"
 * - "Wilderness-Doro-Nawas" -> "Doro Nawas"
 * 
 * @param dbName - The database name with "Wilderness-" prefix
 * @returns Display name without prefix
 */
export function dbNameToCampName(dbName: string): string {
  return dbName
    .replace(/^Wilderness-/, '')
    .replace(/-/g, ' ');
}

/**
 * Finds matching camp name from database by comparing the text after "Wilderness"
 * This handles both hyphenated and space-separated formats
 * 
 * Examples:
 * - slug: "wilderness-hoanib-skeleton-coast" 
 *   matches: "Wilderness Hoanib Skeleton Coast"
 * 
 * - slug: "wilderness-damaraland-camp"
 *   matches: "Wilderness Damaraland Camp"
 * 
 * @param slug - The URL slug (e.g., "wilderness-hoanib-skeleton-coast")
 * @param availableNames - Array of camp names from database
 * @returns Matching database name or null
 */
export function findMatchingCampName(slug: string, availableNames: string[]): string | null {
  // Remove 'wilderness' prefix and normalize the slug
  const cleanSlug = slug.replace(/^wilderness-/i, '').toLowerCase();
  const slugParts = cleanSlug.split('-').filter(Boolean);
  
  // Try to find a match by comparing normalized versions
  for (const dbName of availableNames) {
    // Remove 'Wilderness' prefix from database name and normalize
    const cleanDbName = dbName.replace(/^Wilderness\s*/i, '').toLowerCase();
    const dbParts = cleanDbName.split(/[\s-]+/).filter(Boolean);
    
    // Check if all slug parts match the database name parts
    if (slugParts.length === dbParts.length) {
      const allMatch = slugParts.every((part, index) => 
        part === dbParts[index]
      );
      
      if (allMatch) {
        return dbName; // Return the original database name
      }
    }
  }
  
  return null;
}
