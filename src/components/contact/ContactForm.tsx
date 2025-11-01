"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { submitContactForm } from "@/app/actions/contact/contact";
import { ContactFormData } from "@/lib/db/types";

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    travelDates: '',
    groupSize: '',
    experienceType: '',
    camps: [] as string[],
    specialRequests: '',
    budget: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (camp: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      camps: checked 
        ? [...prev.camps, camp]
        : prev.camps.filter(c => c !== camp)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear any previous messages
    setSubmitMessage(null);
    setIsSubmitting(true);

    try {
      // Submit form data to server action
      const result = await submitContactForm(formData);
      
      if (result.success) {
        setSubmitMessage({ type: 'success', text: result.message });
        // Reset form on successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          country: '',
          travelDates: '',
          groupSize: '',
          experienceType: '',
          camps: [],
          specialRequests: '',
          budget: ''
        });
      } else {
        setSubmitMessage({ type: 'error', text: result.message });
      }
    } catch (error) {
      setSubmitMessage({ 
        type: 'error', 
        text: 'An unexpected error occurred. Please try again or contact us directly.' 
      });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const camps = [
    "Wilderness-Doro-Nawas",
    "Wilderness-Little-Kulala", 
    "Wilderness Hoanib Skeleton Coast",
    "Wilderness Damaraland Camp"
  ];

  const experienceTypes = [
    "Safari & Wildlife Viewing",
    "Photography Safari",
    "Family Adventure",
    "Honeymoon Package",
    "Multi-Camp Journey",
    "Custom Experience"
  ];

  return (
    <section ref={ref} className="py-20 relative bg-stone-50">
      <div className="relative max-w-4xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-sunset-100 rounded-full mb-4">
            <span className="text-sunset-700 text-sm font-semibold tracking-wide">STEP 1</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-stone-900 mb-4">
            Tell Us About Your Dream Safari
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Share your travel preferences and our safari specialists will create a personalized itinerary tailored to your interests.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/95 p-8 lg:p-10 rounded-2xl shadow-lg border border-stone-200"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-medium text-stone-900 mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-500/20 transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-500/20 transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-medium text-stone-900 mb-4">Contact Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-500/20 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-500/20 transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Country *
                    </label>
                    <select 
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-500/20 transition-colors"
                    >
                      <option value="">Select your country</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="ZA">South Africa</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Information */}
            <div>
              <h3 className="text-lg font-medium text-stone-900 mb-4">Travel Preferences</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Preferred Travel Dates
                    </label>
                    <input
                      type="text"
                      name="travelDates"
                      value={formData.travelDates}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-500/20 transition-colors"
                      placeholder="e.g., June 2025 or Flexible"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Group Size *
                    </label>
                    <select
                      name="groupSize"
                      required
                      value={formData.groupSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-500/20 transition-colors"
                    >
                      <option value="">Select group size</option>
                      <option value="1">1 person</option>
                      <option value="2">2 people</option>
                      <option value="3-4">3-4 people</option>
                      <option value="5-8">5-8 people</option>
                      <option value="9+">9+ people</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Experience Type *
                  </label>
                  <select
                    name="experienceType"
                    required
                    value={formData.experienceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-500/20 transition-colors"
                  >
                    <option value="">Select experience type</option>
                    {experienceTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-4">
                    Interested Camps
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {camps.map((camp) => (
                      <label key={camp} className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg border border-stone-200 hover:bg-stone-50 transition-colors">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-stone-500 border-stone-300 rounded focus:ring-stone-500 focus:ring-2"
                          checked={formData.camps.includes(camp)}
                          onChange={(e) => handleCheckboxChange(camp, e.target.checked)}
                        />
                        <span className="text-stone-700 text-sm font-medium">{camp}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Budget Range (USD)
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-500/20 transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-15000">$10,000 - $15,000</option>
                    <option value="15000-25000">$15,000 - $25,000</option>
                    <option value="25000+">$25,000+</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Special Requests & Additional Information
              </label>
              <textarea
                name="specialRequests"
                rows={4}
                value={formData.specialRequests}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-500/20 transition-colors resize-none"
                placeholder="Dietary requirements, accessibility needs, special occasions, photography interests, etc..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              {/* Display submission message */}
              {submitMessage && (
                <div className={`mb-4 p-4 rounded-lg ${
                  submitMessage.type === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-800' 
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}>
                  {submitMessage.text}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-lg transition-all duration-300 font-semibold text-lg ${
                  isSubmitting 
                    ? 'bg-stone-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-sunset-500 to-orange-600 hover:from-sunset-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting Your Inquiry...
                  </span>
                ) : (
                  'Submit Your Inquiry →'
                )}
              </button>
              <p className="text-sm text-stone-600 text-center mt-4 flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Our safari specialists will respond within 24 hours
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;