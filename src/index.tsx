export default function TranquilEaseWebsite() {
  const services = [
    {
      name: "Swedish Relaxation Massage",
      p60: ["₹899", "₹629"],
      p90: ["₹1299", "₹909"],
      p120: ["₹1699", "₹1189"],
    },
    {
      name: "Deep Tissue Massage",
      p60: ["₹999", "₹699"],
      p90: ["₹1499", "₹1049"],
      p120: ["₹1999", "₹1399"],
    },
    {
      name: "Head, Neck & Shoulder Therapy",
      p60: ["₹699", "₹489"],
      p90: ["₹999", "₹699"],
      p120: ["₹1299", "₹909"],
    },
    {
      name: "Foot Reflexology",
      p60: ["₹699", "₹489"],
      p90: ["₹999", "₹699"],
      p120: ["₹1299", "₹909"],
    },
    {
      name: "Sports Recovery Massage",
      p60: ["₹999", "₹699"],
      p90: ["₹1499", "₹1049"],
      p120: ["₹1999", "₹1399"],
    },
    {
      name: "Back Pain Relief Therapy",
      p60: ["₹999", "₹699"],
      p90: ["₹1499", "₹1049"],
      p120: ["₹1999", "₹1399"],
    },
    {
      name: "Stress Relief Wellness Session",
      p60: ["₹899", "₹629"],
      p90: ["₹1299", "₹909"],
      p120: ["₹1699", "₹1189"],
    },
  ];

  return (
    <div
      style={{
        background: "#000",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO */}

      <section
        style={{
          padding: "70px 20px",
          background:
            "linear-gradient(to bottom right, #02140d, #000000)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "62px",
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          TranquilEase Wellness
        </h1>

        <h2
          style={{
            color: "#9FE870",
            fontSize: "34px",
            marginBottom: "30px",
          }}
        >
          Premium Wellness. Transparent Pricing.
        </h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "auto",
            color: "#cccccc",
            fontSize: "20px",
            lineHeight: "1.7",
          }}
        >
          Luxury massage & wellness therapies delivered professionally
          to your doorstep across HSR Layout, Koramangala,
          Jayanagar, Madiwala, Shantinagar & nearby Bangalore areas.
        </p>

        {/* OFFER */}

        <div
          style={{
            marginTop: "50px",
            background: "#081c13",
            border: "1px solid #1c5037",
            borderRadius: "25px",
            padding: "30px",
            maxWidth: "1000px",
            marginInline: "auto",
          }}
        >
          <h2
            style={{
              fontSize: "56px",
              color: "#d4af37",
              margin: "0",
            }}
          >
            30% OFF
          </h2>

          <p
            style={{
              color: "#ffffff",
              fontSize: "22px",
              marginTop: "15px",
            }}
          >
            On All Services Above ₹1,000
          </p>
        </div>

        {/* BUTTONS */}

        <div
          style={{
            marginTop: "45px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://docs.google.com/forms/d/1wIoJ3ZW3RoI7b1pd_yhhl4LnX1wYyvB9Y1aPJgve9lI/viewform"
            target="_blank"
            style={{
              background: "#16a34a",
              color: "white",
              padding: "18px 34px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Book Appointment
          </a>

          <a
            href="https://wa.me/918793026125"
            target="_blank"
            style={{
              border: "1px solid #16a34a",
              color: "#9FE870",
              padding: "18px 34px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* PRICING */}

      <section
        style={{
          padding: "70px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "48px",
            marginBottom: "50px",
          }}
        >
          Service & Pricing
        </h2>

        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              background: "#07130d",
            }}
          >
            <thead>
              <tr>
                <th style={thStyle}>SERVICE</th>
                <th style={thStyle}>60 MIN</th>
                <th style={thStyle}>90 MIN</th>
                <th style={thStyle}>120 MIN</th>
              </tr>
            </thead>

            <tbody>
              {services.map((service) => (
                <tr key={service.name}>
                  <td style={tdStyle}>{service.name}</td>

                  <td style={tdStyle}>
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "#999",
                        marginRight: "10px",
                      }}
                    >
                      {service.p60[0]}
                    </span>

                    <span style={{ color: "#9FE870", fontWeight: "bold" }}>
                      {service.p60[1]}
                    </span>
                  </td>

                  <td style={tdStyle}>
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "#999",
                        marginRight: "10px",
                      }}
                    >
                      {service.p90[0]}
                    </span>

                    <span style={{ color: "#9FE870", fontWeight: "bold" }}>
                      {service.p90[1]}
                    </span>
                  </td>

                  <td style={tdStyle}>
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "#999",
                        marginRight: "10px",
                      }}
                    >
                      {service.p120[0]}
                    </span>

                    <span style={{ color: "#9FE870", fontWeight: "bold" }}>
                      {service.p120[1]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* WHY CHOOSE */}

      <section
        style={{
          background: "#07130d",
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "44px",
            marginBottom: "50px",
          }}
        >
          Why Choose Us
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "25px",
            maxWidth: "1100px",
            margin: "auto",
          }}
        >
          {[
            "Verified Therapists",
            "100% Privacy",
            "Premium Hygiene",
            "Professional Service",
            "Comfort at Home",
            "Easy Booking",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#0d1d15",
                border: "1px solid #1c5037",
                borderRadius: "20px",
                padding: "30px",
              }}
            >
              <h3
                style={{
                  color: "#9FE870",
                  fontSize: "24px",
                }}
              >
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}

      <footer
        style={{
          textAlign: "center",
          padding: "40px 20px",
          borderTop: "1px solid #163c28",
        }}
      >
        <h2>TranquilEase Wellness</h2>

        <p style={{ color: "#cccccc" }}>
          Premium Home Wellness Services in Bangalore
        </p>

        <p style={{ marginTop: "15px" }}>
          <a
            href="mailto:tranquileasewellness@gmail.com"
            style={{
              color: "#9FE870",
              textDecoration: "none",
            }}
          >
            tranquileasewellness@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}

const thStyle = {
  border: "1px solid #1c5037",
  padding: "18px",
  background: "#0d1d15",
  color: "#9FE870",
};

const tdStyle = {
  border: "1px solid #1c5037",
  padding: "18px",
  textAlign: "center",
};
