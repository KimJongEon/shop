import {Row, Col } from 'react-bootstrap';

function Product(props){
    // let [shoes] = useState(data);
    return(
      <>
        <Row>
          <Col>
            <h4>Product.js에서 export한 js 파일</h4>
            <p>dasd</p>
            <p>{props.shoes[0].title}</p>
          </Col>
        </Row>
      </>
    )
  }

export default Product;