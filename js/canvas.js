import "./common-types.js";

export const CANVAS_ID = "family-tree-canvas";

/**
* @typedef {Object} CanvasProps
* @property {number} width
* @property {number} height
* */


/**
* @param {Drawable} shape 
* @param {{ mouseX: number, mouseY: number }} mousePosition 
 */
const isMouseInShape = ({ x, y, width, height }, { mouseX, mouseY }) => {
  return mouseX >= x && mouseX <= x + width && mouseY >= y && mouseY <= y + height;
}

export class Canvas {
  /**
   * @param {CanvasProps} props 
   * */
  constructor({ width, height }) {
    this.canvas = document.getElementById(CANVAS_ID);
    this.canvas.width = width;
    this.canvas.height = height;

    /** @type {CanvasRenderingContext2D} */
    this.ctx = this.canvas.getContext("2d");

    /** @type {Drawable[]} */
    this.drawableElements = [];
    this.isDragging = false;
    /** @type {number} */
    this.currentDraggable = null;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /**
   * @param {Drawable} drawable 
   * */
  addDrawable(drawable) {
    this.drawableElements.push(drawable);
  }

  /** @param {MouseEvent} event */
  mouseDown(event) {
    event.preventDefault();

    this.startX = event.clientX - this.canvas.offsetLeft;
    this.startY = event.clientY - this.canvas.offsetTop;
    for (let drawable of this.drawableElements) {
      if (isMouseInShape(drawable, { mouseX: this.startX, mouseY: this.startY })) {
        this.isDragging = true;
        this.currentDraggable = drawable.id;
        break;
      }
    }
  }

  /** @param {MouseEvent} event */
  mouseUp(event) {
    event.preventDefault();
    if (!this.isDragging) {
      return;
    }

    this.isDragging = false;
  }

  /** @param {MouseEvent} event */
  mouseMove(event) {
    event.preventDefault();
    if (!this.isDragging) {
      return;
    }

    let mouseX = event.clientX - this.canvas.offsetLeft;
    let mouseY = event.clientY - this.canvas.offsetTop;

    let dx = mouseX - this.startX;
    let dy = mouseY - this.startY;

    const element = this.drawableElements.find(e => e.id === this.currentDraggable);
    element.x += dx;
    element.y += dy;

    this.render();

    this.startX = mouseX;
    this.startY = mouseY;
  }

  setupEvents() {
    this.canvas.onmousedown = this.mouseDown.bind(this);
    this.canvas.onmouseup = this.mouseUp.bind(this);
    this.canvas.onmouseout = this.mouseUp.bind(this);
    this.canvas.onmousemove = this.mouseMove.bind(this);
  }

  render() {
    this.clear();
    for (let drawable of this.drawableElements) {
      drawable.stroke(this.ctx);
    }
  }


}
