import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import showcaseName from "../Images/catalogName2.png";
import Container from "react-bootstrap/Container";

const ShowcaseTitle = () => {
  return (
    <Container>
      <Row>
        <Col className="leftShowCaseTitle" xs={12} md={6}>
          <h1>Витрина</h1>
        </Col>
        <Col className="rightShowCaseTitle d-none d-md-block" md={6} style={{height:"240px"}}>
          <img src={showcaseName} alt="title" height="100%" style={{float:"right"}}/>
        </Col>
      </Row>
    </Container>
  );
};

export default ShowcaseTitle;