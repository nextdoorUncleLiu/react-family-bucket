import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import mapDispatchToProps from "../../store/costList/dispatch";
import mapStateToProps from "../../store/costList/state";
class CostList extends Component {
  render() {
    const { addBtn, count } = this.props;
    return (
      <div>
        {count}
        <button onClick={() => addBtn(count)}>aaa</button>
      </div>
    );
  }
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CostList)
);
