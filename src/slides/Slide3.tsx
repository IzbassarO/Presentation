import React from "react";
import "../styles/slide3.css";
import "../styles/hero-slide.css";

import photo1 from "/big.png";
import photo2 from "/small.png";
import photo3 from "/cyber.png";

const Slide3: React.FC = () => {
  return (
    <div className="slide3-root ai-hero-bg">
      <div className="slide3-grid">

        {/* ========== LEFT COLUMN ========== */}
        <div className="left-stack">
          <div className="img-card-left">
            <img src={photo1} alt="AI Visual" />
          </div>

          <h1
            className="slide3-main-title"
            style={{ fontFamily: "PoppinsBold" }}
          >
            Философия искусственного интеллекта
          </h1>

          <div className="img-card-left small-img-left">
            <img src={photo2} alt="Philosophy AI" />
          </div>
        </div>

        {/* ========== RIGHT COLUMN ========== */}
        <div className="right-stack">

          <div className="img-card-right glass">
            <img src={photo3} alt="Cyber Brain" />
          </div>

          <div className="text-block">
            <h2
              className="slide3-subtitle"
              style={{ fontFamily: "PoppinsSemiBold" }}
            >Общая характеристика</h2>

            <ul
              className="bullet-list"
              style={{ fontFamily: "PoppinsMedium" }}
            >
              <li>Возникла во второй половине XX века.</li>
              <li>Исходит из вопроса Тьюринга: «Может ли машина мыслить?»</li>
              <li>
                Связана с онтологией, гносеологией, философией сознания и этикой.
              </li>
              <li>
                Рассматривает ИИ как культурный и познавательный феномен,
                а не просто технологию.
              </li>
            </ul>
          </div>

          <div className="text-block highlight">
            <h2
              className="slide3-subtitle"
              style={{ fontFamily: "PoppinsBold" }}
            >Предмет философии ИИ</h2>

            <p
              className="slide3-description"
              style={{ fontFamily: "PoppinsMedium" }}
            >
              ФИИ исследует природу машинного мышления и знания,
              возможность существования искусственного разума и
              социально-культурные последствия внедрения ИИ.
              Это междисциплинарная область, объединяющая философов,
              учёных-когнитивистов и специалистов по ИИ.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Slide3;
