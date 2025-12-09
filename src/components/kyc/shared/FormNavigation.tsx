"use client";

import { useKYC } from '../KYCContext';

interface FormNavigationProps {
  onNext: () => void;
  onBack: () => void;
  isLastStep?: boolean;
  isSubmitting?: boolean;
  nextDisabled?: boolean;
}

export default function FormNavigation({
  onNext,
  onBack,
  isLastStep = false,
  isSubmitting = false,
  nextDisabled = false,
}: FormNavigationProps) {
  const { state } = useKYC();
  
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t gap-4">
      <button
        type="button"
        onClick={onBack}
        disabled={state.currentStep === 1 || isSubmitting}
        className="w-full sm:w-auto px-6 py-3 border-2 border-stone-300 text-stone-900 rounded-lg
                   hover:bg-stone-100 disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all duration-300 font-semibold"
      >
        ← Back
      </button>
      
      <button
        type="button"
        onClick={onNext}
        disabled={isSubmitting || nextDisabled}
        className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-sunset-500 to-orange-600
                   text-white rounded-lg hover:from-sunset-600 hover:to-orange-700
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all duration-300 font-semibold shadow-lg
                   hover:scale-105 hover:shadow-xl"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2 justify-center">
            <span className="animate-spin">⏳</span>
            Submitting...
          </span>
        ) : isLastStep ? (
          'Submit Application →'
        ) : (
          'Next →'
        )}
      </button>
    </div>
  );
}
