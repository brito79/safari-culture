"use client";

import { useKYC } from '../KYCContext';
import FormNavigation from '../shared/FormNavigation';

const experiences = [
  { id: 'nature-drives', name: 'Nature Drives', icon: '🚙' },
  { id: 'skeleton-coast', name: 'Skeleton Coast Expeditions', icon: '🌊' },
  { id: 'hot-air-balloon', name: 'Hot Air Balloon Safaris', icon: '🎈' },
  { id: 'cultural-walks', name: 'Cultural Nature Walks', icon: '👥' },
  { id: 'geological', name: 'Geological Expeditions', icon: '⛰️' },
];

const wildlife = [
  { id: 'elephants', name: 'Desert Elephants', icon: '🐘' },
  { id: 'rhinos', name: 'Black Rhinos', icon: '🦏' },
  { id: 'big-cats', name: 'Big Cats', icon: '🦁' },
  { id: 'birds', name: 'Bird Watching', icon: '🦅' },
  { id: 'marine', name: 'Marine Life', icon: '🦭' },
];

export default function Step4ExperiencePreferences() {
  const { state, dispatch } = useKYC();
  const data = state.formData.experiencePreferences || {
    selectedExperiences: [],
    wildlifeInterests: [],
    photographyLevel: '',
    specialInterests: [],
  };
  
  const toggleSelection = (field: 'selectedExperiences' | 'wildlifeInterests', id: string) => {
    const current = data[field] || [];
    const updated = current.includes(id)
      ? current.filter(item => item !== id)
      : [...current, id];
    
    dispatch({
      type: 'UPDATE_DATA',
      payload: {
        experiencePreferences: { ...data, [field]: updated }
      }
    });
  };
  
  const updateField = (field: string, value: string | string[]) => {
    dispatch({
      type: 'UPDATE_DATA',
      payload: {
        experiencePreferences: { ...data, [field]: value }
      }
    });
  };
  
  const handleNext = () => {
    dispatch({ type: 'MARK_COMPLETE', payload: 4 });
    dispatch({ type: 'SET_STEP', payload: 5 });
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl sm:text-3xl font-light text-stone-900 mb-2">
          Experience Preferences
        </h2>
        <p className="text-stone-600">
          Tell us about your interests to help us customize your safari
        </p>
      </div>
      
      {/* Experiences */}
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-3">
          Select Activities You&apos;re Interested In
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {experiences.map(exp => (
            <button
              key={exp.id}
              type="button"
              onClick={() => toggleSelection('selectedExperiences', exp.id)}
              className={`
                p-4 rounded-lg border-2 transition-all duration-300 text-left
                ${data.selectedExperiences?.includes(exp.id)
                  ? 'border-sunset-600 bg-sunset-50'
                  : 'border-stone-200 hover:border-stone-300'
                }
              `}
            >
              <span className="text-2xl mr-3">{exp.icon}</span>
              <span className="text-sm font-medium text-stone-900">{exp.name}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Wildlife Interests */}
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-3">
          Wildlife You&apos;d Like to See
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {wildlife.map(animal => (
            <button
              key={animal.id}
              type="button"
              onClick={() => toggleSelection('wildlifeInterests', animal.id)}
              className={`
                p-3 rounded-lg border-2 transition-all duration-300 text-center
                ${data.wildlifeInterests?.includes(animal.id)
                  ? 'border-sunset-600 bg-sunset-50'
                  : 'border-stone-200 hover:border-stone-300'
                }
              `}
            >
              <div className="text-2xl mb-1">{animal.icon}</div>
              <div className="text-xs font-medium text-stone-900">{animal.name}</div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Photography Level */}
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-3">
          Photography Interest Level
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {['casual', 'enthusiast', 'professional'].map(level => (
            <button
              key={level}
              type="button"
              onClick={() => updateField('photographyLevel', level)}
              className={`
                p-4 rounded-lg border-2 transition-all duration-300 capitalize
                ${data.photographyLevel === level
                  ? 'border-sunset-600 bg-sunset-50'
                  : 'border-stone-200 hover:border-stone-300'
                }
              `}
            >
              {level}
            </button>
          ))}
        </div>
      </div>
      
      <FormNavigation
        onNext={handleNext}
        onBack={() => dispatch({ type: 'SET_STEP', payload: 3 })}
      />
    </div>
  );
}
