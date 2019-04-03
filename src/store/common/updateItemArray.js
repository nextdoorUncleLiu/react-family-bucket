/**
import updateItemArray from './updateItemArray';
 *
 * @param {*} array
 * @param {*} itemId
 * @param {*} updateItemCallback
 */
const updateItemArray = (array, itemId, updateItemCallback) =>
  array.map(item => (item.id === itemId ? item : updateItemCallback(item)));
export default updateItemArray;
