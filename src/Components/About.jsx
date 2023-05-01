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
          <h1>Услуги</h1>
          <br></br>
          <br></br>
          <p>Цветы и цветочные композиции<br></br>
          Авторские букеты<br></br>
          Цветочная подписка<br></br>
          Свадебная флористика<br></br>
          Оформление помещений праздничное<br></br>
          Уличное озеленение<br></br>
          Интерьерные растения<br></br>
          Подарки и подарочная упаковка<br></br>
          Игрушки<br></br>
          Шары воздушные<br></br>
          Свечи и аромадиффузеры</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;