import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import servicesImage from "../Images/servicesImage.png";
import {Button} from "react-bootstrap";

const Services = () => {
  return (
    <Container>
      <Row>
        <Col className="rightAbout d-none d-xl-block" xs={12} md={6} style={{paddingLeft:"160px", paddingBottom:"20px", paddingTop:"120px"}}>
        <h1>Заказ</h1>
          <br></br>
          <br></br>
          <p>Букет S от 1000 руб. D15-30 см.<br></br>
          Букет М от 3000 руб. D30-45 см.<br></br>
          Букет L от 5000 руб. D45-55 см.<br></br>
          Букет ХL от 8000 руб. D55 см и больше.<br></br>
          Композиции в шляпной коробке, ящике, корзине от 3000 рублей.</p>
          <br></br>
          Доставка по жк Спутник - бесплатно.
          <br></br>По г. Москва ЗАО - 500 руб.
          <br></br>В другие районы гор. Москвы по тарифу курьерской службы
          <br></br>
          <br></br>
          <Button className="aboutButton" variant="outline-primary">Заказать</Button>
        </Col>
        <Col className="rightAbout d-xl-none" xs={12} md={6} style={{ paddingBottom:"20px"}}>
          <h1>Заказ</h1>
          <br></br>
          <br></br>
          <br></br>
          <p>Букет S от 1000 руб. D15-30 см.<br></br>
          Букет М от 3000 руб. D30-45 см.<br></br>
          Букет L от 5000 руб. D45-55 см.<br></br>
          Букет ХL от 8000 руб. D55 см и больше.<br></br>
          Композиции в шляпной коробке, ящике, корзине от 3000 рублей.</p>
          <br></br>
          Доставка по жк Спутник - бесплатно.
          <br></br>По г. Москва ЗАО - 500 руб.
          <br></br>В другие районы гор. Москвы по тарифу курьерской службы
          <br></br>
          <br></br>
          <Button className="aboutButton" variant="outline-primary">Заказать</Button>
        </Col>
        <Col className="leftAbout d-none d-xl-block" md={6} style={{paddingTop:"100px", paddingLeft:"150px", paddingBottom:"100px"}}>
          <img src={servicesImage} alt="title" height="500px"/>
        </Col>
        <Col className="leftAbout d-none d-lg-block d-xl-none" md={6} style={{paddingTop:"100px", paddingLeft:"50px", paddingBottom:"100px"}}>
          <img src={servicesImage} alt="title" height="500px"/>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;