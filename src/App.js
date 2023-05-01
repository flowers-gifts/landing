import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from "./Components/Title";
import CatalogTitle from "./Components/CatalogTitle";
import CatalogList from "./Components/CatalogList";
import catalogData from "./catalog.json"
import ShowcaseTitle from "./Components/ShowcaseTitle";
import About from "./Components/About";
import Services from "./Components/Services";


function App() {
  document.body.style.backgroundColor = "#f7f1ec";
  return (
    <div className="App">
      <Container>
        <Row id="borderTop"></Row>
        <Row id="border">
          <Col xs={12} md={12} style={{padding: 0}}>
            <Title/>
          </Col>
        </Row>
        <Row id="border">
          <Col xs={12} md={12} style={{paddingLeft: 0, paddingRight: 0}}>
            <About/>
          </Col>
        </Row>
        <Row id="border">
          <Col xs={12} md={12} style={{paddingLeft: 0, paddingRight: 0}}>
            <Services/>
          </Col>
        </Row>
        <Row id="border">
          <Col xs={12} md={12} style={{padding: 0}}>
            <CatalogTitle/>
          </Col>
        </Row>
        <Row id="border">
          <Col xs={12} md={12} style={{paddingLeft: 0, paddingRight: 0, paddingTop: "12px"}}>
            <CatalogList catalog={catalogData}/>
          </Col>
        </Row>
        {/* <Row id="border">
          <Col xs={12} md={12} style={{padding: 0}}>
            <ShowcaseTitle/>
          </Col>
        </Row>
        <Row id="border">
          <Col xs={12} md={12} style={{paddingLeft: 0, paddingRight: 0, paddingTop: "12px"}}>
            <CatalogList catalog={catalogData}/>
          </Col>
        </Row> */}
        <Row id="borderBottom"></Row>
      </Container>
    </div>
  );
}

export default App;
