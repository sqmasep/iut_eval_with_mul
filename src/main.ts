import {
  animateMouse,
  animateMouseDown,
  animateMouseHover,
  animateMouseUp,
} from "./utils/animations/animateMouse";
import "./style.css";
import { animate, inView, scroll, spring, stagger, timeline } from "motion";
import { revealText } from "./utils/animations/revealText";

const buttons = document.querySelectorAll("button, a, .cursor-pointer");

document.addEventListener("mousemove", e => {
  const x = e.clientX;
  const y = e.clientY;

  animateMouse({ x, y }, { easing: spring({ damping: 50 }) });
});

[...buttons].forEach(button => {
  button.addEventListener("mouseover", animateMouseHover);
  button.addEventListener("mouseleave", animateMouseUp);
});

document.addEventListener("mousedown", animateMouseDown);
document.addEventListener("mouseup", animateMouseUp);

scroll(
  animate(
    ".stars",
    { scale: [null, 1.5], rotateZ: [0, 35] },
    { easing: spring({ damping: 50, mass: 12 }) },
  ),
);
// animate(".stars", { scale: [0, 1], rotateZ: [-35, 0] }, { duration: 2 });
animate(
  ".stars",
  { scale: [null, 1], rotateZ: [0, 360] },
  { duration: 30, repeat: Infinity, easing: "linear" },
);

revealText();
animate(
  ".pesquette",
  { scale: [1, 1.1] },
  { duration: 4, repeat: Infinity, direction: "alternate" },
);
scroll(
  animate(".pesquette", {
    y: [0, 800],
    scale: [1, 0.5, 0.3, 0.1],
    rotateZ: [0, 35, 80, 100, 10, 0, -40],
    x: -500,
  }),
);

scroll(
  animate(".iss", {
    scale: [0.1, 0.7],
    x: [800, 70],
    y: [80, 900],
    rotateZ: [0, 150],
  }),
);

// scroll(
//   animate(".neptune", {
//     rotateZ: [0, -171],
//     scale: [0.5, 0.8],
//   }),
//   {
//     target: document.querySelector(".travel") as HTMLDivElement,
//   },
// );

inView(".travel", ({ target }) => {
  animate(
    target.querySelector(".neptune")!,
    {
      scale: [1.0, 0.3],
      x: [0, 580],
      rotateZ: [0, -171],
    },
    { duration: 4 },
  );

  animate(
    target.querySelector(".voyager")!,
    {
      x: [800, -780],
      y: [0, 580],
      rotateZ: [0, 120],
    },
    { duration: 4 },
  );
});

document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".video-intro") as HTMLVideoElement;
  video.addEventListener("play", e => {
    document.body.style.overflow = "hidden";
  });

  video?.addEventListener("ended", e => {
    document.body.style.overflow = "";
    animate(".video-intro", { opacity: [1, 0] }, { duration: 1 }).finished.then(
      video.remove,
    );
  });
});

scroll(
  animate(".fx-film", {
    y: [-200, 200],
    opacity: [0, 0.5],
    scale: [1, 1.4],
    rotateZ: [0, -10, 0],
  }),
  {
    target: document.querySelector(".fx-film")?.parentElement!,
    offset: ["start end", "end"],
  },
);

inView(".urss, .usa", () => {
  animate(
    ".urss, .usa",
    {
      skewY: [0, 20, 0],
      transformOrigin: ["bottom"],
    },
    { duration: 2, repeat: Infinity, easing: "linear" },
  );
});

inView(".moon", () => {
  animate(
    ".moon",
    {
      rotateZ: [0, 360],
    },
    { duration: 30, repeat: Infinity, easing: "linear" },
  );
});

inView(".yaytso", ({ target }) => {
  timeline([
    [
      target.querySelector("h2")!,
      {
        clipPath: [
          "polygon(0 0, 0 0, 0 100%, 0 100%)",
          "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ],
      },
      { duration: 2 },
    ],
    [
      target.querySelector("p")!,
      {
        clipPath: [
          // from top to bottom
          "polygon(0 0, 100% 0, 100% 0, 0 0)",
          "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ],
        opacity: [0, 1],
      },
      { duration: 1 },
    ],
  ]);
});
