import { Contact } from "@/lib/db/types";

interface InquiryModalProps {
  inquiry: Contact | null;
  isOpen: boolean;
  onClose: () => void;
  onDelete: (contactId: number) => void;
  className?: string;
}

const InquiryModal = ({
  inquiry,
  isOpen,
  onClose,
  onDelete,
  className = ""
}: InquiryModalProps) => {
  if (!isOpen || !inquiry) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const parseCamps = (campsString: string | null | undefined): string[] => {
    if (!campsString) return [];
    try {
      return JSON.parse(campsString);
    } catch {
      return [];
    }
  };

  const handleDelete = () => {
    if (inquiry.contact_id) {
      onDelete(inquiry.contact_id);
    }
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 ${className}`}>
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Inquiry Details</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <p className="text-sm text-gray-900">{inquiry.first_name} {inquiry.last_name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="text-sm text-gray-900">{inquiry.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <p className="text-sm text-gray-900">{inquiry.phone || 'Not provided'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <p className="text-sm text-gray-900">{inquiry.country}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Travel Dates</label>
                <p className="text-sm text-gray-900">{inquiry.travel_dates || 'Flexible'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Group Size</label>
                <p className="text-sm text-gray-900">{inquiry.group_size}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Experience Type</label>
                <p className="text-sm text-gray-900">{inquiry.experience_type}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Budget</label>
                <p className="text-sm text-gray-900">{inquiry.budget || 'Not specified'}</p>
              </div>
            </div>

            {/* Interested Camps */}
            {parseCamps(inquiry.camps_interested).length > 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Interested Camps</label>
                <div className="flex flex-wrap gap-2">
                  {parseCamps(inquiry.camps_interested).map((camp, index) => (
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

            {/* Special Requests */}
            {inquiry.special_requests && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
                <p className="text-sm text-gray-900 bg-gray-50 p-3 rounded">
                  {inquiry.special_requests}
                </p>
              </div>
            )}

            {/* Submission Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Submitted</label>
              <p className="text-sm text-gray-900">
                {inquiry.submission_date ? formatDate(inquiry.submission_date) : 'N/A'}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex space-x-3">
            <a
              href={`mailto:${inquiry.email}?subject=Re: Your Safari Inquiry`}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Reply via Email
            </a>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Delete Inquiry
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryModal;