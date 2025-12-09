import { auth0 } from '@/lib/auth0';
import { redirect } from 'next/navigation';
import EditContactInfoForm from '@/components/admin/contact/EditContactInfoForm';

export const metadata = {
  title: 'Edit Contact Information | Admin Dashboard',
  description: 'Manage contact information displayed on the website',
};

export default async function EditContactInfoPage() {
  const session = await auth0.getSession();

  if (!session) {
    redirect('/api/auth/login');
  }

  return (
    <div className="min-h-screen bg-stone-50 py-4 sm:py-6 lg:py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-light text-stone-900 mb-2">
            Edit Contact Information
          </h1>
          <p className="text-sm sm:text-base text-stone-600">
            Update the contact details displayed on the contact page
          </p>
        </div>

        {/* Form */}
        <EditContactInfoForm />
      </div>
    </div>
  );
}
