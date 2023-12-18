import { animate, inView } from "motion";

export function revealText() {
  inView(".text", ({ target }) => {
    animate(
      target,
      {
        clipPath: [
          "polygon(0 0, 0 0, 0 100%, 0 100%)",
          "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ],
        y: [20, 0],
        opacity: [0, 1],
      },
      { duration: 1, delay: 0.5 },
    );
  });
}
