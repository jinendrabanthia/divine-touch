"use client";

const benefits = [
  { bold: "Up to 5-Year", normal: "On-Site Warranty" },
  { bold: "Free Pan India", normal: "Delivery" },
];

export default function HeroBenefitStrip() {
  const repeatedItems = Array.from({ length: 8 }, () => benefits).flat();

  return (
    <section className="overflow-hidden bg-black">
      <div className="hero-marquee-container">
        <div className="hero-marquee-track">
          {repeatedItems.map((item, index) => (
            <div key={index} className="hero-marquee-item">
              <span className="text-white font-semibold tracking-wide">{item.bold}</span>
              <span className="text-white font-normal tracking-normal">{item.normal}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
