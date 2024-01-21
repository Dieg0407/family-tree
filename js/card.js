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
    /** @param {CanvasRenderingContext2D} ctx */
    stroke(ctx) {
      const image = new Image();
      image.src = "/img/no-profile.svg";
      image.loading = "eager";
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 2;
      ctx.strokeRect(this.x, this.y, this.width, this.height);
      ctx.drawImage(image, this.x + 10, this.y + 10, 80, this.height - 20);
    }
  };

  return card;
}
