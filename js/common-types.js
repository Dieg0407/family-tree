/**
* @typedef {object} DrawableProps
* @property {number} id
* @property {number} x
* @property {number} y
* @property {number} width
* @property {number} height
* @property {string} color
**/

/**
* @typedef {object} DrawableActions
* @property {function(CanvasRenderingContext2D): void} stroke
*/

/**
* @typedef {DrawableProps & DrawableActions} Drawable
*/
