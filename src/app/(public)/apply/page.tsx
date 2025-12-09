import KYCForm from '@/components/kyc/KYCForm';
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';

export const metadata = {
  title: 'Safari Application | Wilderness Namibia',
  description: 'Apply for your luxury safari experience in Namibia',
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <KYCForm />
      <Footer />
    </div>
  );
}
