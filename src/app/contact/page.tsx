import { Metadata } from "next";
import { Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { BRAND, CONTACT } from "@/lib/constants";
import SectionReveal from "@/components/shared/SectionReveal";
import ContactForm from "@/components/contact/ContactForm";
import MapPlaceholder from "@/components/contact/MapPlaceholder";
import { getDefaultWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${BRAND.fullName} for enquiries, support, and sales.`,
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-cream-100 pt-20 pb-16 border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <span className="text-gold-600 font-medium text-sm tracking-widest uppercase mb-4 block">
              Get in Touch
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brown-900 mb-6">
              We&apos;re Here to <span className="text-gold-gradient">Help</span>
            </h1>
            <p className="text-brown-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Have a question about our products? Need assistance choosing the right massage chair? Our wellness experts are ready to assist you.
            </p>
          </SectionReveal>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <SectionReveal direction="left">
                <h2 className="font-heading text-2xl font-bold text-brown-900 mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-cream-50 transition-colors border border-transparent hover:border-cream-200">
                    <div className="w-10 h-10 rounded-full bg-whatsapp/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-whatsapp" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brown-900 mb-1">WhatsApp Sales</h3>
                      <a 
                        href={getDefaultWhatsAppUrl()} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brown-500 hover:text-whatsapp transition-colors"
                      >
                        {CONTACT.whatsapp.display}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-cream-50 transition-colors border border-transparent hover:border-cream-200">
                    <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brown-900 mb-1">Call Us</h3>
                      <a 
                        href={`tel:${CONTACT.phone.number}`}
                        className="text-brown-500 hover:text-gold-600 transition-colors"
                      >
                        {CONTACT.phone.display}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-cream-50 transition-colors border border-transparent hover:border-cream-200">
                    <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brown-900 mb-1">Email</h3>
                      <a 
                        href={`mailto:${BRAND.email}`}
                        className="text-brown-500 hover:text-gold-600 transition-colors break-all"
                      >
                        {BRAND.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-cream-50 transition-colors border border-transparent hover:border-cream-200">
                    <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brown-900 mb-1">Working Hours</h3>
                      <p className="text-brown-500">
                        Mon - Sat: 10:00 AM - 8:00 PM<br/>
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <SectionReveal direction="right">
                <ContactForm />
              </SectionReveal>
            </div>

          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-[400px] w-full relative">
        <SectionReveal>
          <div className="absolute inset-0 p-4 sm:p-8">
            <MapPlaceholder />
          </div>
        </SectionReveal>
      </div>
    </>
  );
}
