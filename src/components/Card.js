import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Card(props) {
  let [loadingAlert, setLoadingAlert] = useState(false);

  useEffect(() => {
    // console.log('test')
    // setLoadingAlert(!loadingAlert)
    // return (() => {
      
    // })

  });

  return (
    <>
      {/* 버튼을 눌렀을 때 result.data를 setShoes를 이용해 추가 */}
      <button onClick={() => {
        if (props.buttonNum === 0) {
          setLoadingAlert(!loadingAlert)
          axios.get('https://codingapple1.github.io/shop/data2.json').then((result) => {
            let shoesCopy = [...props.shoes, ...result.data];
            props.setShoes(shoesCopy)
            props.setButtonNum(props.buttonNum + 1)
            setLoadingAlert(false)
          })
            .catch(() => {
              setLoadingAlert(false)
              alert('데이터를 가져오는데 실패했습니다.')
              console.log('데이터 가져오기 실패')
            })
        } else if (props.buttonNum === 1) {
          setLoadingAlert(!loadingAlert)
          axios.get('https://codingapple1.github.io/shop/data3.json').then((result) => {
            let shoesCopy = [...props.shoes, ...result.data];
            props.setShoes(shoesCopy)
            props.setButtonNum(props.buttonNum + 1)
            setLoadingAlert(false)

          })
            .catch(() => {
              setLoadingAlert(false)
              alert('데이터를 가져오는데 실패했습니다.')
              console.log('데이터 가져오기 실패')
            })
        } else if (props.buttonNum >= 2) {
          alert('더 이상 상품이 없습니다.')
        }
      }}>상품 더 보기</button>

      {
        loadingAlert === true ?

          <div className="alert alert-warning">
            상품 로딩 중 입니다.
          </div>

          : null
      }


      <div>
        <Container>
          <Row>
            {
              props.shoes.map(function (shoes, i) {
                // console.log(shoes);
                return (

                  <Col key={i}>
                    <Link to={"/detail/" + i}>
                      <img alt={"신발 사진" + i} src={process.env.PUBLIC_URL + '/img/shoes' + i + '.jpg'} width="80%"></img>
                    </Link>
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