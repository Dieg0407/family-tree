import { Canvas } from "./canvas.js";

const canvas = new Canvas({ width: 1500, height: 1000 });
canvas.setupEvents();

canvas.addDrawable({ id: 1, x: 10, y: 10, width: 100, height: 100, color: "pink" })
canvas.addDrawable({ id: 2, x: 200, y: 200, width: 100, height: 100, color: "blue" })
canvas.render();
