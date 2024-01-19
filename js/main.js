import { Canvas } from "./canvas.js";
import { Card } from "./card.js";

const canvas = Canvas({ width: 1500, height: 1000 })
const card1 = Card({ x: 10, y: 10, width: 100, height: 100 });
const card2 = Card({ x: 10, y: 120, width: 100, height: 100 });

canvas.addDrawable(card1);
canvas.addDrawable(card2);
canvas.render();
