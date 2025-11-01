"use client";

import { useKYC } from '../KYCContext';
import FormNavigation from '../shared/FormNavigation';

export default function Step2TravelDetails() {
  const { state, dispatch } = useKYC();
  const data = state.formData.travelDetails || {
    preferredStartDate: '',
    preferredEndDate: '',
    flexibleDates: false,
    numberOfAdults: 2,
    numberOfChildren: 0,
    childrenAges: [],
  };
  
  const handleNext = () => {
    const errors: Record<string, string> = {};
    
    if (!data.preferredStartDate) errors.preferredStartDate = 'Start date is required';
    if (!data.preferredEndDate) errors.preferredEndDate = 'End date is required';
    if (data.numberOfAdults < 1) errors.numberOfAdults = 'At least 1 adult required';
    
    if (Object.keys(errors).length > 0) {
      dispatch({ type: 'SET_ERRORS', payload: errors });
      return;
    }
    
    dispatch({ type: 'MARK_COMPLETE', payload: 2 });
    dispatch({ type: 'SET_STEP', payload: 3 });
    dispatch({ type: 'SET_ERRORS', payload: {} });
  };
  
  const updateField = (field: string, value: any) => {
    dispatch({
      type: 'UPDATE_DATA',
      payload: {
        travelDetails: { ...data, [field]: value }
      }
    });
  };
  
  const updateChildrenAges = (index: number, age: number) => {
    const newAges = [...data.childrenAges];
    newAges[index] = age;
    updateField('childrenAges', newAges);
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl sm:text-3xl font-light text-stone-900 mb-2">
          Travel Details
        </h2>
        <p className="text-stone-600">
          Tell us about your preferred travel dates and group size
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Preferred Start Date */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Preferred Start Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={data.preferredStartDate}
            onChange={(e) => updateField('preferredStartDate', e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg
                       focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
          />
          {state.errors.preferredStartDate && (
            <p className="text-red-500 text-sm mt-1">{state.errors.preferredStartDate}</p>
          )}
        </div>
        
        {/* Preferred End Date */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Preferred End Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={data.preferredEndDate}
            onChange={(e) => updateField('preferredEndDate', e.target.value)}
            min={data.preferredStartDate || new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg
                       focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
          />
          {state.errors.preferredEndDate && (
            <p className="text-red-500 text-sm mt-1">{state.errors.preferredEndDate}</p>
          )}
        </div>
      </div>
      
      {/* Flexible Dates */}
      <div className="flex items-center space-x-3 p-4 bg-stone-50 rounded-lg">
        <input
          type="checkbox"
          id="flexibleDates"
          checked={data.flexibleDates}
          onChange={(e) => updateField('flexibleDates', e.target.checked)}
          className="w-5 h-5 text-sunset-600 border-stone-300 rounded
                     focus:ring-2 focus:ring-sunset-500"
        />
        <label htmlFor="flexibleDates" className="text-sm text-stone-700 cursor-pointer">
          My dates are flexible (±3 days)
        </label>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Number of Adults */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Number of Adults <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            value={data.numberOfAdults}
            onChange={(e) => updateField('numberOfAdults', parseInt(e.target.value) || 0)}
            min="1"
            max="10"
            className="w-full px-4 py-3 border border-stone-300 rounded-lg
                       focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
          />
          {state.errors.numberOfAdults && (
            <p className="text-red-500 text-sm mt-1">{state.errors.numberOfAdults}</p>
          )}
        </div>
        
        {/* Number of Children */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Number of Children
          </label>
          <input
            type="number"
            value={data.numberOfChildren}
            onChange={(e) => {
              const count = parseInt(e.target.value) || 0;
              updateField('numberOfChildren', count);
              updateField('childrenAges', Array(count).fill(0));
            }}
            min="0"
            max="10"
            className="w-full px-4 py-3 border border-stone-300 rounded-lg
                       focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
          />
        </div>
      </div>
      
      {/* Children Ages */}
      {data.numberOfChildren > 0 && (
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-3">
            Children Ages
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {Array.from({ length: data.numberOfChildren }).map((_, index) => (
              <div key={index}>
                <label className="block text-xs text-stone-600 mb-1">
                  Child {index + 1}
                </label>
                <input
                  type="number"
                  value={data.childrenAges[index] || ''}
                  onChange={(e) => updateChildrenAges(index, parseInt(e.target.value) || 0)}
                  min="0"
                  max="17"
                  placeholder="Age"
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg
                             focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
                />
              </div>
            ))}
          </div>
        </div>
      )}
      
      <FormNavigation
        onNext={handleNext}
        onBack={() => dispatch({ type: 'SET_STEP', payload: 1 })}
      />
    </div>
  );
}
