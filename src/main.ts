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
