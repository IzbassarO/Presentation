import React from "react";
import "../styles/slide2.css";
import "../styles/hero-slide.css";

import big from "/ai2.png";
import small from "/ai1.jpg";

const Slide2: React.FC = () => {
  return (
    <div className="slide2-root ai-hero-bg">
      {/* ЛЕВАЯ ЧАСТЬ: 2 ФОТО */}
      <div className="slide2-left">
        <div className="slide2-main-image">
          <img src={big} alt="Иллюстрация искусственного интеллекта" />
        </div>

        <div className="slide2-secondary-image">
          <img src={small} alt="Символ цифрового интеллекта" />
        </div>
      </div>

      {/* ПРАВАЯ ЧАСТЬ: TITLE + БЛОКИ ТЕКСТА */}
      <div className="slide2-right">
        <div className="slide2-title-box">
          <h1
            className="slide2-title"
            style={{ fontFamily: "PoppinsBold" }}
          >
            Что такое&nbsp;искусственный интеллект?
          </h1>
        </div>

        <div className="slide2-block">
          <h2
            className="slide2-subtitle"
            style={{ fontFamily: "PoppinsSemiBold" }}
          >
            Определение ИИ
          </h2>
          <p
            className="slide2-text"
            style={{ fontFamily: "PoppinsRegular" }}
          >
            Искусственный интеллект — это область науки и технологий,
            создающая системы, которые выполняют задачи, требующие
            человеческого интеллекта: анализ, обучение, принятие решений,
            распознавание образов.
          </p>
        </div>

        <div className="slide2-block">
          <h2
            className="slide2-subtitle"
            style={{ fontFamily: "PoppinsSemiBold" }}
          >
            Современный «узкий» ИИ
          </h2>
          <p
            className="slide2-text"
            style={{ fontFamily: "PoppinsRegular" }}
          >
            Большинство реальных систем — узкий ИИ: модели для речи, поиска,
            рекомендаций, медицины. Они не обладают сознанием и эмоциями, а
            лишь обрабатывают данные по заданным алгоритмам — это важная
            отправная точка для последующих философских вопросов.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
