import React from "react";
import "../styles/slide4.css";
import "../styles/hero-slide.css";

import photo1 from "/big.png";
import photo2 from "/small.png";

const Slide4: React.FC = () => {
  return (
    <div className="slide4-root ai-hero-bg">
      <div className="slide4-grid">

        {/* ===== LEFT VSTACK: Photo – Title – Photo ===== */}
        <div className="slide4-left">
          <div className="slide4-img-main">
            <img src={photo1} alt="AI visualization" />
          </div>

          <h1
            className="slide4-main-title"
            style={{ fontFamily: "PoppinsBold" }}
          >
            Онтология ИИ: может&nbsp;ли машина мыслить?
          </h1>

          <div className="slide4-img-secondary">
            <img src={photo2} alt="Thinking machine" />
          </div>
        </div>

        {/* ===== RIGHT VSTACK: Title, subtitles, texts, conclusion ===== */}
        <div className="slide4-right">
          <div className="slide4-text-block">
            <h2
              className="slide4-subtitle"
              style={{ fontFamily: "PoppinsSemiBold" }}
            >
              Основной онтологический вопрос
            </h2>
            <p
              className="slide4-text"
              style={{ fontFamily: "PoppinsRegular" }}
            >
              Может ли искусственно созданная машина обладать мышлением,
              сопоставимым с человеческим? С середины XX века – от теста
              Тьюринга – этот вопрос остаётся центральным для философии ИИ.
            </p>
          </div>

          <div className="slide4-text-block">
            <h2
              className="slide4-subtitle"
              style={{ fontFamily: "PoppinsSemiBold" }}
            >
              «Сильный» и «слабый» ИИ
            </h2>
            <ul
            className="slide4-list"
            style={{ fontFamily: "PoppinsRegular" }}
            >
              <li>
                <b>Сильный ИИ</b> – правильно запрограммированный компьютер
                сам является разумом, имеет собственные ментальные состояния.
              </li>
              <li>
                <b>Слабый ИИ</b> – всего лишь инструмент, который моделирует
                разумное поведение, но не понимает и не осознаёт происходящее.
              </li>
            </ul>
          </div>

          <div className="slide4-text-block slide4-highlight">
            <h2
            className="slide4-subtitle"
            style={{ fontFamily: "PoppinsSemiBold" }}
            >
              Скепсис: «мыслящие машины»?
              </h2>
            <p
            className="slide4-text"
            style={{ fontFamily: "PoppinsRegular" }}
            >
              Аргумент Сёрла «китайская комната», идеи Пенроуза и Ильенкова
              подчёркивают: выполнение алгоритмов ещё не гарантирует
              понимания и сознания. Машина может имитировать мышление,
              оставаясь формальным исполнителем правил.
            </p>
          </div>

          <div
          className="slide4-conclusion"
          style={{ fontFamily: "PoppinsExtraBold" }}
          >
            <span>
              Вывод: остаётся открытым, может ли интеллект стать свойством
              кремниевой машины или же настоящий разум принципиально
              принадлежит только живому человеческому субъекту.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Slide4;
