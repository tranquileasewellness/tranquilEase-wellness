export default function TranquilEaseWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans bg-[radial-gradient(circle_at_top,_#123524,_#000000)]">
      
      {/* Hero Section */}
      <section className="bg-black py-16 px-6 relative overflow-hidden border-b border-emerald-900/30">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative z-10">
          <h1 className="text-6xl font-serif font-semibold mb-4 text-left leading-tight text-white max-w-3xl">
            Premium Wellness.<br />
            <span className="text-emerald-400">
              Transparent Pricing.
            </span>
          </h1>

          <p className="text-xl max-w-xl text-left text-gray-300 mb-8">
            Luxury massage & wellness therapies, delivered to your comfort.
          </p>

          <p className="max-w-3xl mx-auto text-gray-300 mb-10">
            Professional wellness and relaxation therapy sessions delivered to your doorstep across HSR Layout, Koramangala, Jayanagar, Madiwala, Shantinagar & nearby areas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <a
              href="https://docs.google.com/forms/d/1wIoJ3ZW3RoI7b1pd_yhhl4LnX1wYyvB9Y1aPJgve9lI/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-700 to-emerald-500 text-white font-semibold px-8 py-4 rounded-2xl text-lg shadow-2xl hover:scale-105 transition duration-300 text-center"
            >
              Book Appointment
            </a>

            <a
              href="https://wa.me/918793026125"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-emerald-700 text-emerald-200 px-8 py-4 rounded-2xl text-lg hover:bg-emerald-600 hover:text-white transition duration-300 text-center"
            >
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Premium Images */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0f1720] via-[#13261f] to-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Luxury Wellness",
              desc: "Premium at-home relaxation experience",
              img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop"
            },
            {
              title: "Calm Environment",
              desc: "Designed for stress relief & comfort",
              img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
            },
            {
              title: "Private & Hygienic",
              desc: "Professional wellness sessions at home",
              img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop"
            }
          ].map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-[32px] shadow-2xl border border-emerald-900/30"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-[420px] w-full object-cover brightness-75"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Wellness Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Swedish Relaxation Massage",
            "Deep Tissue Massage",
            "Head, Neck & Shoulder Therapy",
            "Foot Reflexology",
            "Sports Recovery Massage",
            "Stress Relief Wellness Session"
          ].map((service) => (
            <div
              key={service}
              className="bg-gradient-to-br from-[#102019] to-[#0a0f0c] rounded-3xl shadow-2xl p-6 border border-emerald-900/40"
            >
              <h3 className="text-xl font-semibold mb-3 text-emerald-200">
                {service}
              </h3>

              <p className="text-gray-400">
                Professional wellness therapy designed to help you relax, recover, and feel refreshed.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">

          <div className="bg-gradient-to-r from-[#0b1d17] to-black border border-emerald-800 rounded-[36px] overflow-hidden shadow-2xl">

            <div className="p-8 md:p-14 border-b border-emerald-900/40">
              <p className="uppercase tracking-[0.3em] text-emerald-400 text-sm mb-4 text-center">
                Our Services
              </p>

              <h2 className="text-5xl font-serif text-center mb-4">
                Service & <span className="text-emerald-400">Pricing</span>
              </h2>

              <p className="text-gray-300 text-center max-w-3xl mx-auto text-lg">
                Transparent premium wellness pricing designed for comfort and relaxation.
              </p>
            </div>

            <div className="p-10 text-center">
              <h3 className="text-4xl font-serif text-emerald-300 mb-3">
                30% OFF
              </h3>

              <p className="text-gray-300 mb-8">
                Applicable on all services above ₹1,000.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">

                <a
                  href="https://docs.google.com/forms/d/1wIoJ3ZW3RoI7b1pd_yhhl4LnX1wYyvB9Y1aPJgve9lI/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-emerald-700 to-emerald-500 px-8 py-4 rounded-2xl font-semibold text-white"
                >
                  Book Appointment
                </a>

                <a
                  href="https://wa.me/918793026125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-emerald-700 text-emerald-200 px-8 py-4 rounded-2xl"
                >
                  Chat with us on WhatsApp
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-gradient-to-br from-[#08110d] via-black to-[#102019] py-16 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-serif text-white mb-10">
            Why Choose <span className="text-emerald-400">TranquilEase?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-left">

            {[
              "Verified wellness professionals",
              "Hygienic & professional service",
              "Comfortable at-home experience",
              "Appointment-based sessions",
              "Privacy & customer safety prioritized",
              "Convenient booking & support"
            ].map((item) => (
              <div
                key={item}
                className="bg-gradient-to-br from-[#102019] to-black border border-emerald-900/30 p-5 rounded-2xl shadow-xl text-emerald-100"
              >
                ✔ {item}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Areas We Serve
        </h2>

        <p className="text-lg text-emerald-100 max-w-3xl mx-auto">
          HSR Layout • Koramangala • Jayanagar • Madiwala • Shantinagar • BTM Layout
        </p>
      </section>

      {/* Timing */}
      <section className="bg-gradient-to-r from-[#08110d] to-black py-10 px-6 text-center border-t border-emerald-900/30">
        <p className="text-lg text-emerald-100">
          Note: Currently, Monday to Friday appointments are available after 7:00 PM.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-10 text-center px-6">

        <h3 className="text-2xl font-semibold mb-3">
          TranquilEase Wellness
        </h3>

        <p className="text-gray-300 mb-4">
          Premium Home Wellness Services in Bangalore
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          <a
            href="mailto:tranquileasewellness@gmail.com"
            className="hover:underline"
          >
            tranquileasewellness@gmail.com
          </a>

          <a
            href="https://wa.me/918793026125"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Chat with us on WhatsApp
          </a>

        </div>

      </footer>
    </div>
  );
}
