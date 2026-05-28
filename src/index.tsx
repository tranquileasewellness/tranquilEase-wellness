export default function TranquilEaseWebsite() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom, #06110b, #000000)",
      color: "white",
      fontFamily: "Arial, sans-serif"
    }}>

      <section style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "linear-gradient(to bottom, #0b1d17, #000000)"
      }}>
        <h1 style={{
          fontSize: "60px",
          marginBottom: "20px"
        }}>
          TranquilEase Wellness
        </h1>

        <p style={{
          fontSize: "24px",
          color: "#9FE870",
          marginBottom: "20px"
        }}>
          Premium Home Wellness Services in Bangalore
        </p>

        <p style={{
          maxWidth: "800px",
          margin: "auto",
          color: "#cccccc",
          fontSize: "18px",
          lineHeight: "1.7"
        }}>
          Luxury wellness and relaxation therapy sessions delivered professionally
          to your doorstep across HSR Layout, Koramangala, Jayanagar,
          Madiwala, Shantinagar & nearby areas.
        </p>

        <div style={{
          marginTop: "40px",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          <a
            href="https://docs.google.com/forms/d/1wIoJ3ZW3RoI7b1pd_yhhl4LnX1wYyvB9Y1aPJgve9lI/viewform"
            target="_blank"
            style={{
              background: "#16a34a",
              color: "white",
              padding: "16px 30px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: "bold"
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
              padding: "16px 30px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <section style={{
        padding: "80px 20px"
      }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "50px"
        }}>
          Service & Pricing
        </h2>

        <div style={{
          overflowX: "auto"
        }}>
          <table style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "#07130d"
          }}>
            <thead>
              <tr>
                <th style={thStyle}>Service</th>
                <th style={thStyle}>60 Min</th>
                <th style={thStyle}>90 Min</th>
                <th style={thStyle}>120 Min</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Swedish Relaxation Massage", "₹899 → ₹629", "₹1299 → ₹909", "₹1699 → ₹1189"],
                ["Deep Tissue Massage", "₹999 → ₹699", "₹1499 → ₹1049", "₹1999 → ₹1399"],
                ["Head, Neck & Shoulder Therapy", "₹699 → ₹489", "₹999 → ₹699", "₹1299 → ₹909"],
                ["Foot Reflexology", "₹699 → ₹489", "₹999 → ₹699", "₹1299 → ₹909"],
                ["Sports Recovery Massage", "₹999 → ₹699", "₹1499 → ₹1049", "₹1999 → ₹1399"],
                ["Stress Relief Wellness Session", "₹899 → ₹629", "₹1299 → ₹909", "₹1699 → ₹1189"]
              ].map((item) => (
                <tr key={item[0]}>
                  <td style={tdStyle}>{item[0]}</td>
                  <td style={tdStyle}>{item[1]}</td>
                  <td style={tdStyle}>{item[2]}</td>
                  <td style={tdStyle}>{item[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{
          textAlign: "center",
          marginTop: "40px",
          color: "#9FE870",
          fontSize: "22px",
          fontWeight: "bold"
        }}>
          30% OFF on Services Above ₹1,000
        </div>
      </section>

      <section style={{
        padding: "70px 20px",
        background: "#07130d",
        textAlign: "center"
      }}>
        <h2 style={{
          fontSize: "40px",
          marginBottom: "30px"
        }}>
          Why Choose Us
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "auto"
        }}>
          {[
            "Verified Therapists",
            "Premium Hygiene",
            "Privacy Focused",
            "Comfort at Home",
            "Professional Service",
            "Easy Booking"
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "30px",
                borderRadius: "20px",
                background: "#0d1d15",
                border: "1px solid #163c28"
              }}
            >
              <h3 style={{
                color: "#9FE870"
              }}>
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <footer style={{
        padding: "40px 20px",
        textAlign: "center",
        borderTop: "1px solid #163c28"
      }}>
        <h3 style={{
          fontSize: "28px"
        }}>
          TranquilEase Wellness
        </h3>

        <p style={{
          color: "#cccccc",
          marginTop: "10px"
        }}>
          Premium Home Wellness Services in Bangalore
        </p>

        <div style={{
          marginTop: "20px"
        }}>
          <a
            href="mailto:tranquileasewellness@gmail.com"
            style={{
              color: "#9FE870",
              textDecoration: "none"
            }}
          >
            tranquileasewellness@gmail.com
          </a>
        </div>
      </footer>
    </div>
  )
}

const thStyle = {
  border: "1px solid #163c28",
  padding: "16px",
  color: "#9FE870",
  background: "#0d1d15"
}

const tdStyle = {
  border: "1px solid #163c28",
  padding: "16px",
  color: "white"
}
