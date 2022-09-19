import { useParams } from 'react-router-dom'; // hook 사용
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function Detail(props) {
    let [discountAlert, setDiscountAlert] = useState(true);

    // useEffect 쓰는 이유
    // 실행 시점 : html이 랜더링 다 된 후에 실행됨
    // 사용 되는 곳 예시 : 어려운 연산, 서버에서 데이터 가져오는 작업, 타이머 장착
    useEffect(() => { // hook
        setTimeout(() => {
            // className이 alert인 태그를 삭제 or display none
            setDiscountAlert(!discountAlert);
            console.log(discountAlert);
            console.log('2초 지남');     
        }, 2000);
        // return ()=> clearTimeout(interval);
    }, []);


    let { id } = useParams(); // url에입력한번호 : /detail/숫자

    let findProduct = props.shoes.find((x) => { // x는 array자료에 있던 자료를 뜻함
        // eslint-disable-next-line
        return x.id == id // 조건식 : array자료.id == url에입력한번호 일때 return
    });

    let Box = styled.div`
        padding : 2rem;
        color : grey
    `;

    let YellowBtn = styled.button`
        background : yellow;
        color : black;
        padding : 1rem;
    `;

    if (findProduct !== undefined) {
        return (
            <>
                <div className="container">
                    {
                        discountAlert == true ?
                        
                        <div className="alert alert-warning">
                            2초이내 구매시 할인
                        </div>
                        
                        : null
                    }
                    <div className="row">
                        <div className="col-md-6">
                            <img alt="상품 사진 없음" src={process.env.PUBLIC_URL + '/img/shoes' + findProduct.id + '.jpg'} width="100%" />
                        </div>
                        <div className="col-md-6">
                            <h4 className="pt-5">{findProduct.title}</h4>
                            <p>{findProduct.content}</p>
                            <p>{findProduct.price}원</p>
                            <button className="btn btn-danger">주문하기</button>
                        </div>
                    </div>
                </div>

                <div>
                    <Box>
                        <YellowBtn>버튼</YellowBtn>
                    </Box>
                </div>
            </>
        ); // return End
    }
    else {
        return (
            <>
                <div>존재하지 않는 상품입니다.</div>
            </>
        );

    }

} // Detail() End

export default Detail;