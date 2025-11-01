"use client";

import { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { KYCState, KYCAction, KYCStep } from '@/types/kyc';

const initialState: KYCState = {
  currentStep: 1,
  formData: {},
  completedSteps: new Set(),
  errors: {},
};

function kycReducer(state: KYCState, action: KYCAction): KYCState {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, currentStep: action.payload };
      
    case 'UPDATE_DATA':
      return { 
        ...state, 
        formData: { ...state.formData, ...action.payload } 
      };
      
    case 'MARK_COMPLETE':
      return {
        ...state,
        completedSteps: new Set([...state.completedSteps, action.payload])
      };
      
    case 'SET_ERRORS':
      return { ...state, errors: action.payload };
      
    case 'RESET':
      return initialState;
      
    default:
      return state;
  }
}

const KYCContext = createContext<{
  state: KYCState;
  dispatch: React.Dispatch<KYCAction>;
} | null>(null);

export function KYCProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(kycReducer, initialState);
  
  // Save to localStorage on state change
  useEffect(() => {
    if (Object.keys(state.formData).length > 0) {
      localStorage.setItem('kyc-draft', JSON.stringify(state.formData));
      localStorage.setItem('kyc-step', state.currentStep.toString());
    }
  }, [state.formData, state.currentStep]);
  
  // Load from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('kyc-draft');
    const savedStep = localStorage.getItem('kyc-step');
    
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        dispatch({ type: 'UPDATE_DATA', payload: parsedData });
      } catch (error) {
        console.error('Error loading saved KYC data:', error);
      }
    }
    
    if (savedStep) {
      const stepNumber = parseInt(savedStep);
      if (stepNumber >= 1 && stepNumber <= 7) {
        dispatch({ type: 'SET_STEP', payload: stepNumber as KYCStep });
      }
    }
  }, []);
  
  return (
    <KYCContext.Provider value={{ state, dispatch }}>
      {children}
    </KYCContext.Provider>
  );
}

export function useKYC() {
  const context = useContext(KYCContext);
  if (!context) {
    throw new Error('useKYC must be used within KYCProvider');
  }
  return context;
}
