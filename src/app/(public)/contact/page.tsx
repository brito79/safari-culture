import Navigation from "@/components/shared/Navigation";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactResources from "@/components/contact/ContactResources";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: 'Submit Your Inquiry | Wilderness Namibia',
  description: 'Contact our safari specialists to plan your perfect Namibian wilderness experience',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Navigation */}
      <Navigation className="bg-white shadow-md" />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/hot-air-balloon/nam_balloon_saf_2014-12-6e.jpg)` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide">
            Submit Your Inquiry
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Begin your journey to Namibia's wilderness. Our safari specialists will craft a personalized experience just for you.
          </p>
        </div>
        
        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="rgb(250 250 249)"/>
          </svg>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Contact Information */}
      <ContactInfo />

      {/* Quick Links */}
      <ContactResources />

      {/* Footer */}
      <Footer />
    </div>
  );
}
