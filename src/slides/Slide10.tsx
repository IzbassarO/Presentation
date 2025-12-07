import React from "react";
import "../styles/slide10.css";
import "../styles/hero-slide.css";

const LINKEDIN_URL = "https://www.linkedin.com/in/izbassar/";
const QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
  LINKEDIN_URL
)}`;

const Slide10: React.FC = () => {
  return (
    <section className="slide10-root ai-hero-bg">
      <div className="slide10-vstack">

        <h1
        className="slide10-title"
        style={{ fontFamily: "PoppinsExtraBold" }}
        >
          Спасибо за внимание!
        </h1>

        <p
        className="slide10-subtitle"
        style={{ fontFamily: "Poppins" }}
        >
          Мой LinkedIn профиль:
        </p>

        <div className="slide10-qr-wrapper">
          <img
            src={QR_URL}
            alt="QR code to LinkedIn profile"
            className="slide10-qr"
          />
        </div>

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          className="slide10-link"
          style={{ fontFamily: "Poppins" }}
        >
          https://www.linkedin.com/in/izbassar/
        </a>

      </div>
    </section>
  );
};

export default Slide10;
