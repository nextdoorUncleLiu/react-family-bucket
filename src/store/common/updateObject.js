/**
import updateObject from './updateObject';
 * updateObject [更新对象]
 * @param {object} oldObject [当前值]
 * @param {object} newObject [新值]
 */
const updateObject = (oldObject, newObject) =>
  Object.assign({}, oldObject, newObject);
export default updateObject;
