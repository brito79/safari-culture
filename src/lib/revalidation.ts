'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

/**
 * Revalidation utilities for cache management
 * Ensures data changes reflect immediately across the application
 */

/**
 * Revalidate all camp-related pages and data
 * Call this after creating, updating, or deleting camps
 */
export async function revalidateCamps() {
  // Revalidate all camp pages
  revalidatePath('/camps');
  revalidatePath('/camps/[name]/rates', 'page');
  
  // Revalidate API routes
  revalidatePath('/api/camps');
  
  // Revalidate by cache tag
  revalidateTag('camps');
  
  console.log('✅ Revalidated: Camps data');
}

/**
 * Revalidate all rate-related pages and data
 * Call this after creating, updating, or deleting rates
 */
export async function revalidateRates() {
  // Revalidate rate pages
  revalidatePath('/camps/[name]/rates', 'page');
  revalidatePath('/test-rates');
  
  // Revalidate API routes
  revalidatePath('/api/rates');
  
  // Revalidate by cache tag
  revalidateTag('rates');
  revalidateTag('all-camps');
  
  console.log('✅ Revalidated: Rates data');
}

/**
 * Revalidate a specific camp's rate page
 * Call this after updating rates for a specific camp
 * 
 * @param campName - The camp name or slug
 */
export async function revalidateCampRates(campName: string) {
  // Revalidate specific camp rate page
  revalidatePath(`/camps/${campName}/rates`);
  
  // Revalidate by cache tag
  revalidateTag(`camp-${campName}`);
  
  console.log(`✅ Revalidated: ${campName} rates`);
}

/**
 * Revalidate all data across the application
 * Use this for bulk updates or maintenance
 */
export async function revalidateAll() {
  await revalidateCamps();
  await revalidateRates();
  
  // Revalidate home page
  revalidatePath('/');
  
  console.log('✅ Revalidated: All application data');
}

/**
 * Revalidate contact/inquiry related data
 */
export async function revalidateInquiries() {
  revalidatePath('/api/inquiries');
  revalidateTag('inquiries');
  
  console.log('✅ Revalidated: Inquiries data');
}
