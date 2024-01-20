import './common-types.js';

/*
* @typedef {object} Person
* @property {string} name
* @property {string} photo
* @property {string} nickname
* @property {string} gender
 * */

/*
* @typedef {Drawable & Person} Card
* */

/**
* @param {DrawableProps} props
* @param {Person} person 
* @returns {Card}
*/
export function createCard(props, person) {
  const card = {
    ...props,
    ...person,
    stroke(ctx) {
      ctx.strokeStyle = this.color;
      ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
  };

  return card;
}
