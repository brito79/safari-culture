import { Metadata } from 'next';
import Inquiries from '@/components/admin/inquries/Inqueries';

export const metadata: Metadata = {
  title: 'Safari Inquiries | Admin Dashboard',
  description: 'Manage customer inquiries and safari applications',
};

export default function InquiriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto">
        <Inquiries />
      </main>
    </div>
  );
}
