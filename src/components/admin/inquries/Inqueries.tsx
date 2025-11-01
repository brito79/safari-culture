"use client";

import { useState, useEffect, useRef } from "react";
import { Contact } from "@/lib/db/types";
import { getInquiries, deleteInquiry, getInquiryStats } from "@/app/actions/dashboard/inquries";

// Import sub-components
import StatsCards from "./StatsCards";
import SearchFilters from "./SearchFilters";
import InquiriesTable from "./InquiriesTable";
import InquiryModal from "./InquiryModal";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";

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
  
  // Ref to prevent double-loading in React Strict Mode
  const hasLoadedRef = useRef(false);

  // Load inquiries and stats
  useEffect(() => {
    // Prevent double-loading in React Strict Mode (development only)
    if (hasLoadedRef.current) {
      console.log('⏭️ Skipping duplicate load (React Strict Mode)');
      return;
    }
    
    console.log('🔄 Inquiries component mounted - loading data...');
    hasLoadedRef.current = true;
    loadData();
    
    return () => {
      console.log('🔚 Inquiries component unmounting');
    };
  }, []);

  const loadData = async () => {
    try {
      console.log('📊 Starting data load...');
      setLoading(true);
      setError(null);

      // Load inquiries
      console.log('📥 Fetching inquiries...');
      const inquiriesResult = await getInquiries();
      if (inquiriesResult.success && inquiriesResult.data) {
        console.log(`✅ Loaded ${inquiriesResult.data.length} inquiries`);
        setInquiries(inquiriesResult.data);
      } else {
        console.error('❌ Failed to load inquiries:', inquiriesResult.message);
        setError(inquiriesResult.message);
      }

      // Load stats
      console.log('📈 Fetching stats...');
      const statsResult = await getInquiryStats();
      if (statsResult.success && statsResult.data) {
        console.log('✅ Stats loaded successfully');
        setStats(statsResult.data);
      }

    } catch (err) {
      setError('Failed to load inquiries');
      console.error('❌ Error loading inquiries:', err);
    } finally {
      console.log('✅ Data load complete');
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

  const handleViewInquiry = (inquiry: Contact) => {
    setSelectedInquiry(inquiry);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedInquiry(null);
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

  // Loading state
  if (loading) {
    return <LoadingState className={className} />;
  }

  // Error state
  if (error) {
    return <ErrorState error={error} onRetry={loadData} className={className} />;
  }

  return (
    <div className={`p-6 ${className}`}>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Wilderness Inquiries</h1>
        <p className="text-gray-600">Manage customer inquiries and safari applications</p>
      </div>

      {/* Stats Cards */}
      <StatsCards stats={stats} />

      {/* Search and Filters */}
      <SearchFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterCountry={filterCountry}
        setFilterCountry={setFilterCountry}
        filterExperience={filterExperience}
        setFilterExperience={setFilterExperience}
        uniqueCountries={uniqueCountries}
        uniqueExperiences={uniqueExperiences}
      />

      {/* Inquiries Table */}
      <InquiriesTable
        inquiries={filteredInquiries}
        onViewInquiry={handleViewInquiry}
        onDeleteInquiry={handleDeleteInquiry}
      />

      {/* Results Summary */}
      <div className="mt-4 text-sm text-gray-600">
        Showing {filteredInquiries.length} of {inquiries.length} inquiries
      </div>

      {/* Inquiry Details Modal */}
      <InquiryModal
        inquiry={selectedInquiry}
        isOpen={showModal}
        onClose={handleCloseModal}
        onDelete={handleDeleteInquiry}
      />
    </div>
  );
};

export default Inquiries;
