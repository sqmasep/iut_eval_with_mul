import { animate } from "motion";

const cards = document.querySelectorAll(".card") as NodeListOf<HTMLDivElement>;

const flippedQuestionsIds = [] as string[];

[...cards].forEach(card => {
  card.addEventListener("click", e => {
    const question = document.querySelectorAll(".question");
  });
});
