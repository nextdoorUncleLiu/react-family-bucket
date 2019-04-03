let initState = {
  count: 0
};
function costListReducer(state = initState, action) {
  switch (action.type) {
    case "ADD":
      return Object.assign({}, state, {
        count: ++action.count
      });
    default:
      return initState;
  }
}
export default costListReducer;
