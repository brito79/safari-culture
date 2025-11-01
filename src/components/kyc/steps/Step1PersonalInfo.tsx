"use client";

import { useKYC } from '../KYCContext';
import FormNavigation from '../shared/FormNavigation';

export default function Step1PersonalInfo() {
  const { state, dispatch } = useKYC();
  const data = state.formData.personalInfo || {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: '',
    passportNumber: '',
    passportExpiry: '',
  };
  
  const handleNext = () => {
    const errors: Record<string, string> = {};
    
    if (!data.firstName) errors.firstName = 'First name is required';
    if (!data.lastName) errors.lastName = 'Last name is required';
    if (!data.email) errors.email = 'Email is required';
    if (!data.phone) errors.phone = 'Phone is required';
    if (!data.dateOfBirth) errors.dateOfBirth = 'Date of birth is required';
    if (!data.nationality) errors.nationality = 'Nationality is required';
    if (!data.passportNumber) errors.passportNumber = 'Passport number is required';
    if (!data.passportExpiry) errors.passportExpiry = 'Passport expiry is required';
    
    if (Object.keys(errors).length > 0) {
      dispatch({ type: 'SET_ERRORS', payload: errors });
      return;
    }
    
    dispatch({ type: 'MARK_COMPLETE', payload: 1 });
    dispatch({ type: 'SET_STEP', payload: 2 });
    dispatch({ type: 'SET_ERRORS', payload: {} });
  };
  
  const updateField = (field: string, value: string) => {
    dispatch({
      type: 'UPDATE_DATA',
      payload: {
        personalInfo: { ...data, [field]: value }
      }
    });
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl sm:text-3xl font-light text-stone-900 mb-2">
          Personal Information
        </h2>
        <p className="text-stone-600">
          Please provide your personal details for the safari application
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.firstName}
            onChange={(e) => updateField('firstName', e.target.value)}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg
                       focus:ring-2 focus:ring-sunset-500 focus:border-transparent
                       transition-all"
            placeholder="John"
          />
          {state.errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{state.errors.firstName}</p>
          )}
        </div>
        
        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.lastName}
            onChange={(e) => updateField('lastName', e.target.value)}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg
                       focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
            placeholder="Doe"
          />
          {state.errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{state.errors.lastName}</p>
          )}
        </div>
        
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => updateField('email', e.target.value)}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg
                       focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
            placeholder="john.doe@example.com"
          />
          {state.errors.email && (
            <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>
          )}
        </div>
        
        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg
                       focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
            placeholder="+1 234 567 8900"
          />
          {state.errors.phone && (
            <p className="text-red-500 text-sm mt-1">{state.errors.phone}</p>
          )}
        </div>
        
        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={data.dateOfBirth}
            onChange={(e) => updateField('dateOfBirth', e.target.value)}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg
                       focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
          />
          {state.errors.dateOfBirth && (
            <p className="text-red-500 text-sm mt-1">{state.errors.dateOfBirth}</p>
          )}
        </div>
        
        {/* Nationality */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Nationality <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.nationality}
            onChange={(e) => updateField('nationality', e.target.value)}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg
                       focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
            placeholder="United States"
          />
          {state.errors.nationality && (
            <p className="text-red-500 text-sm mt-1">{state.errors.nationality}</p>
          )}
        </div>
        
        {/* Passport Number */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Passport Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.passportNumber}
            onChange={(e) => updateField('passportNumber', e.target.value)}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg
                       focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
            placeholder="A12345678"
          />
          {state.errors.passportNumber && (
            <p className="text-red-500 text-sm mt-1">{state.errors.passportNumber}</p>
          )}
        </div>
        
        {/* Passport Expiry */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Passport Expiry Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={data.passportExpiry}
            onChange={(e) => updateField('passportExpiry', e.target.value)}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg
                       focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
          />
          {state.errors.passportExpiry && (
            <p className="text-red-500 text-sm mt-1">{state.errors.passportExpiry}</p>
          )}
        </div>
      </div>
      
      <FormNavigation
        onNext={handleNext}
        onBack={() => {}}
      />
    </div>
  );
}
