export default function TranquilEaseWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans bg-[radial-gradient(circle_at_top,_#123524,_#000000)]">
      {/* Hero Section */}
      <section className="bg-black py-16 px-6 relative overflow-hidden border-b border-emerald-900/30">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="relative z-10">
        <h1 className="text-6xl font-serif font-semibold mb-4 text-left leading-tight text-white max-w-3xl">
          Premium Wellness.<br />
          <span className="text-emerald-400">Transparent Pricing.</span>
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

      {/* Premium Wellness Image Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0f1720] via-[#13261f] to-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="relative overflow-hidden rounded-[32px] shadow-2xl border border-emerald-900/30">
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop"
              alt="Luxury spa stones"
              className="h-[420px] w-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-semibold mb-2">Luxury Wellness</h3>
              <p className="text-sm text-gray-300">Premium at-home relaxation experience</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] shadow-2xl border border-emerald-900/30">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
              alt="Spa stones and candles"
              className="h-[420px] w-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-semibold mb-2">Calm Environment</h3>
              <p className="text-sm text-gray-300">Designed for stress relief & comfort</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] shadow-2xl border border-emerald-900/30">
            <img
              src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop"
              alt="Aroma wellness"
              className="h-[420px] w-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-semibold mb-2">Private & Hygienic</h3>
              <p className="text-sm text-gray-300">Professional wellness sessions at home</p>
            </div>
          </div>
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
            "Stress Relief Wellness Session",
          ].map((service) => (
            <div
              key={service}
              className="bg-gradient-to-br from-[#102019] to-[#0a0f0c] rounded-3xl shadow-2xl p-6 border border-emerald-900/40 hover:shadow-emerald-900/20 hover:-translate-y-1 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-emerald-200">{service}</h3>
              <p className="text-gray-400">
                Professional wellness therapy designed to help you relax, recover, and feel refreshed.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
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
                Transparent premium wellness pricing designed for comfort, relaxation, and convenience at your home.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[1100px]">
                <thead>
                  <tr className="border-b border-emerald-900/40 bg-[#08110d]">
                    <th className="p-6 text-emerald-300 text-lg">Service</th>
                    <th className="p-6 text-emerald-300 text-lg">60 Minutes</th>
                    <th className="p-6 text-emerald-300 text-lg">90 Minutes</th>
                    <th className="p-6 text-emerald-300 text-lg">120 Minutes</th>
                    <th className="p-6 text-emerald-300 text-lg">Benefits</th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    {
                      service: "Swedish Relaxation Massage",
                      m60Original: "₹899",
                      m60: "₹629",
                      m90Original: "₹1299",
                      m90: "₹909",
                      m120Original: "₹1699",
                      m120: "₹1189",
                      benefit: "Stress relief & deep relaxation",
                    },
                    {
                      service: "Deep Tissue Massage",
                      m60Original: "₹999",
                      m60: "₹699",
                      m90Original: "₹1499",
                      m90: "₹1049",
                      m120Original: "₹1999",
                      m120: "₹1399",
                      benefit: "Relieves chronic pain & muscle tension",
                    },
                    {
                      service: "Head, Neck & Shoulder Therapy",
                      m60Original: "₹699",
                      m60: "₹489",
                      m90Original: "₹999",
                      m90: "₹699",
                      m120Original: "₹1299",
                      m120: "₹909",
                      benefit: "Improves mobility & reduces stiffness",
                    },
                    {
                      service: "Foot Reflexology",
                      m60Original: "₹699",
                      m60: "₹489",
                      m90Original: "₹999",
                      m90: "₹699",
                      m120Original: "₹1299",
                      m120: "₹909",
                      benefit: "Improves sleep & body relaxation",
                    },
                    {
                      service: "Sports Recovery Massage",
                      m60Original: "₹999",
                      m60: "₹699",
                      m90Original: "₹1499",
                      m90: "₹1049",
                      m120Original: "₹1999",
                      m120: "₹1399",
                      benefit: "Speeds recovery & improves performance",
                    },
                    {
                      service: "Back Pain Relief Therapy",
                      m60Original: "₹999",
                      m60: "₹699",
                      m90Original: "₹1499",
                      m90: "₹1049",
                      m120Original: "₹1999",
                      m120: "₹1399",
                      benefit: "Improves posture & relieves back pain",
                    },
                    {
                      service: "Stress Relief Wellness Session",
                      m60Original: "₹899",
                      m60: "₹629",
                      m90Original: "₹1299",
                      m90: "₹909",
                      m120Original: "₹1699",
                      m120: "₹1189",
                      benefit: "Calms mind & reduces stress",
                    },
                    {
                      service: "Senior Citizen Relaxation Therapy",
                      m60Original: "₹899",
                      m60: "₹629",
                      m90Original: "₹1299",
                      m90: "₹909",
                      m120Original: "₹1699",
                      m120: "₹1189",
                      benefit: "Gentle therapy for comfort & well-being",
                    },
                    {
                      service: "Corporate Wellness Session",
                      m60Original: "₹1199",
                      m60: "₹839",
                      m90Original: "₹1699",
                      m90: "₹1189",
                      m120Original: "₹2299",
                      m120: "₹1609",
                      benefit: "Boosts productivity & reduces stress",
                    },
                    {
                      service: "Custom Wellness Session",
                      m60Original: "₹1099",
                      m60: "₹769",
                      m90Original: "₹1599",
                      m90: "₹1119",
                      m120Original: "₹2199",
                      m120: "₹1539",
                      benefit: "Customized wellness experience",
                    },
                  ].map((item) => (
                    <tr key={item.service} className="border-b border-emerald-900/20 hover:bg-emerald-950/20 transition">
                      <td className="p-6 font-medium text-white">{item.service}</td>
                      <td className="p-6 font-semibold">
                        <span className="text-gray-500 line-through mr-2">{item.m60Original}</span>
                        <span className="text-emerald-300">{item.m60}</span>
                      </td>
                      <td className="p-6 font-semibold">
                        <span className="text-gray-500 line-through mr-2">{item.m90Original}</span>
                        <span className="text-emerald-300">{item.m90}</span>
                      </td>
                      <td className="p-6 font-semibold">
                        <span className="text-gray-500 line-through mr-2">{item.m120Original}</span>
                        <span className="text-emerald-300">{item.m120}</span>
                      </td>
                      <td className="p-6 text-gray-300">{item.benefit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-8 md:p-10 border-t border-emerald-900/30 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#08110d] to-black">
              <div>
                <h3 className="text-4xl font-serif text-emerald-300 mb-2">30% OFF</h3>
                <p className="text-lg text-gray-300">
                  Applicable on all services above ₹1,000.
                </p>
              </div>

              <div className="flex gap-4 flex-wrap justify-center">
                <button
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSc-demo/viewform', '_blank')}
                  type="button"
                  className="bg-gradient-to-r from-emerald-700 to-emerald-500 px-8 py-4 rounded-2xl font-semibold text-white hover:scale-105 transition"
                >
                  Book Appointment
                </button>

                <button
                  onClick={() => window.open('https://wa.me/918793026125?text=Hi', '_blank')}
                  type="button"
                  className="border border-emerald-700 text-emerald-200 px-8 py-4 rounded-2xl hover:bg-emerald-700 hover:text-white transition"
                >
                  Chat with us on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-br from-[#08110d] via-black to-[#102019] py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-white mb-10">Why Choose <span className="text-emerald-400">TranquilEase?</span></h2>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "Verified wellness professionals",
              "Hygienic & professional service",
              "Comfortable at-home experience",
              "Appointment-based sessions",
              "Privacy & customer safety prioritized",
              "Convenient booking & support",
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

      {/* Areas Served */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Areas We Serve</h2>
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
        <h3 className="text-2xl font-semibold mb-3">TranquilEase Wellness</h3>
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
          <button onClick={() => window.open('https://wa.me/918793026125?text=Hi', '_blank')} type="button" className="hover:underline">
            Chat with us on WhatsApp
          </button>
          <button onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSc-demo/viewform', '_blank')} type="button" className="hover:underline">
            Book Appointment
          </button>
        </div>
      </footer>
    </div>
  );
}
