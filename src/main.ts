import {
  animateMouse,
  animateMouseDown,
  animateMouseHover,
  animateMouseUp,
} from "./utils/animations/animateMouse";
import "./style.css";
import { animate, scroll, spring } from "motion";
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
