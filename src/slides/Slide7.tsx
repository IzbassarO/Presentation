import React from "react";
import "../styles/slide7.css";
import "../styles/hero-slide.css";

import topImage from "/big.png";
import bottomImage from "/small.png";

const Slide7: React.FC = () => {
  return (
    <section className="slide7-root ai-hero-bg">
      <div className="slide7-columns">
        {/* ЛЕВАЯ ВЕРТИКАЛЬ: Фото + список */}
        <div className="slide7-col slide7-left">
          <div className="slide7-image-wrapper">
            <img
              src={topImage}
              alt="Онлайн-мошенничество"
              className="slide7-image"
            />
          </div>

          <div className="slide7-list-block">
            <h2
              className="slide7-list-title"
              style={{ fontFamily: "PoppinsBold" }}
            >
              Статистика видов мошенничества
            </h2>
            <ul
              className="slide7-list"
              style={{ fontFamily: "PoppinsSemiBold" }}
            >
              <li>телефонное мошенничество — 25,5 %</li>
              <li>ложные инвестиции — 18,89 %</li>
              <li>мошенничество через соцсети и мессенджеры — 17,61 %</li>
              <li>кредитное мошенничество — 9,57 %</li>
              <li>фальшивые онлайн-магазины — 7,53 %</li>
              <li>«дропперы» — 6,87 %</li>
              <li>фейковые сайты — 5,62 %</li>
            </ul>
            <p
              className="slide7-list-source"
              style={{ fontFamily: "Poppins" }}
            >(Kemelova, 2025)</p>
          </div>
        </div>

        {/* ПРАВАЯ ВЕРТИКАЛЬ: Title + Subtitle + текст + фото */}
        <div className="slide7-col slide7-right">
          <div className="slide7-text-block">
            <h1
              className="slide7-title"
              style={{ fontFamily: "PoppinsBold" }}
            >
              Этика ИИ – моральные дилеммы искусственного разума
            </h1>
            <h2
              className="slide7-subtitle"
              style={{ fontFamily: "PoppinsSemiBold" }}
            >
              Связанная дилемма
            </h2>
            <p
              className="slide7-description"
              style={{ fontFamily: "PoppinsRegular" }}
            >
              Этика ИИ затрагивает и создание систем, и их применение. Встают
              вопросы ответственности за решения алгоритмов, недопустимости
              дискриминации и контроля над автономными системами, особенно
              там, где на кону человеческая жизнь и права человека.
            </p>
          </div>

          <div className="slide7-image-wrapper slide7-image-bottom">
            <img
              src={bottomImage}
              alt="Кибербезопасность и ИИ"
              className="slide7-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide7;
