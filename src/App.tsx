import React, { useCallback, useEffect, useState } from "react";
import "./App.css";

import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";
import Slide5 from "./slides/Slide5";
import Slide6 from "./slides/Slide6";
import Slide7 from "./slides/Slide7";
import Slide8 from "./slides/Slide8";
import Slide9 from "./slides/Slide9";
import Slide10 from "./slides/Slide10";
import Slide11 from "./slides/Slide11";

const SLIDES = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10, Slide11];
const SCROLL_DELAY = 300;

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const total = SLIDES.length;

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= total) return;
      setCurrent(index);
    },
    [total]
  );

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    let lastScrollTime = 0;

    const onWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastScrollTime < SCROLL_DELAY) return;
      lastScrollTime = now;

      if (e.deltaY > 0) goNext();
      else if (e.deltaY < 0) goPrev();
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [goNext, goPrev]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "ArrowDown" ||
        e.key === "PageDown" ||
        e.key === " "
      ) {
        e.preventDefault();
        goNext();
      } else if (
        e.key === "ArrowUp" ||
        e.key === "PageUp"
      ) {
        e.preventDefault();
        goPrev();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev]);

  return (
    <div className="app">
      {/* контейнер слайдов */}
      <div
        className="slides"
        style={{ transform: `translateY(-${current * 100}vh)` }}
      >
        {SLIDES.map((SlideComponent, index) => (
          <section className="slide" key={index}>
            <SlideComponent />
          </section>
        ))}
      </div>

      {/* точки справа */}
      <div className="dots">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            className={"dot" + (index === current ? " dot--active" : "")}
            onClick={() => goTo(index)}
            style={{ padding: 10 }}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
