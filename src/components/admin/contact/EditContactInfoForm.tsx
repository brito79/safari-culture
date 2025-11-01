"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface ContactFormData {
  phone: string;
  phone_hours: string;
  email: string;
  email_response: string;
  office: string;
  office_details: string;
}

export default function EditContactInfoForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<ContactFormData>({
    phone: '',
    phone_hours: '',
    email: '',
    email_response: '',
    office: '',
    office_details: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  useEffect(() => {
    fetchContactInfo();
  }, []);

  const fetchContactInfo = async () => {
    try {
      const response = await fetch('/api/contact-info');
      const result = await response.json();
      
      if (result.success && result.data) {
        setFormData({
          phone: result.data.phone,
          phone_hours: result.data.phone_hours,
          email: result.data.email,
          email_response: result.data.email_response,
          office: result.data.office,
          office_details: result.data.office_details,
        });
      }
    } catch (error) {
      console.error('Error fetching contact info:', error);
      setMessage({ type: 'error', text: 'Failed to load contact information' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    try {
      const response = await fetch('/api/contact-info', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setMessage({ type: 'success', text: 'Contact information updated successfully!' });
        // Refresh the data
        await fetchContactInfo();
        
        // Clear success message after 3 seconds
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      } else {
        setMessage({ type: 'error', text: result.message || 'Failed to update contact information' });
      }
    } catch (error) {
      console.error('Error updating contact info:', error);
      setMessage({ type: 'error', text: 'An error occurred while updating' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="animate-pulse space-y-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i}>
              <div className="h-4 bg-stone-200 rounded w-1/4 mb-2"></div>
              <div className="h-10 bg-stone-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8"
    >
      {/* Back Button */}
      <div className="mb-6">
        <button
          type="button"
          onClick={() => router.push('/dashboard')}
          className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium">Back to Dashboard</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Success/Error Message */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg ${
              message.type === 'success'
                ? 'bg-green-50 border border-green-200 text-green-800'
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}
          >
            {message.text}
          </motion.div>
        )}

        {/* Phone Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-stone-300 rounded-lg
                         focus:ring-2 focus:ring-sunset-500 focus:border-transparent
                         transition-colors"
              placeholder="+27 11 807 1800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Phone Hours <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phone_hours"
              value={formData.phone_hours}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-stone-300 rounded-lg
                         focus:ring-2 focus:ring-sunset-500 focus:border-transparent
                         transition-colors"
              placeholder="Mon-Fri: 8:00 - 17:00 CAT"
            />
          </div>
        </div>

        {/* Email Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-stone-300 rounded-lg
                         focus:ring-2 focus:ring-sunset-500 focus:border-transparent
                         transition-colors"
              placeholder="info@wilderness-safaris.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Email Response Time <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="email_response"
              value={formData.email_response}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-stone-300 rounded-lg
                         focus:ring-2 focus:ring-sunset-500 focus:border-transparent
                         transition-colors"
              placeholder="Response within 24 hours"
            />
          </div>
        </div>

        {/* Office Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Office Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="office"
              value={formData.office}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-stone-300 rounded-lg
                         focus:ring-2 focus:ring-sunset-500 focus:border-transparent
                         transition-colors"
              placeholder="Windhoek, Namibia"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Office Details <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="office_details"
              value={formData.office_details}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-stone-300 rounded-lg
                         focus:ring-2 focus:ring-sunset-500 focus:border-transparent
                         transition-colors"
              placeholder="UTC+2 Timezone"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-6 border-t border-stone-200">
          <button
            type="button"
            onClick={fetchContactInfo}
            disabled={saving}
            className="px-6 py-3 border border-stone-300 text-stone-700 rounded-lg
                       hover:bg-stone-50 transition-colors disabled:opacity-50
                       text-sm sm:text-base"
          >
            Reset
          </button>

          <button
            type="submit"
            disabled={saving}
            className="px-6 sm:px-8 py-3 bg-gradient-to-r from-sunset-500 to-orange-600
                       text-white rounded-lg hover:from-sunset-600 hover:to-orange-700
                       transition-all duration-300 font-semibold shadow-lg
                       hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed
                       flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            {saving ? (
              <>
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Save Changes
              </>
            )}
          </button>
        </div>
      </form>

      {/* Preview Section */}
      <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-stone-200">
        <h3 className="text-base sm:text-lg font-semibold text-stone-900 mb-3 sm:mb-4">Preview</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {/* Phone Preview */}
          <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">📞</span>
              <span className="font-semibold text-stone-900">Phone</span>
            </div>
            <p className="text-sm text-stone-700 font-medium">{formData.phone}</p>
            <p className="text-xs text-stone-500">{formData.phone_hours}</p>
          </div>

          {/* Email Preview */}
          <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">✉️</span>
              <span className="font-semibold text-stone-900">Email</span>
            </div>
            <p className="text-sm text-stone-700 font-medium">{formData.email}</p>
            <p className="text-xs text-stone-500">{formData.email_response}</p>
          </div>

          {/* Office Preview */}
          <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">📍</span>
              <span className="font-semibold text-stone-900">Office</span>
            </div>
            <p className="text-sm text-stone-700 font-medium">{formData.office}</p>
            <p className="text-xs text-stone-500">{formData.office_details}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
