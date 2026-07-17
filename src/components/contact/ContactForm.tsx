"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // 1. Send data to our server API
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setStatus("success");
      
      // 2. Still open WhatsApp for immediate conversation (fallback)
      const text = `Hi, I am ${formData.name}.\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`;
      window.open(getWhatsAppUrl(text), "_blank", "noopener,noreferrer");

      setFormData({ name: "", phone: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-cream-200">
      <h2 className="font-heading text-2xl font-bold text-brown-900 mb-6">
        Send us a Message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brown-700 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 focus:bg-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all duration-300 text-brown-900"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brown-700 mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            required
            pattern="[0-9+\-\s]{7,15}"
            title="Please enter a valid phone number (7-15 digits)"
            className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 focus:bg-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all duration-300 text-brown-900"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-brown-700 mb-1.5">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 focus:bg-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all duration-300 text-brown-900 resize-none"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="I am interested in..."
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="w-full flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white px-6 py-3.5 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <span className="animate-pulse">Sending...</span>
          ) : status === "success" ? (
            <span>Sent Successfully!</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Submit Enquiry & WhatsApp
            </>
          )}
        </button>

        {status === "error" && (
          <p className="text-red-500 text-sm text-center mt-2">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
