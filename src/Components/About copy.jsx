import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import aboutImage from "../Images/aboutImage.png";
import {Button} from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <Row>
        <Col className="leftAbout d-none d-xl-block" md={6} style={{paddingTop:"100px", paddingLeft:"150px", paddingBottom:"100px"}}>
          <img src={aboutImage} alt="title" height="500px"/>
        </Col>
        <Col className="leftAbout d-none d-lg-block d-xl-none" md={6} style={{paddingTop:"100px", paddingLeft:"50px", paddingBottom:"100px"}}>
          <img src={aboutImage} alt="title" height="500px"/>
        </Col>
        <Col className="rightAbout" xs={12} md={6} style={{paddingRight:"100px", paddingBottom:"20px"}}>
          <h1>Заказ</h1>
          <br></br>
          <br></br>
          <br></br>
          <p>Букет S от 700 руб.<br></br>
          Букет М от 3000 руб.<br></br>
          Букет L от 5000 руб.<br></br>
          Букет ХL от 8000 руб.<br></br>
          Композиции в шляпной коробке, ящике, корзине от 3000 рублей.</p>
          <br></br>
          Доставка по жк Спутник - бесплатно.
          <br></br>По г. Москва ЗАО - 500 руб.
          <br></br>В другие районы гор. Москвы по тарифу курьерской службы
          <br></br>
          <br></br>
          <Button className="aboutButton" variant="outline-primary">Заказать</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default About;