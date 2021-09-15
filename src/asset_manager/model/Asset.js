import { result } from 'underscore';
import { Model } from 'common';

/**
 * @property {String} type Asset type, eg. 'image'.
 * @property {String} src Asset URL, eg. 'https://.../image.png'.
 */
export default class Asset extends Model {
  defaults() {
    return {
      type: '',
      src: ''
    };
  }

  /**
   * Get filename of the asset (based on `src`).
   * @returns {String}
   * @example
   * // Asset: { src: 'https://.../image.png' }
   * asset.getFilename(); // -> 'image.png'
   * // Asset: { src: 'https://.../image' }
   * asset.getFilename(); // -> 'image'
   * */
  getFilename() {
    return this.get('src')
      .split('/')
      .pop()
      .split('?')
      .shift();
  }

  /**
   * Get extension of the asset (based on `src`).
   * @returns {String}
   * @example
   * // Asset: { src: 'https://.../image.png' }
   * asset.getExtension(); // -> 'png'
   * // Asset: { src: 'https://.../image' }
   * asset.getExtension(); // -> ''
   * */
  getExtension() {
    return this.getFilename()
      .split('.')
      .pop();
  }
}

Asset.prototype.idAttribute = 'src';

Asset.getDefaults = function() {
  return result(this.prototype, 'defaults');
};
