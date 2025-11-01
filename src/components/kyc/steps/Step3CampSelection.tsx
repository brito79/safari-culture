"use client";

import { useState } from 'react';
import { useKYC } from '../KYCContext';
import CampCard from '../camp-selection/CampCard';
import FormNavigation from '../shared/FormNavigation';
import { Camp, CampBooking } from '@/types/kyc';

const availableCamps: Camp[] = [
  {
    id: 'doro-nawas',
    name: 'Wilderness-Doro-Nawas',
    region: 'Damaraland',
    description: 'Desert-adapted wildlife and ancient rock art in pristine wilderness',
    image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_1.jpg`,
    features: ['Desert elephants', 'Black rhino tracking', 'Ancient rock art', 'Cultural experiences'],
    roomTypes: ['Standard Room', 'Suite', 'Family Suite'],
    priceRange: '$$$',
  },
  {
    id: 'little-kulala',
    name: 'Wilderness-Little-Kulala',
    region: 'Sossusvlei',
    description: 'Gateway to the iconic red dunes of Sossusvlei',
    image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/Wilderness-Little-Kulala_1.jpg`,
    features: ['Dune climbing', 'Star gazing', 'Desert luxury', 'Hot air balloons'],
    roomTypes: ['Standard Room', 'Kulala Suite'],
    priceRange: '$$$$',
  },
  {
    id: 'damaraland-camp',
    name: 'Wilderness Damaraland Camp',
    region: 'Damaraland',
    description: 'Cultural immersion and wildlife in spectacular landscapes',
    image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_1.jpg`,
    features: ['Cultural tours', 'Desert elephants', 'San rock art', 'Community visits'],
    roomTypes: ['Standard Room', 'Family Room'],
    priceRange: '$$$',
  },
  {
    id: 'hoanib-skeleton-coast',
    name: 'Wilderness Hoanib Skeleton Coast',
    region: 'Skeleton Coast',
    description: 'Remote wilderness and dramatic coastal exploration',
    image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/Wilderness-Hoanib-Skeleton-Coast-Camp_1.jpg`,
    features: ['Seal colonies', 'Desert lions', 'Shipwrecks', 'Remote wilderness'],
    roomTypes: ['Standard Room', 'Premium Suite'],
    priceRange: '$$$$',
  },
];

