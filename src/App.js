import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      {/* <Button variant="primary">Primary</Button> */}
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 메인 사진 */}
      <div className="main-bg"></div>

      {/* 상품 사진 */}
      <div>
        <Container>
          <Row>
            <Col>
              <img alt="신발 사진1" src={process.env.PUBLIC_URL + '/img/shoes1.jpg'} width="80%"></img>
            </Col>
            
            <Col>
              <img alt="신발 사진2" src={process.env.PUBLIC_URL + '/img/shoes2.jpg'} width="80%"></img>
            </Col>

            <Col>
              <img alt="신발 사진3" src={process.env.PUBLIC_URL + '/img/shoes3.jpg'} width="80%"></img>
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  );
}

export default App;
