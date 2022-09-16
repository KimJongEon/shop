import { Row, Col, Container } from 'react-bootstrap';

function Card(props) {
  // let [shoes] = useState(data);
  return (
    <>
      <div>
        <Container>
          <Row>
            {
              props.shoes.map(function (shoes, i) {
                console.log(shoes);
                return (
                  <Col key={i} >
                    <img alt={"신발 사진" + i}  src={process.env.PUBLIC_URL + './img/shoes' + i + '.jpg'} width="80%"></img>
                    <h4>{props.shoes[i].title}</h4>
                    <p>{props.shoes[i].content}</p>
                  </Col>
                ); //return End
              })
            }
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Card;