"use client";

import { useKYC } from './KYCContext';

const steps = [
  { number: 1, title: 'Personal Info', icon: '👤' },
  { number: 2, title: 'Travel Details', icon: '✈️' },
  { number: 3, title: 'Camp Selection', icon: '🏕️' },
  { number: 4, title: 'Experiences', icon: '🦁' },
  { number: 5, title: 'Requirements', icon: '📋' },
  { number: 6, title: 'Emergency', icon: '🚨' },
  { number: 7, title: 'Review', icon: '✅' },
];

export default function KYCProgress() {
  const { state } = useKYC();
  
  return (
    <div className="w-full py-8">
      {/* Mobile: Simplified Progress */}
      <div className="block lg:hidden">
        <div className="flex items-center justify-between px-4">
          <span className="text-sm text-stone-600">
            Step {state.currentStep} of {steps.length}
          </span>
          <span className="text-sm font-semibold text-sunset-600">
            {steps[state.currentStep - 1].title}
          </span>
        </div>
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-sunset-500 to-orange-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(state.currentStep / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Desktop: Full Stepper */}
      <div className="hidden lg:flex items-center justify-between max-w-6xl mx-auto px-4">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center flex-1">
            {/* Step Circle */}
            <div className="flex flex-col items-center">
              <div
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  text-lg font-semibold transition-all duration-300
                  ${
                    state.currentStep === step.number
                      ? 'bg-sunset-600 text-white scale-110 shadow-lg'
                      : state.completedSteps.has(step.number as any)
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }
                `}
              >
                {state.completedSteps.has(step.number as any) ? '✓' : step.icon}
              </div>
              <span className={`text-xs mt-2 transition-colors ${
                state.currentStep === step.number 
                  ? 'text-sunset-600 font-semibold' 
                  : 'text-gray-600'
              }`}>
                {step.title}
              </span>
            </div>
            
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                className={`
                  flex-1 h-1 mx-2 transition-all duration-300
                  ${
                    state.completedSteps.has(step.number as any)
                      ? 'bg-green-500'
                      : 'bg-gray-200'
                  }
                `}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
