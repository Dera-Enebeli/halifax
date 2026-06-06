const reasons = [
  { icon: "\u2605", title: "Expert Agents", description: "Deep market knowledge and years of experience guiding clients through California's luxury market." },
  { icon: "\u2610", title: "Local Knowledge", description: "Intimate understanding of neighborhoods, schools, and lifestyle offerings across every community." },
  { icon: "\u270E", title: "Premium Marketing", description: "Cinematic photography, editorial staging, and targeted campaigns that showcase your home's finest qualities." },
  { icon: "\u25B6", title: "Virtual Tours", description: "Immersive digital experiences that bring every room to life, from anywhere in the world." },
  { icon: "\u2606", title: "Negotiation Experts", description: "Strategic negotiators who protect your interests and secure the best possible outcome." },
  { icon: "\u25C6", title: "Full-Service Support", description: "From first tour to final signature, a dedicated team ensures a seamless, stress-free experience." },
]

export default function WhyUs() {
  return (
    <section className="py-[100px]">
      <div className="max-w-page section-padding">
        <div className="text-center mb-14">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title" style={{ marginBottom: 12 }}>Built around you</h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            Every detail of your journey is crafted with care by California&apos;s most dedicated luxury real estate team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center px-2">
              <span className="block text-[28px] text-terracotta mb-5 leading-none">{reason.icon}</span>
              <h3
                className="font-serif text-xl text-near-black mb-2.5 leading-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500 font-light">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
