import Link from 'next/link';
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const params = await searchParams;
  const applicationId = params.id;
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-light text-stone-900 mb-4">
            Application Submitted Successfully!
          </h1>
          
          <p className="text-lg text-stone-600 mb-6">
            Thank you for your safari application. We&apos;ve received your information and will review it shortly.
          </p>
          
          {applicationId && (
            <div className="p-4 bg-stone-50 rounded-lg mb-8">
              <p className="text-sm text-stone-600 mb-1">Your Application ID</p>
              <p className="text-xl font-semibold text-stone-900">{applicationId}</p>
              <p className="text-xs text-stone-500 mt-2">
                Please save this ID for your records
              </p>
            </div>
          )}
          
          <div className="space-y-4">
            <p className="text-stone-600">
              A confirmation email has been sent to your email address with all the details.
            </p>
            
            <p className="text-stone-600">
              Our team will review your application and contact you within 24-48 hours to discuss your safari experience.
            </p>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3 bg-gradient-to-r from-sunset-500 to-orange-600
                         text-white rounded-lg hover:from-sunset-600 hover:to-orange-700
                         transition-all duration-300 font-semibold shadow-lg"
            >
              Return to Home
            </Link>
            <Link
              href="/camps"
              className="px-8 py-3 border-2 border-stone-300 text-stone-900 rounded-lg
                         hover:bg-stone-100 transition-all duration-300 font-semibold"
            >
              Explore Camps
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
