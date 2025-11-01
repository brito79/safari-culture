"use client";

import { useKYC } from '../KYCContext';
import FormNavigation from '../shared/FormNavigation';

const dietaryOptions = [
  'Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Halal', 'Kosher', 'Nut Allergy'
];

const mobilityOptions = [
  'Wheelchair Access', 'Walking Assistance', 'Ground Floor Room', 'Accessible Bathroom'
];

export default function Step5SpecialRequirements() {
  const { state, dispatch } = useKYC();
  const data = state.formData.specialRequirements || {
    dietaryRestrictions: [],
    medicalConditions: [],
    mobilityNeeds: [],
  };
  
  const toggleSelection = (field: string, value: string) => {
    const current = (data as any)[field] || [];
    const updated = current.includes(value)
      ? current.filter((item: string) => item !== value)
      : [...current, value];
    
    dispatch({
      type: 'UPDATE_DATA',
      payload: {
        specialRequirements: { ...data, [field]: updated }
      }
    });
  };
  
  const updateField = (field: string, value: string) => {
    dispatch({
      type: 'UPDATE_DATA',
      payload: {
        specialRequirements: { ...data, [field]: value }
      }
    });
  };
  
  const handleNext = () => {
    dispatch({ type: 'MARK_COMPLETE', payload: 5 });
    dispatch({ type: 'SET_STEP', payload: 6 });
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl sm:text-3xl font-light text-stone-900 mb-2">
          Special Requirements
        </h2>
        <p className="text-stone-600">
          Help us ensure your comfort and safety during your safari
        </p>
      </div>
      
      {/* Dietary Restrictions */}
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-3">
          Dietary Restrictions
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {dietaryOptions.map(option => (
            <button
              key={option}
              type="button"
              onClick={() => toggleSelection('dietaryRestrictions', option)}
              className={`
                p-3 rounded-lg border-2 transition-all duration-300 text-sm
                ${data.dietaryRestrictions?.includes(option)
                  ? 'border-sunset-600 bg-sunset-50'
                  : 'border-stone-200 hover:border-stone-300'
                }
              `}
            >
              {option}
            </button>
          ))}
        </div>
        <textarea
          value={data.otherDietary || ''}
          onChange={(e) => updateField('otherDietary', e.target.value)}
          placeholder="Other dietary requirements..."
          rows={2}
          className="mt-3 w-full px-4 py-3 border border-stone-300 rounded-lg
                     focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
        />
      </div>
      
      {/* Medical Conditions */}
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-2">
          Medical Conditions (Optional)
        </label>
        <textarea
          value={data.otherMedical || ''}
          onChange={(e) => updateField('otherMedical', e.target.value)}
          placeholder="Please list any medical conditions we should be aware of..."
          rows={3}
          className="w-full px-4 py-3 border border-stone-300 rounded-lg
                     focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
        />
        <p className="text-xs text-stone-500 mt-1">
          This information is confidential and helps us ensure your safety
        </p>
      </div>
      
      {/* Mobility Needs */}
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-3">
          Mobility & Accessibility Needs
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {mobilityOptions.map(option => (
            <button
              key={option}
              type="button"
              onClick={() => toggleSelection('mobilityNeeds', option)}
              className={`
                p-3 rounded-lg border-2 transition-all duration-300 text-sm text-left
                ${data.mobilityNeeds?.includes(option)
                  ? 'border-sunset-600 bg-sunset-50'
                  : 'border-stone-200 hover:border-stone-300'
                }
              `}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      
      {/* Special Requests */}
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-2">
          Additional Special Requests
        </label>
        <textarea
          value={data.specialRequests || ''}
          onChange={(e) => updateField('specialRequests', e.target.value)}
          placeholder="Any other special requests or requirements..."
          rows={4}
          className="w-full px-4 py-3 border border-stone-300 rounded-lg
                     focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
        />
      </div>
      
      <FormNavigation
        onNext={handleNext}
        onBack={() => dispatch({ type: 'SET_STEP', payload: 4 })}
      />
    </div>
  );
}