export default function Step3CampSelection() {
  const { state, dispatch } = useKYC();
  const [selectedCampIds, setSelectedCampIds] = useState<string[]>(
    state.formData.campSelection?.selectedCamps?.map(c => c.campId) || []
  );
  const [campBookings, setCampBookings] = useState<Record<string, Partial<CampBooking>>>(
    state.formData.campSelection?.selectedCamps?.reduce((acc, booking) => {
      acc[booking.campId] = booking;
      return acc;
    }, {} as Record<string, Partial<CampBooking>>) || {}
  );
  
  const handleCampSelect = (campId: string) => {
    if (selectedCampIds.includes(campId)) {
      setSelectedCampIds(selectedCampIds.filter(id => id !== campId));
      const newBookings = { ...campBookings };
      delete newBookings[campId];
      setCampBookings(newBookings);
    } else {
      setSelectedCampIds([...selectedCampIds, campId]);
      const camp = availableCamps.find(c => c.id === campId);
      setCampBookings({
        ...campBookings,
        [campId]: {
          campId,
          campName: camp?.name || '',
          numberOfNights: 3,
          roomType: 'standard',
          numberOfRooms: 1,
        }
      });
    }
  };
  
  const updateBooking = (campId: string, field: string, value: any) => {
    setCampBookings({
      ...campBookings,
      [campId]: {
        ...campBookings[campId],
        [field]: value
      }
    });
  };
  
  const handleNext = () => {
    if (selectedCampIds.length === 0) {
      dispatch({ 
        type: 'SET_ERRORS', 
        payload: { camps: 'Please select at least one camp' } 
      });
      return;
    }
    
    // Validate all bookings have required fields
    const errors: Record<string, string> = {};
    selectedCampIds.forEach(campId => {
      const booking = campBookings[campId];
      if (!booking.numberOfNights || booking.numberOfNights < 1) {
        errors[`${campId}_nights`] = 'Number of nights is required';
      }
      if (!booking.numberOfRooms || booking.numberOfRooms < 1) {
        errors[`${campId}_rooms`] = 'Number of rooms is required';
      }
    });
    
    if (Object.keys(errors).length > 0) {
      dispatch({ type: 'SET_ERRORS', payload: errors });
      return;
    }
    
    // Calculate dates and save
    const travelStart = state.formData.travelDetails?.preferredStartDate;
    const bookingsArray: CampBooking[] = selectedCampIds.map(campId => {
      const booking = campBookings[campId];
      return {
        ...booking,
        checkIn: travelStart || '',
        checkOut: travelStart || '',
      } as CampBooking;
    });
    
    dispatch({
      type: 'UPDATE_DATA',
      payload: {
        campSelection: {
          selectedCamps: bookingsArray,
          totalNights: bookingsArray.reduce((sum, b) => sum + b.numberOfNights, 0),
        }
      }
    });
    
    dispatch({ type: 'MARK_COMPLETE', payload: 3 });
    dispatch({ type: 'SET_STEP', payload: 4 });
    dispatch({ type: 'SET_ERRORS', payload: {} });
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl sm:text-3xl font-light text-stone-900 mb-2">
          Select Your Camps
        </h2>
        <p className="text-stone-600">
          Choose the camps you'd like to visit during your safari adventure
        </p>
      </div>
      
      {state.errors.camps && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm">{state.errors.camps}</p>
        </div>
      )}
      
      {/* Camp Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {availableCamps.map((camp) => (
          <CampCard
            key={camp.id}
            camp={camp}
            isSelected={selectedCampIds.includes(camp.id)}
            onSelect={() => handleCampSelect(camp.id)}
          />
        ))}
      </div>
      
      {/* Selected Camps Configuration */}
      {selectedCampIds.length > 0 && (
        <div className="mt-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-light text-stone-900">
              Configure Your Stay
            </h3>
            <span className="text-sm text-stone-600">
              {selectedCampIds.length} camp{selectedCampIds.length > 1 ? 's' : ''} selected
            </span>
          </div>
          
          {selectedCampIds.map(campId => {
            const camp = availableCamps.find(c => c.id === campId);
            const booking = campBookings[campId] || {};
            
            return (
              <div key={campId} className="p-6 bg-stone-50 rounded-xl border border-stone-200">
                <h4 className="font-semibold text-stone-900 mb-4">{camp?.name}</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Number of Nights */}
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Number of Nights <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      value={booking.numberOfNights || 3}
                      onChange={(e) => updateBooking(campId, 'numberOfNights', parseInt(e.target.value) || 0)}
                      min="1"
                      max="14"
                      className="w-full px-4 py-2 border border-stone-300 rounded-lg
                                 focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
                    />
                    {state.errors[`${campId}_nights`] && (
                      <p className="text-red-500 text-xs mt-1">{state.errors[`${campId}_nights`]}</p>
                    )}
                  </div>
                  
                  {/* Room Type */}
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Room Type
                    </label>
                    <select
                      value={booking.roomType || 'standard'}
                      onChange={(e) => updateBooking(campId, 'roomType', e.target.value)}
                      className="w-full px-4 py-2 border border-stone-300 rounded-lg
                                 focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
                    >
                      <option value="standard">Standard</option>
                      <option value="suite">Suite</option>
                      <option value="family">Family</option>
                    </select>
                  </div>
                  
                  {/* Number of Rooms */}
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Number of Rooms <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      value={booking.numberOfRooms || 1}
                      onChange={(e) => updateBooking(campId, 'numberOfRooms', parseInt(e.target.value) || 0)}
                      min="1"
                      max="5"
                      className="w-full px-4 py-2 border border-stone-300 rounded-lg
                                 focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
                    />
                    {state.errors[`${campId}_rooms`] && (
                      <p className="text-red-500 text-xs mt-1">{state.errors[`${campId}_rooms`]}</p>
                    )}
                  </div>
                </div>
                
                {/* Special Requests */}
                <div className="mt-4">
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    value={booking.specialRequests || ''}
                    onChange={(e) => updateBooking(campId, 'specialRequests', e.target.value)}
                    rows={2}
                    placeholder="Any special requests for this camp..."
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg
                               focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
      
      <FormNavigation
        onNext={handleNext}
        onBack={() => dispatch({ type: 'SET_STEP', payload: 2 })}
        nextDisabled={selectedCampIds.length === 0}
      />
    </div>
  );
}
