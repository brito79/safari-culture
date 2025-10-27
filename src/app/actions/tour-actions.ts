'use server';

import { revalidatePath } from 'next/cache';
import * as tourDb from '@/lib/db/tours';
import * as rateDb from '@/lib/db/rates';

export async function getCampsAction() {
  try {
    const tours = await tourDb.getAllTours();
    return { success: true, data: tours };
  } catch (error) {
    console.error('Error fetching camps:', error);
    return { success: false, error: 'Failed to fetch camps' };
  }
}

export async function getCampBySlugAction(slug: string) {
  try {
    const tour = await tourDb.getTourBySlug(slug);
    if (!tour) {
      return { success: false, error: 'Camp not found' };
    }
    
    // Get rates for this tour
    const rates = await rateDb.getRatesByTourId(tour.id);
    
    return { 
      success: true, 
      data: { 
        ...tour, 
        rates 
      } 
    };
  } catch (error) {
    console.error('Error fetching camp:', error);
    return { success: false, error: 'Failed to fetch camp details' };
  }
}

export async function createCampAction(formData: FormData) {
  try {
    const data = {
      name: formData.get('name') as string,
      slug: formData.get('slug') as string,
      location: formData.get('location') as string,
      description: formData.get('description') as string,
      short_description: formData.get('short_description') as string,
      max_guests: parseInt(formData.get('max_guests') as string),
      status: formData.get('status') as 'draft' | 'published',
    };
    
    const id = await tourDb.createTour(data);
    revalidatePath('/admin/camps');
    
    return { success: true, data: { id } };
  } catch (error) {
    console.error('Error creating camp:', error);
    return { success: false, error: 'Failed to create camp' };
  }
}