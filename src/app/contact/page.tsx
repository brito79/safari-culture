import Navigation from "@/components/ui/Navigation";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactResources from "@/components/contact/ContactResources";
import Footer from "@/components/ui/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation className="bg-white shadow-md" />

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
