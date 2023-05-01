import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CatalogItem = (props) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12} style={{paddingBottom:"8px"}}>
          <img alt="example" src={props.image} width="100%" height="500px" style={{objectFit:"cover"}}/>
        </Col>
        {/* <Col xs={12} md={12}>
          <div className="description" lang="ru" style={{paddingLeft:"10px", paddingRight:"10px"}}>
            {props.title}
          </div>
        </Col> */}
      </Row>
    </Container>
  );
};

export default CatalogItem;