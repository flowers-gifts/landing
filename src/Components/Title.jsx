import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import titleImage from "../Images/titleImage.png"

const Title = () => {
  return (
    <Container>
      <Row>
        <Col className="rightAbout d-none d-xl-block" xs={12} md={7} style={{paddingLeft:"160px", paddingBottom:"20px", paddingTop:"207px", paddingRight:"120px"}}>
          <h1>ЦВЕТЫ&ПОДАРКИ</h1>
          <br></br>
          <br></br>
          <br></br>
          <p>Всем известно, что почти любой цветок имеет свою сезонность, поэтому наши букеты все неповторимы. Они собираются индивидуально под Вас, с обсуждением в живом времени : цветка, размера, формы, цветовой гаммы.</p>
        </Col>
        <Col className="rightAbout d-xl-none" xs={12} md={7} style={{ paddingBottom:"20px"}}>
          <h1>ЦВЕТЫ&ПОДАРКИ</h1>
          <br></br>
          <br></br>
          <br></br>
          <p>Всем известно, что почти любой цветок имеет свою сезонность, поэтому наши букеты все неповторимы. Они собираются индивидуально под Вас, с обсуждением в живом времени : цветка, размера, формы, цветовой гаммы.</p>
        </Col>
        <Col className="rightTitle d-none d-lg-block" md={5}>
          <img src={titleImage} alt="title" height="500px"/>
        </Col>
      </Row>
    </Container>
  );
};

export default Title;