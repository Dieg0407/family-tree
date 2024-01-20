import { Canvas } from "./canvas.js";
import { createCard } from "./card.js";

const canvas = new Canvas({ width: 1500, height: 1000 });
canvas.setupEvents();

const card1 = createCard({ id: 1, x: 10, y: 10, width: 100, height: 100, color: "pink" }, {});
canvas.addDrawable(card1);

const card2 = createCard({ id: 2, x: 200, y: 200, width: 100, height: 100, color: "blue" }, {});
canvas.addDrawable(card2);

canvas.render();
