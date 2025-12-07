import React from "react";
import "../styles/slide9.css";
import "../styles/hero-slide.css";

const Slide9: React.FC = () => {
  return (
    <section className="slide9-root ai-hero-bg">
      <div className="slide9-vstack">

        <h1
          className="slide9-title"
          style={{ fontFamily: "PoppinsBold" }}
        >
          Conclusion and recommendations
        </h1>

        <h2
          className="slide9-subtitle"
          style={{ fontFamily: "PoppinsSemiBold" }}
        >
          Выводы
        </h2>

        <p
          className="slide9-text"
          style={{ fontFamily: "PoppinsRegular" }}
        >
          Философия искусственного интеллекта развивается на стыке философии
          науки, техники, сознания и этики. Быстрый прогресс ИИ вынуждает
          по-новому ставить вопросы о разуме, знании и ответственности человека.
        </p>

        <p
          className="slide9-text"
          style={{ fontFamily: "PoppinsRegular" }}
        >
          Из теоретической идеи ИИ превратился в практическую реальность.
          Современное общество нуждается не только в инженерных решениях, но и в
          философских ориентирах, которые помогут определить границы
          допустимого применения технологий.
        </p>

        <p
          className="slide9-text"
          style={{ fontFamily: "PoppinsRegular" }}
        >
          Казахстанский опыт показывает, что устойчивое развитие ИИ возможно
          лишь при сочетании технологических инициатив с этическими принципами,
          вниманием к благополучию человека и глобальному диалогу.
        </p>

        <h2
          className="slide9-subtitle"
          style={{ fontFamily: "PoppinsSemiBold" }}
        >
          Recommendations
        </h2>

        <ul
        className="slide9-list"
        style={{ fontFamily: "PoppinsRegular" }}
        >
          <li>
            <span>Integrate ethics by design.</span> Встраивать в проекты ИИ
            прозрачность, оценку рисков и недискриминацию на всех этапах
            разработки.
          </li>
          <li>
            <span>Strengthen interdisciplinarity.</span> Развивать сотрудничество
            инженеров, философов, юристов и социологов.
          </li>
          <li>
            <span>Promote AI literacy.</span> Расширять образование общества о
            природе и ограничениях ИИ.
          </li>
          <li>
            <span>Support global cooperation.</span> Участвовать в международных
            инициативах по выработке этических стандартов ИИ.
          </li>
        </ul>

        <p
        className="slide9-footer"
        style={{ fontFamily: "Poppins" }}
        >
          Искусственный интеллект — не только технический, но и философский
          феномен нашего времени. От того, какие ценности мы заложим сегодня,
          зависит будущее взаимодействия человека и машин.
        </p>

      </div>
    </section>
  );
};

export default Slide9;
