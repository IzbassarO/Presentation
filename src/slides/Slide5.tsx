import React from "react";
import "../styles/slide5.css";
import "../styles/hero-slide.css";

import photo from "/ai10.png";

const Slide5: React.FC = () => {
  return (
    <div className="slide5-root ai-hero-bg">

      {/* ===== TITLE ===== */}
      <h1
        className="slide5-title"
        style={{ fontFamily: "PoppinsBold" }}
      >
        Гносеология ИИ — знание и мышление машин
      </h1>

      {/* ===== TOP GRID ===== */}
      <div className="slide5-grid">

        {/* LEFT TEXT */}
        <div className="slide5-left">
          <h2
            className="slide5-subtitle"
            style={{ fontFamily: "PoppinsSemiBold" }}
          >
            Как ИИ представляет знания?
          </h2>

          <p
            className="slide5-text"
            style={{ fontFamily: "PoppinsRegular" }}
          >
            ИИ использует разные модели представления знания:
            логические правила, базы знаний, онтологии и нейросетевые веса.
            Символьный ИИ опирается на чёткие структуры логики,
            а нейросети формируют знания статистически, запоминая
            сложные паттерны данных.
          </p>

          <h2
            className="slide5-subtitle"
            style={{ fontFamily: "PoppinsSemiBold" }}
          >
            Проблема «чёрного ящика»
          </h2>

          <p
            className="slide5-text"
            style={{ fontFamily: "PoppinsRegular" }}
          >
            Многие современные модели принимают решения,
            внутреннюю логику которых невозможно объяснить
            человеческим языком. Это поднимает философский вопрос:
            можно ли считать научным знание,
            которое невозможно полностью обосновать и интерпретировать?
          </p>
        </div>

        {/* RIGHT PHOTO */}
        <div className="slide5-right">
          <div className="slide5-photo">
            <img src={photo} alt="AI Brain" />
          </div>
        </div>
      </div>

      {/* ===== BOTTOM BLOCK ===== */}
      <div className="slide5-bottom">
        <h2
          className="slide5-subtitle"
          style={{ fontFamily: "PoppinsSemiBold" }}
        >
          Объективность или предвзятость?
        </h2>

        <p
          className="slide5-text"
          style={{ fontFamily: "PoppinsRegular" }}
        >
          ИИ обучается на данных людей, а значит наследует человеческие
          ошибки и предубеждения. Алгоритмы могут усиливать скрытые
          искажения: дискриминацию, социальные стереотипы, неверные выводы.
          Поэтому философия науки подчёркивает необходимость
          человеческой валидации результатов ИИ, чтобы сохранить
          объективность машинного знания.
        </p>

        <div
          className="slide5-conclusion"
          style={{ fontFamily: "PoppinsExtraBold" }}
        >
          Знание ИИ — это мощный инструмент познания,
          но без прозрачности и проверки оно
          не может полностью заменить научное мышление человека.
        </div>
      </div>

    </div>
  );
};

export default Slide5;
