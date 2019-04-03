const mapDispatchToProps = dispatch => {
  return {
    addBtn: count => {
      dispatch({
        type: "ADD",
        count
      });
    }
  };
};
export default mapDispatchToProps;
