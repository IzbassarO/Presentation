import React from "react";
import "../styles/slide8.css";
import "../styles/hero-slide.css";

import imageTop from "/ai6.jpg";
import imageBottom from "/ai5.jpg";

const Slide8: React.FC = () => {
  return (
    <section className="slide8-root ai-hero-bg">
      <div className="slide8-columns">

        {/* Левая колонна — полностью текстовая VStack */}
        <div className="slide8-left">

          <h1
            className="slide8-title"
            style={{ fontFamily: "PoppinsBold" }}
          >
            Цензура и ограничения интернета
          </h1>

          <h2
            className="slide8-subtitle"
            style={{ fontFamily: "PoppinsSemiBold" }}
          >
            Законы и ограничения
          </h2>
          <p
            className="slide8-description"
            style={{ fontFamily: "PoppinsRegular" }}
          >
            Закон об онлайн-платформах и рекламе (Сентябрь 2023): соцсети с аудиторией более
            100 тыс. обязаны назначить представителя в Казахстане и удалять «ложную информацию»,
            иначе могут быть заблокированы.
          </p>

          <p
            className="slide8-description"
            style={{ fontFamily: "PoppinsRegular" }}
          >
            Закон о СМИ (Апрель 2024): государство контролирует медиа на соответствие
            «универсальным культурным и семейным ценностям».
          </p>

          <h2
            className="slide8-subtitle"
            style={{ fontFamily: "PoppinsSemiBold" }}
          >
            Свобода и контроль
          </h2>
          <p
            className="slide8-description"
            style={{ fontFamily: "PoppinsRegular" }}
          >
            Меры по борьбе с дезинформацией вызывают дилемму: как защищать общество от экстремизма,
            не нарушая свободу выражения и доступ к информации?
          </p>

          <p
            className="slide8-source"
            style={{ fontFamily: "Poppins" }}
          >
            (Kazakhstan: Freedom on the net 2024 report)
          </p>

        </div>

        {/* Правая колонна — две фотографии VStack */}
        <div className="slide8-right">
          <div className="slide8-image-wrapper">
            <img src={imageTop} className="slide8-image" alt="Censorship media visuals" />
          </div>

          <div className="slide8-image-wrapper">
            <img src={imageBottom} className="slide8-image" alt="Cyber control visuals" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Slide8;
