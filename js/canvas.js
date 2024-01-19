import "./common-types.js";

export const CANVAS_ID = "family-tree-canvas";

/**
* @typedef {Object} CanvasProps
* @property {number} width
* @property {number} height
* */

/**
* @typedef {Object} Canvas
* @property {function():void} clear
* @property {function(Drawable):void} addDrawable
*/

/**
* @param {CanvasProps} props 
* @returns {Canvas} canvas
* */
export function Canvas(props) {
  const canvas = document.getElementById(CANVAS_ID);
  canvas.width = props.width;
  canvas.height = props.height;

  /** @type {CanvasRenderingContext2D} */
  const ctx = canvas.getContext("2d");

  const drawableElements = [];

  return {
    clear: () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    },
    addDrawable: (drawable) => {
      drawableElements.push(drawable);
    },
    render: () => {
      drawableElements.forEach((drawable) => {
        drawable.draw(ctx);
        ctx.stroke();
      });
    },
  }
}
