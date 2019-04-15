/**
import updateItemArray from './updateItemArray';
 *
 * @param {array} array [更新数组]
 * @param {number} itemId [更新数组项]
 * @param {function} updateItemCallback [更新回调]
 */
const updateItemArray = (array, itemId, updateItemCallback) =>
  array.map(item => (item.id === itemId ? item : updateItemCallback(item)));
export default updateItemArray;
