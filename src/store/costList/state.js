const mapDispatchToProps = state => {
  return {
    count: state.costListReducer.count
  };
};
export default mapDispatchToProps;
