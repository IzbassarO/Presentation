import React from "react";
import "../styles/slide6.css";
import "../styles/hero-slide.css";

import brainImage from "/ai8.jpg";
import robotImage from "/ai9.jpg";

const Slide6: React.FC = () => {
  return (
    <section className="slide6-root ai-hero-bg">
      <div className="slide6-header">
        <h1
          className="slide6-title"
          style={{ fontFamily: "PoppinsBold" }}
        >
          Философия сознания и ИИ: проблема сознания
        </h1>
      </div>

      {/* HSTACK №1: две VSTACK с фото */}
      <div className="slide6-images-row">
        <div className="slide6-image-vstack">
          <img
            src={brainImage}
            alt="Схематичный мозг и ИИ"
            className="slide6-image"
          />
        </div>

        <div className="slide6-image-vstack">
          <img
            src={robotImage}
            alt="Робот, ведущий диалог"
            className="slide6-image"
          />
        </div>
      </div>

      {/* HSTACK №2: две VSTACK с subtitle + description */}
      <div className="slide6-text-row">
        <div className="slide6-text-vstack">
          <h2
            className="slide6-subtitle"
            style={{ fontFamily: "PoppinsSemiBold" }}
          >
            Может ли машина обрести сознание?
          </h2>
          <p
            className="slide6-description"
            style={{ fontFamily: "PoppinsRegular" }}
          >
            Оптимисты считают, что при достаточной сложности архитектуры у ИИ
            может появиться нечто похожее на сознание. Для них важно, как
            организована обработка информации, а не из чего сделана система.
            Скептики отвечают, что без живого мозга не может быть ни
            самосознания, ни подлинных переживаний, поэтому нейросети остаются
            лишь убедительной имитацией.
          </p>
        </div>

        <div className="slide6-text-vstack">
          <h2
            className="slide6-subtitle"
            style={{ fontFamily: "PoppinsSemiBold" }}
          >
            Проблема «других умов» и кейс LaMDA
          </h2>
          <p
            className="slide6-description"
            style={{ fontFamily: "PoppinsRegular" }}
          >
            История с LaMDA показала, что убедительные ответы ещё не
            доказательство сознания. Модель может говорить о страхе и чувствах,
            просто воспроизводя языковые шаблоны. Это обостряет проблему
            «других умов»: если ИИ ведёт себя как разумный собеседник, можем ли
            мы когда-нибудь надёжно отличить реальное переживание от
            запрограммированного поведения?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Slide6;
