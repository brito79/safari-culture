"use client";

import { useState, useEffect } from "react";
import { Contact } from "@/lib/db/types";
import { getInquiries, deleteInquiry, getInquiryStats } from "@/app/actions/dashboard/inquries";

interface InquiryStats {
  total: number;
  thisMonth: number;
  byCountry: { country: string; count: number }[];
  byExperience: { experience_type: string; count: number }[];
}

interface InquiriesProps {
  className?: string;
}

const Inquiries = ({ className = "" }: InquiriesProps) => {
  const [inquiries, setInquiries] = useState<Contact[]>([]);
  const [stats, setStats] = useState<InquiryStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedInquiry, setSelectedInquiry] = useState<Contact | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCountry, setFilterCountry] = useState("");
  const [filterExperience, setFilterExperience] = useState("");

  // Load inquiries and stats
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Load inquiries
      const inquiriesResult = await getInquiries();
      if (inquiriesResult.success && inquiriesResult.data) {
        setInquiries(inquiriesResult.data);
      } else {
        setError(inquiriesResult.message);
      }

      // Load stats
      const statsResult = await getInquiryStats();
      if (statsResult.success && statsResult.data) {
        setStats(statsResult.data);
      }

    } catch (err) {
      setError('Failed to load inquiries');
      console.error('Error loading inquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteInquiry = async (contactId: number) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) {
      return;
    }

    try {
      const result = await deleteInquiry(contactId);
      if (result.success) {
        // Remove from local state
        setInquiries(prev => prev.filter(inquiry => inquiry.contact_id !== contactId));
        setShowModal(false);
        setSelectedInquiry(null);
        // Reload stats
        const statsResult = await getInquiryStats();
        if (statsResult.success && statsResult.data) {
          setStats(statsResult.data);
        }
      } else {
        alert(result.message);
      }
    } catch (err) {
      alert('Failed to delete inquiry');
      console.error('Error deleting inquiry:', err);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const parseCamps = (campsString: string | null): string[] => {
    if (!campsString) return [];
    try {
      return JSON.parse(campsString);
    } catch {
      return [];
    }
  };

  // Filter inquiries based on search and filters
  const filteredInquiries = inquiries.filter(inquiry => {
    const matchesSearch = searchTerm === "" || 
      inquiry.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCountry = filterCountry === "" || inquiry.country === filterCountry;
    const matchesExperience = filterExperience === "" || inquiry.experience_type === filterExperience;

    return matchesSearch && matchesCountry && matchesExperience;
  });

  // Get unique values for filters
  const uniqueCountries = [...new Set(inquiries.map(i => i.country))].sort();
  const uniqueExperiences = [...new Set(inquiries.map(i => i.experience_type))].sort();

  if (loading) {
    return (
      <div className={`p-6 ${className}`}>
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-20 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`p-6 ${className}`}>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="text-red-800 font-medium">Error Loading Inquiries</h3>
          <p className="text-red-600 text-sm mt-1">{error}</p>
          <button
            onClick={loadData}
            className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-6 ${className}`}>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Wilderness Inquiries</h1>
        <p className="text-gray-600">Manage customer inquiries and safari applications</p>
      </div>

      {/* Stats Cards */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow border">
            <h3 className="text-sm font-medium text-gray-500">Total Inquiries</h3>
            <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border">
            <h3 className="text-sm font-medium text-gray-500">This Month</h3>
            <p className="text-2xl font-bold text-blue-600">{stats.thisMonth}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border">
            <h3 className="text-sm font-medium text-gray-500">Top Country</h3>
            <p className="text-lg font-semibold text-gray-900">
              {stats.byCountry[0]?.country || 'N/A'}
            </p>
            <p className="text-sm text-gray-500">
              {stats.byCountry[0]?.count || 0} inquiries
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border">
            <h3 className="text-sm font-medium text-gray-500">Popular Experience</h3>
            <p className="text-sm font-semibold text-gray-900">
              {stats.byExperience[0]?.experience_type.substring(0, 20) || 'N/A'}
            </p>
            <p className="text-sm text-gray-500">
              {stats.byExperience[0]?.count || 0} inquiries
            </p>
          </div>
        </div>
      )}

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg shadow border mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
            <select
              value={filterCountry}
              onChange={(e) => setFilterCountry(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Countries</option>
              {uniqueCountries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Experience Type</label>
            <select
              value={filterExperience}
              onChange={(e) => setFilterExperience(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Experiences</option>
              {uniqueExperiences.map(experience => (
                <option key={experience} value={experience}>{experience}</option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <button
              onClick={() => {
                setSearchTerm("");
                setFilterCountry("");
                setFilterExperience("");
              }}
              className="w-full px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Inquiries Table */}
      <div className="bg-white rounded-lg shadow border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Travel Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Experience
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Submitted
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInquiries.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                    No inquiries found matching your criteria
                  </td>
                </tr>
              ) : (
                filteredInquiries.map((inquiry) => (
                  <tr key={inquiry.contact_id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {inquiry.first_name} {inquiry.last_name}
                        </div>
                        <div className="text-sm text-gray-500">{inquiry.email}</div>
                        <div className="text-sm text-gray-500">{inquiry.phone}</div>
                        <div className="text-sm text-gray-500">{inquiry.country}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        Group: {inquiry.group_size}
                      </div>
                      <div className="text-sm text-gray-500">
                        Dates: {inquiry.travel_dates || 'Flexible'}
                      </div>
                      <div className="text-sm text-gray-500">
                        Budget: {inquiry.budget || 'Not specified'}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs">
                        {inquiry.experience_type}
                      </div>
                      {parseCamps(inquiry.camps_interested).length > 0 && (
                        <div className="text-sm text-gray-500 mt-1">
                          Camps: {parseCamps(inquiry.camps_interested).join(', ')}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {inquiry.submission_date ? formatDate(inquiry.submission_date) : 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                      <button
                        onClick={() => {
                          setSelectedInquiry(inquiry);
                          setShowModal(true);
                        }}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        View
                      </button>
                      <button
                        onClick={() => inquiry.contact_id && handleDeleteInquiry(inquiry.contact_id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Results Summary */}
      <div className="mt-4 text-sm text-gray-600">
        Showing {filteredInquiries.length} of {inquiries.length} inquiries
      </div>

      {/* Modal for viewing inquiry details */}
      {showModal && selectedInquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">Inquiry Details</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <p className="text-sm text-gray-900">{selectedInquiry.first_name} {selectedInquiry.last_name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <p className="text-sm text-gray-900">{selectedInquiry.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <p className="text-sm text-gray-900">{selectedInquiry.phone || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Country</label>
                    <p className="text-sm text-gray-900">{selectedInquiry.country}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Travel Dates</label>
                    <p className="text-sm text-gray-900">{selectedInquiry.travel_dates || 'Flexible'}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Group Size</label>
                    <p className="text-sm text-gray-900">{selectedInquiry.group_size}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Experience Type</label>
                    <p className="text-sm text-gray-900">{selectedInquiry.experience_type}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Budget</label>
                    <p className="text-sm text-gray-900">{selectedInquiry.budget || 'Not specified'}</p>
                  </div>
                </div>

                {parseCamps(selectedInquiry.camps_interested).length > 0 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Interested Camps</label>
                    <div className="flex flex-wrap gap-2">
                      {parseCamps(selectedInquiry.camps_interested).map((camp, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {camp}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedInquiry.special_requests && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
                    <p className="text-sm text-gray-900 bg-gray-50 p-3 rounded">
                      {selectedInquiry.special_requests}
                    </p>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700">Submitted</label>
                  <p className="text-sm text-gray-900">
                    {selectedInquiry.submission_date ? formatDate(selectedInquiry.submission_date) : 'N/A'}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex space-x-3">
                <a
                  href={`mailto:${selectedInquiry.email}?subject=Re: Your Safari Inquiry`}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Reply via Email
                </a>
                <button
                  onClick={() => selectedInquiry.contact_id && handleDeleteInquiry(selectedInquiry.contact_id)}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete Inquiry
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inquiries;
