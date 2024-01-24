import { Canvas } from "./canvas.js";
import { createCard, DEFAULT_WIDTH, DEFAULT_HEIGHT } from "./card.js";

const canvas = new Canvas({ width: 1500, height: 1000 });
canvas.setupEvents();

const card1 = createCard(
  { id: 1, x: 10, y: 10, width: DEFAULT_WIDTH, height: DEFAULT_HEIGHT, color: "pink" },
  { firstName: "Everardo", lastName: "Guerrero" }
);
canvas.addDrawable(card1);

canvas.render();
canvas.render();
