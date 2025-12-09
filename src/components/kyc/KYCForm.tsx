"use client";

import { KYCProvider, useKYC } from './KYCContext';
import KYCProgress from './KYCProgress';
import Step1PersonalInfo from './steps/Step1PersonalInfo';
import Step2TravelDetails from './steps/Step2TravelDetails';
import Step3CampSelection from './steps/Step3CampSelection';
import Step4ExperiencePreferences from './steps/Step4ExperiencePreferences';
import Step5SpecialRequirements from './steps/Step5SpecialRequirements';
import Step6EmergencyContact from './steps/Step6EmergencyContact';
import Step7ReviewSubmit from './steps/Step7ReviewSubmit';

function KYCFormContent() {
  const { state } = useKYC();
  
  const renderStep = () => {
    switch (state.currentStep) {
      case 1:
        return <Step1PersonalInfo />;
      case 2:
        return <Step2TravelDetails />;
      case 3:
        return <Step3CampSelection />;
      case 4:
        return <Step4ExperiencePreferences />;
      case 5:
        return <Step5SpecialRequirements />;
      case 6:
        return <Step6EmergencyContact />;
      case 7:
        return <Step7ReviewSubmit />;
      default:
        return <Step1PersonalInfo />;
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 mb-4">
            Safari Application
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-600">
            Complete your application to experience Namibia`&apos;`s wilderness
          </p>
        </div>
        
        {/* Progress Stepper */}
        <KYCProgress />
        
        {/* Form Content */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mt-8">
          {renderStep()}
        </div>
        
        {/* Help Text */}
        <div className="mt-6 text-center text-sm text-stone-500">
          <p>Need help? Contact us at <a href="mailto:info@wildernessnami bia.com" className="text-sunset-600 hover:underline">info@wildernessnami bia.com</a></p>
          <p className="mt-2">Your progress is automatically saved</p>
        </div>
      </div>
    </div>
  );
}

export default function KYCForm() {
  return (
    <KYCProvider>
      <KYCFormContent />
    </KYCProvider>
  );
}
