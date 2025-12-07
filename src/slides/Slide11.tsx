import React from "react";
import "../styles/slide11.css";
import "../styles/hero-slide.css";

const references = [
  {
    text:
      "Gluzdov, D. V. (2021). Filosofiya iskusstvennogo intellekta i filosofiya nauki. Journal of Philosophical Research, 7(1), 32–42.",
    link:
      "https://naukaru.ru/ru/nauka/article/42240/view"
  },
  {
    text:
      "Wikipedia (2024). Filosofiya iskusstvennogo intellekta [Russian].",
    link:
      "https://ru.wikipedia.org/wiki/Философия_искусственного_интеллекта"
  },
  {
    text:
      "Zhigmytov, C. (2021, June 8). Filosofiya iskusstvennogo intellekta: chto eto takoe i zachem ona nuzhna. Skillbox Media.",
    link:
      "https://skillbox.ru/media/code/filosofiya-iskusstvennogo-intellekta-chto-eto-takoe-i-zachem-ona-nuzhna/"
  },
  {
    text:
      "Omirgazy, D. (2025, October 2). Tokayev opens Digital Bridge 2025, calls for responsible AI and global cooperation. The Astana Times.",
    link:
      "https://astanatimes.com/2025/10/tokayev-opens-digital-bridge-2025-calls-for-responsible-ai-and-global-cooperation/"
  },
  {
    text:
      "Tengrinews (2025, October 2). President Tokayev announces the launch of Alem.ai. Tengrinews.kz.",
    link:
      "https://en.tengrinews.kz/kazakhstan_news/president-tokayev-announces-the-launch-of-alemai-269665/"
  },
  {
    text:
      "Birbayeva, A. (2025, October 21). Kazakhstan expands artificial intelligence network. The Astana Times.",
    link:
      "https://astanatimes.com/2025/10/kazakhstan-expands-artificial-intelligence-network/"
  },
  {
    text:
      "Bostrom, N. (2014). Superintelligence: Paths, dangers, strategies [Wikipedia overview, Russian].",
    link:
      "https://ru.wikipedia.org/wiki/Искусственный_интеллект._Этапы,_Угрозы,_Стратегии"
  },
  {
    text:
      "Bogdanova, A. (2023, August 13). Paradoks tryokh zakonov Azimova i problemy etiki II. VC.ru.",
    link:
      "https://vc.ru/id4616024/2155265-paradoks-trekh-zakonov-azimova-i-problemy-etiki-ii"
  },
  {
    text:
      "Pokidaev, D. (2025, September 17). Kipling and code: Tokayev advocates global AI ethics principles. Times of Central Asia.",
    link:
      "https://timesca.com/kipling-and-code-tokayev-advocates-global-ai-ethics-principles/"
  }
];

const Slide11: React.FC = () => {
  return (
    <section className="slide11-root ai-hero-bg">
      <div className="slide11-vstack">
        <h1
          className="slide11-title"
          style={{ fontFamily: "PoppinsBold" }}
        >
          Reference List
        </h1>

        <ol className="slide11-list">
          {references.map((ref, index) => (
            <li
            key={index}
            className="slide11-item"
            >
              <p
              className="slide11-text"
              style={{ fontFamily: "PoppinsSemiBold" }}
              >{ref.text}</p>
              <a
                href={ref.link}
                target="_blank"
                rel="noreferrer"
                className="slide11-link"
                style={{ fontFamily: "PoppinsRegular" }}
              >
                {ref.link}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Slide11;
