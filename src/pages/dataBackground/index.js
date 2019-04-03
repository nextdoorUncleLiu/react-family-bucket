import React from "react";
import { Row, Col } from "antd";
import "./index.css";
function DataBackground() {
  return (
    <div className="gutter-example">
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <div className="gutter-box">col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="gutter-box">col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="gutter-box">col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="gutter-box">col-6</div>
        </Col>
      </Row>
    </div>
  );
}
export default DataBackground;
