import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import data from './components/Data.js';
import Product from './components/Product.js';
import Header from './components/Header.js';

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      {/* 상단 헤더, 메인 사진 */}
      <Header></Header>

      {/* 상품 소개 및 사진 */}
      <div>
        <Container>
          <Row>
            <Col>
              <img alt="신발 사진1" src={process.env.PUBLIC_URL + './img/shoes1.jpg'} width="80%"></img>
              <h4>{shoes[0].title}</h4>
              <p>{shoes[0].content}</p>
            </Col>
            
            <Col>
              <img alt="신발 사진2" src={process.env.PUBLIC_URL + './img/shoes2.jpg'} width="80%"></img>
              <h4>{shoes[1].title}</h4>
              <p>{shoes[1].content}</p>
            </Col>

            <Col>
              <img alt="신발 사진3" src={process.env.PUBLIC_URL + './img/shoes3.jpg'} width="80%"></img>
              <h4>{shoes[2].title}</h4>
              <p>{shoes[2].content}</p>
            </Col>
            
          </Row>
          {/* 2번 째 Row */}
          <Product shoes={shoes} ></Product>
          
          
        </Container>
      </div>

    </div>
  );
}


// export default App;
export default App;

