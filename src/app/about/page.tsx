import { Metadata } from "next";
import { BRAND } from "@/lib/constants";
import SectionReveal from "@/components/shared/SectionReveal";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import CtaBanner from "@/components/home/CtaBanner";
import { Target, Heart, ShieldCheck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${BRAND.fullName}, our mission, and our commitment to premium wellness products.`,
};

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To bring professional-grade massage therapy into every home, making wellness accessible, comfortable, and luxurious.",
  },
  {
    icon: Heart,
    title: "Health First",
    description: "We believe that relaxation is not a luxury, but a necessity for physical and mental well-being in today's fast-paced world.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Quality",
    description: "Every product undergoes rigorous testing to ensure durability, safety, and therapeutic effectiveness.",
  },
  {
    icon: Users,
    title: "Customer Centric",
    description: "Our relationship doesn't end at the sale. We provide comprehensive pan-India support for complete peace of mind.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-cream-100 pt-20 pb-24 border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <span className="text-gold-600 font-medium text-sm tracking-widest uppercase mb-4 block">
              Our Story
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brown-900 mb-6">
              Redefining <span className="text-gold-gradient">Wellness</span>
            </h1>
            <p className="text-brown-500 max-w-2xl mx-auto text-lg leading-relaxed">
              {BRAND.fullName} was founded with a simple vision: to create the ultimate relaxation experience for the modern lifestyle.
            </p>
          </SectionReveal>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal direction="left">
              <ImagePlaceholder
                label="About — Showroom / Team"
                aspectRatio="4/3"
                size="lg"
              />
            </SectionReveal>

            <SectionReveal direction="right">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brown-900 mb-6">
                The Art of Relaxation
              </h2>
              <div className="space-y-6 text-brown-500 leading-relaxed">
                <p>
                  At {BRAND.name}, we understand that true wellness starts from within. For years, we have been at the forefront of massage technology, bringing the therapeutic benefits of professional spas directly to your living room.
                </p>
                <p>
                  Our chairs are meticulously engineered using a blend of ancient massage principles and cutting-edge robotics. From zero-gravity reclining to 4D SL-track mechanisms, every feature is designed to alleviate stress, reduce muscle tension, and improve blood circulation.
                </p>
                <p>
                  Based in India, we have built a robust network ensuring that no matter where you are, you receive not just a product, but a premium service experience.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brown-900 mt-2">
                Our Core Values
              </h2>
              <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4" />
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <SectionReveal key={value.title} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-cream-200 h-full hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center mb-6">
                    <value.icon className="w-6 h-6 text-gold-600" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-brown-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-brown-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>

      <CtaBanner />
    </>
  );
}
