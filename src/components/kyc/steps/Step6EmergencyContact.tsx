"use client";

import { useKYC } from '../KYCContext';
import FormNavigation from '../shared/FormNavigation';

export default function Step6EmergencyContact() {
  const { state, dispatch } = useKYC();
  const data = state.formData.emergencyContact || {
    name: '',
    relationship: '',
    phone: '',
    email: '',
  };
  
  const updateField = (field: string, value: string) => {
    dispatch({
      type: 'UPDATE_DATA',
      payload: {
        emergencyContact: { ...data, [field]: value }
      }
    });
  };
  
  const handleNext = () => {
    const errors: Record<string, string> = {};
    
    if (!data.name) errors.emergencyName = 'Emergency contact name is required';
    if (!data.relationship) errors.relationship = 'Relationship is required';
    if (!data.phone) errors.emergencyPhone = 'Phone number is required';
    if (!data.email) errors.emergencyEmail = 'Email is required';
    
    if (Object.keys(errors).length > 0) {
      dispatch({ type: 'SET_ERRORS', payload: errors });
      return;
    }
    
    dispatch({ type: 'MARK_COMPLETE', payload: 6 });
    dispatch({ type: 'SET_STEP', payload: 7 });
    dispatch({ type: 'SET_ERRORS', payload: {} });
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl sm:text-3xl font-light text-stone-900 mb-2">
          Emergency Contact
        </h2>
        <p className="text-stone-600">
          Provide details of someone we can contact in case of emergency
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => updateField('name', e.target.value)}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg
                       focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
            placeholder="Jane Doe"
          />
          {state.errors.emergencyName && (
            <p className="text-red-500 text-sm mt-1">{state.errors.emergencyName}</p>
          )}
        </div>
        
        {/* Relationship */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Relationship <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.relationship}
            onChange={(e) => updateField('relationship', e.target.value)}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg
                       focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
            placeholder="Spouse, Parent, Sibling, etc."
          />
          {state.errors.relationship && (
            <p className="text-red-500 text-sm mt-1">{state.errors.relationship}</p>
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
          {state.errors.emergencyPhone && (
            <p className="text-red-500 text-sm mt-1">{state.errors.emergencyPhone}</p>
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
            placeholder="jane.doe@example.com"
          />
          {state.errors.emergencyEmail && (
            <p className="text-red-500 text-sm mt-1">{state.errors.emergencyEmail}</p>
          )}
        </div>
      </div>
      
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> This person will only be contacted in case of an emergency during your safari.
        </p>
      </div>
      
      <FormNavigation
        onNext={handleNext}
        onBack={() => dispatch({ type: 'SET_STEP', payload: 5 })}
      />
    </div>
  );
}
