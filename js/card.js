import "./common-types.js";

/**
* @typedef {Object} CardProps
* @property {number} x 
* @property {number} y 
* @property {number} width
* @property {number} height
*/

/**
* @param {CardProps} props
* @return {Drawable} card
 * */
export function Card(props) {
  const { x, y, width, height } = props;
  return {
    draw: (ctx) => {
      ctx.rect(x, y, width, height);
      ctx.fill();
    }
  };
}
