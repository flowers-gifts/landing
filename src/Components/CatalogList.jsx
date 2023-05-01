import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CatalogItem from "./CatalogItem";
const CatalogList = (props) => {
  return (
    <Container>
      <Row>
        {props.catalog.map((post) =>
          <Col xs={12} md={4} style={{paddingLeft:0, paddingRight:0, paddingBottom:"20px"}}><CatalogItem image={post.image} title={post.title}/></Col>
        )}
      </Row>
    </Container>
  );
};

export default CatalogList;