import updateObject from "../common/updateObject";
let initState = {
  count: 0
};
function costListReducer(state = initState, action) {
  switch (action.type) {
    case "ADD":
      return updateObject(state, {
        count: ++action.count
      });
    default:
      return initState;
  }
}
export default costListReducer;
