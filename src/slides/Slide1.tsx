import React from "react";
import "../styles/hero-slide.css";
import avatar from "/cyber.png";
import small from "/small.png";
import big from "/big.png";

const Slide1: React.FC = () => {
  return (
    <div className="hero-root ai-hero-bg">
      {/* ЛЕВЫЕ линии-связи */}
      <div className="hero-lines" />

      {/* ЛЕВАЯ ТЕКСТОВАЯ КОЛОНКА */}
      <div className="hero-left">
        <div className="chip" style={{ fontFamily: "ModernismBold" }}>
          Artificial Intelligence
        </div>

        <h1
          className="hero-title"
          style={{ fontFamily: "PoppinsSemiBold" }}
        >
          Философия искусственного интеллекта как часть философии науки
        </h1>

        <div className="status-row">
          <div className="danger" style={{ fontFamily: "ModernismBold" }}>
            Science
          </div>
          <div className="tag" style={{ fontFamily: "ModernismBold" }}>
            DIGITALIZATION
          </div>
        </div>

        <div className="author">
          <img
            src={avatar}
            className="author-avatar"
            alt="Izbassar avatar"
          />
          <div className="author-text">
            <div className="author-name">Izbassar Orynbassar</div>
            <div className="author-role">Software Engineer</div>
          </div>
        </div>
      </div>

      {/* ПРАВЫЕ КАРТИНКИ */}
      <div className="hero-right">
        <div className="hero-image-stack">
          <div className="image-card large">
            <img src={big} alt="Big digital city" />
          </div>

          <div className="image-card small">
            <img src={small} alt="Hands on keyboard" />
          </div>
        </div>
      </div>

      {/* ИКОНКИ СВЕРХУ */}
      <div className="metrics" style={{ fontFamily: "PoppinsSemiBold" }}>
        <Metric icon="🧠" label="COGNITION" />
        <Metric icon="⚖️" label="RESPONSIBILITY" />
        <Metric icon="🤖" label="AUTONOMY" />
        <Metric icon="🎯" label="PURPOSE" />
      </div>
    </div>
  );
};

export default Slide1;

const Metric = ({ icon, label }: { icon: string; label: string }) => (
  <div className="metric">
    <div className="icon">{icon}</div>
    <span>{label}</span>
  </div>
);
