"use client";

import { useState } from 'react';
import { useKYC } from '../KYCContext';
import FormNavigation from '../shared/FormNavigation';
import { useRouter } from 'next/navigation';

export default function Step7ReviewSubmit() {
  const { state, dispatch } = useKYC();
  const router = useRouter();
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async () => {
    if (!agreedToTerms) {
      dispatch({ 
        type: 'SET_ERRORS', 
        payload: { terms: 'You must agree to terms and conditions' } 
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const formData = {
        ...state.formData,
        agreedToTerms,
        marketingConsent,
      };
      
      const response = await fetch('/api/kyc/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Clear localStorage
        localStorage.removeItem('kyc-draft');
        localStorage.removeItem('kyc-step');
        
        // Redirect to success page
        router.push(`/apply/success?id=${result.applicationId}`);
      } else {
        alert(result.message || 'Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl sm:text-3xl font-light text-stone-900 mb-2">
          Review & Submit
        </h2>
        <p className="text-stone-600">
          Please review your information before submitting
        </p>
      </div>
      
      {/* Personal Info */}
      <div className="p-6 bg-stone-50 rounded-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-stone-900">Personal Information</h3>
          <button
            onClick={() => dispatch({ type: 'SET_STEP', payload: 1 })}
            className="text-sm text-sunset-600 hover:text-sunset-700"
          >
            Edit
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-stone-500">Name:</span>
            <p className="text-stone-900">{state.formData.personalInfo?.firstName} {state.formData.personalInfo?.lastName}</p>
          </div>
          <div>
            <span className="text-stone-500">Email:</span>
            <p className="text-stone-900">{state.formData.personalInfo?.email}</p>
          </div>
          <div>
            <span className="text-stone-500">Phone:</span>
            <p className="text-stone-900">{state.formData.personalInfo?.phone}</p>
          </div>
          <div>
            <span className="text-stone-500">Nationality:</span>
            <p className="text-stone-900">{state.formData.personalInfo?.nationality}</p>
          </div>
        </div>
      </div>
      
      {/* Travel Details */}
      <div className="p-6 bg-stone-50 rounded-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-stone-900">Travel Details</h3>
          <button
            onClick={() => dispatch({ type: 'SET_STEP', payload: 2 })}
            className="text-sm text-sunset-600 hover:text-sunset-700"
          >
            Edit
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-stone-500">Start Date:</span>
            <p className="text-stone-900">{state.formData.travelDetails?.preferredStartDate}</p>
          </div>
          <div>
            <span className="text-stone-500">End Date:</span>
            <p className="text-stone-900">{state.formData.travelDetails?.preferredEndDate}</p>
          </div>
          <div>
            <span className="text-stone-500">Adults:</span>
            <p className="text-stone-900">{state.formData.travelDetails?.numberOfAdults}</p>
          </div>
          <div>
            <span className="text-stone-500">Children:</span>
            <p className="text-stone-900">{state.formData.travelDetails?.numberOfChildren || 0}</p>
          </div>
        </div>
      </div>
      
      {/* Selected Camps */}
      <div className="p-6 bg-stone-50 rounded-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-stone-900">Selected Camps</h3>
          <button
            onClick={() => dispatch({ type: 'SET_STEP', payload: 3 })}
            className="text-sm text-sunset-600 hover:text-sunset-700"
          >
            Edit
          </button>
        </div>
        <div className="space-y-3">
          {state.formData.campSelection?.selectedCamps?.map((camp, idx) => (
            <div key={idx} className="flex justify-between items-center text-sm">
              <span className="text-stone-900">{camp.campName}</span>
              <span className="text-stone-600">{camp.numberOfNights} nights • {camp.numberOfRooms} room(s)</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Terms & Conditions */}
      <div className="space-y-4">
        <div className="flex items-start space-x-3 p-4 border-2 border-stone-200 rounded-lg">
          <input
            type="checkbox"
            id="terms"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            className="w-5 h-5 text-sunset-600 border-stone-300 rounded mt-1
                       focus:ring-2 focus:ring-sunset-500"
          />
          <label htmlFor="terms" className="text-sm text-stone-700 cursor-pointer">
            I agree to the <a href="/terms" target="_blank" className="text-sunset-600 hover:underline">Terms & Conditions</a> and <a href="/privacy" target="_blank" className="text-sunset-600 hover:underline">Privacy Policy</a>
            <span className="text-red-500 ml-1">*</span>
          </label>
        </div>
        
        {state.errors.terms && (
          <p className="text-red-500 text-sm">{state.errors.terms}</p>
        )}
        
        <div className="flex items-start space-x-3 p-4 bg-stone-50 rounded-lg">
          <input
            type="checkbox"
            id="marketing"
            checked={marketingConsent}
            onChange={(e) => setMarketingConsent(e.target.checked)}
            className="w-5 h-5 text-sunset-600 border-stone-300 rounded mt-1
                       focus:ring-2 focus:ring-sunset-500"
          />
          <label htmlFor="marketing" className="text-sm text-stone-700 cursor-pointer">
            I'd like to receive updates about special offers and safari experiences
          </label>
        </div>
      </div>
      
      <FormNavigation
        onNext={handleSubmit}
        onBack={() => dispatch({ type: 'SET_STEP', payload: 6 })}
        isLastStep
        isSubmitting={isSubmitting}
      />
    </div>
  );
}
