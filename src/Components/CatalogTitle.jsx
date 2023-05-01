import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import catalogName from "../Images/catalogName.png";


const CatalogTitle = () => {
  return (
    <Container>
      <Row>
        <Col className="leftCatalogTitle d-none d-md-block" md={6} style={{height:"240px"}}>
          <img src={catalogName} alt="title" height="100%"/>
        </Col>
        <Col className="rightCatalogTitle" xs={12} md={6}>
          <h1>Каталог</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default CatalogTitle;