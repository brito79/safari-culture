import { NextResponse } from 'next/server';
import { query } from '@/lib/db/db';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Generate application ID
    const applicationId = `APP-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    
    // Insert into database
    const sql = `
      INSERT INTO kyc_applications (
        application_id,
        first_name,
        last_name,
        email,
        phone,
        date_of_birth,
        nationality,
        passport_number,
        passport_expiry,
        preferred_start_date,
        preferred_end_date,
        flexible_dates,
        number_of_adults,
        number_of_children,
        children_ages,
        selected_camps,
        total_nights,
        selected_experiences,
        wildlife_interests,
        photography_level,
        dietary_restrictions,
        other_dietary,
        medical_conditions,
        mobility_needs,
        special_requests,
        emergency_contact_name,
        emergency_contact_relationship,
        emergency_contact_phone,
        emergency_contact_email,
        agreed_to_terms,
        marketing_consent,
        status,
        submitted_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', NOW())
    `;
    
    await query(sql, [
      applicationId,
      data.personalInfo.firstName,
      data.personalInfo.lastName,
      data.personalInfo.email,
      data.personalInfo.phone,
      data.personalInfo.dateOfBirth,
      data.personalInfo.nationality,
      data.personalInfo.passportNumber,
      data.personalInfo.passportExpiry,
      data.travelDetails.preferredStartDate,
      data.travelDetails.preferredEndDate,
      data.travelDetails.flexibleDates,
      data.travelDetails.numberOfAdults,
      data.travelDetails.numberOfChildren,
      JSON.stringify(data.travelDetails.childrenAges || []),
      JSON.stringify(data.campSelection.selectedCamps),
      data.campSelection.totalNights || 0,
      JSON.stringify(data.experiencePreferences?.selectedExperiences || []),
      JSON.stringify(data.experiencePreferences?.wildlifeInterests || []),
      data.experiencePreferences?.photographyLevel || '',
      JSON.stringify(data.specialRequirements?.dietaryRestrictions || []),
      data.specialRequirements?.otherDietary || '',
      JSON.stringify(data.specialRequirements?.medicalConditions || []),
      JSON.stringify(data.specialRequirements?.mobilityNeeds || []),
      data.specialRequirements?.specialRequests || '',
      data.emergencyContact.name,
      data.emergencyContact.relationship,
      data.emergencyContact.phone,
      data.emergencyContact.email,
      data.agreedToTerms,
      data.marketingConsent,
    ]);
    
    console.log(`✅ KYC Application submitted: ${applicationId}`);
    
    // TODO: Send confirmation email
    
    return NextResponse.json({
      success: true,
      applicationId,
      message: 'Application submitted successfully!'
    });
    
  } catch (error) {
    console.error('❌ Error submitting KYC application:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to submit application. Please try again.'
    }, { status: 500 });
  }
}
