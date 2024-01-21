import { Canvas } from "./canvas.js";
import { createCard } from "./card.js";

const canvas = new Canvas({ width: 1500, height: 1000 });
canvas.setupEvents();

const card1 = createCard({ id: 1, x: 10, y: 10, width: 300, height: 150, color: "pink" }, {});
canvas.addDrawable(card1);

canvas.render();
canvas.render();
