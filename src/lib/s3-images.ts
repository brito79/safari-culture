// S3 Image utilities for Safari Culture project
// Handles conversion from local image paths to S3 URLs

const S3_BASE_URL = process.env.NEXT_PUBLIC_S3_BASE_URL || process.env.S3_BASE_URL || '';

/**
 * Converts a local image path to S3 URL
 * @param localPath - Path like '/images/doro-nawas/Wilderness-Doro-Nawas_1.jpg'
 * @returns S3 URL like 'https://namibiawilderness-image-store.s3.amazonaws.com/images/doro-nawas/Wilderness-Doro-Nawas_1.jpg'
 */
export function getS3ImageUrl(localPath: string): string {
  // Keep the full path including '/images/' since that's how you uploaded to S3
  const cleanPath = localPath.startsWith('/') ? localPath.slice(1) : localPath;
  
  // Construct S3 URL - your folder structure includes 'images/' folder
  return `${S3_BASE_URL}/${cleanPath}`;
}

/**
 * Converts multiple local image paths to S3 URLs
 * @param localPaths - Array of local image paths
 * @returns Array of S3 URLs
 */
export function getS3ImageUrls(localPaths: string[]): string[] {
  return localPaths.map(path => getS3ImageUrl(path));
}

/**
 * Image optimization helper for Next.js Image component
 * @param src - S3 image URL
 * @param width - Desired width
 * @param quality - Image quality (1-100)
 * @returns Optimized S3 URL with query parameters
 */
export function optimizeS3Image(src: string, width: number, quality: number = 75): string {
  // For S3, we'll add query parameters for potential CDN optimization
  // You can integrate with AWS CloudFront or other image optimization services here
  return `${src}?w=${width}&q=${quality}`;
}

/**
 * Get all images for a specific camp from S3
 * @param campSlug - Camp identifier like 'doro-nawas'
 * @param imageCount - Number of images to return
 * @returns Array of S3 image URLs
 */
export function getCampImages(campSlug: string, imageCount: number = 10): string[] {
  const images: string[] = [];
  
  for (let i = 1; i <= imageCount; i++) {
    const imageName = `Wilderness-${formatCampName(campSlug)}_${i}.jpg`;
    // Include 'images/' folder since that's your S3 structure
    images.push(getS3ImageUrl(`https://namibiawilderness-image-store.s3.us-east-1.amazonaws.com/images/${campSlug}/${imageName}`));
  }
  
  return images;
}

/**
 * Format camp slug to proper camp name for image filename
 * @param slug - Camp slug like 'doro-nawas'
 * @returns Formatted name like 'Doro-Nawas'
 */
function formatCampName(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('-');
}

/**
 * Camp to image mapping
 * Maps camp slugs to their image folder structure in S3
 * Structure: images/folder/Wilderness-Name_X.jpg
 */
export const CAMP_IMAGE_CONFIG = {
  'doro-nawas': {
    folder: 'https://namibiawilderness-image-store.s3.us-east-1.amazonaws.com/images/doro-nawas',
    prefix: 'Wilderness-Doro-Nawas',
    count: 10,
  },
  'little-kulala': {
    folder: 'https://namibiawilderness-image-store.s3.us-east-1.amazonaws.com/images/little-kulala', 
    prefix: 'Wilderness-Little-Kulala',
    count: 5,
  },
  'damaraland-camp': {
    folder: 'https://namibiawilderness-image-store.s3.us-east-1.amazonaws.com/images/damaraland',
    prefix: 'Wilderness-Damaraland-Camp',
    count: 8,
  },
  'hoanib-skeleton': {
    folder: 'https://namibiawilderness-image-store.s3.us-east-1.amazonaws.com/images/hoanib-skeleton',
    prefix: 'Wilderness-Hoanib-Skeleton-Camp',
    count: 6,
  },
} as const;

/**
 * Get typed camp images based on configuration
 * @param campSlug - Camp identifier
 * @returns Array of S3 image URLs for the camp
 */
export function getTypedCampImages(campSlug: keyof typeof CAMP_IMAGE_CONFIG): string[] {
  const config = CAMP_IMAGE_CONFIG[campSlug];
  if (!config) return [];
  
  const images: string[] = [];
  for (let i = 1; i <= config.count; i++) {
    const imageName = `${config.prefix}_${i}.jpg`;
    // S3 URL: https://namibiawilderness-image-store.s3.amazonaws.com/images/folder/image.jpg
    images.push(`${S3_BASE_URL}/${config.folder}/${imageName}`);
  }
  
  return images;
}