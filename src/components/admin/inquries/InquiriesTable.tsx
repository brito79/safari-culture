import { Contact } from "@/lib/db/types";

interface InquiriesTableProps {
  inquiries: Contact[];
  onViewInquiry: (inquiry: Contact) => void;
  onDeleteInquiry: (contactId: number) => void;
  className?: string;
}

const InquiriesTable = ({
  inquiries,
  onViewInquiry,
  onDeleteInquiry,
  className = ""
}: InquiriesTableProps) => {
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

  return (
    <div className={`bg-white rounded-lg shadow border overflow-hidden ${className}`}>
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
            {inquiries.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                  No inquiries found matching your criteria
                </td>
              </tr>
            ) : (
              inquiries.map((inquiry) => (
                <tr key={inquiry.contact_id} className="hover:bg-gray-50 transition-colors">
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
                      onClick={() => onViewInquiry(inquiry)}
                      className="text-blue-600 hover:text-blue-900 transition-colors"
                    >
                      View
                    </button>
                    <button
                      onClick={() => inquiry.contact_id && onDeleteInquiry(inquiry.contact_id)}
                      className="text-red-600 hover:text-red-900 transition-colors"
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
  );
};

export default InquiriesTable;