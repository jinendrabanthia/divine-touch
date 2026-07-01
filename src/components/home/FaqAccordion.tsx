"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";

const faqs = [
  {
    question: "Do you deliver across India?",
    answer: "Yes, we provide free delivery and installation services across all major cities and towns in India.",
  },
  {
    question: "What is the warranty period for your massage chairs?",
    answer: "All our premium massage chairs come with a comprehensive 1-year warranty covering manufacturing defects. Extended warranty options are also available.",
  },
  {
    question: "How do I purchase a product?",
    answer: "To ensure you get the right product and the best current price, all our sales are handled personally via WhatsApp. Simply click the 'Chat on WhatsApp' or 'Enquire' buttons, and our team will assist you with the purchase, payment, and delivery scheduling.",
  },
  {
    question: "Do you provide after-sales service?",
    answer: "Absolutely. We have a dedicated pan-India service network to ensure your massage chair continues to function perfectly for years to come.",
  },
  {
    question: "Can I try the massage chair before buying?",
    answer: "Depending on your location, we may have a partner showroom or experience center nearby. Please contact us on WhatsApp with your city, and we'll guide you.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="text-gold-600 font-medium text-sm tracking-widest uppercase">
              Support
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brown-900 mt-2">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4" />
          </div>
        </SectionReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <SectionReveal key={index} delay={index * 0.1}>
              <div 
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                  openIndex === index ? "border-gold-400 bg-cream-50" : "border-cream-200 bg-white"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-heading font-semibold text-lg pr-4 ${
                    openIndex === index ? "text-gold-600" : "text-brown-900"
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "text-gold-600 rotate-180" : "text-brown-500"
                    }`} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-brown-500 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
