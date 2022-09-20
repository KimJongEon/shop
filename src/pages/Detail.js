import { useParams } from 'react-router-dom'; // hook 사용
import { useEffect, useState } from 'react';
// import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import detailStyle from '../css/Detail.module.css';

//컴포넌트 밖에 선언해야 함
//컴포넌트 안에 선언 시 경고, 혹은 오류 발생
// let Box = styled.div`
//         padding : 2rem;
//         color : grey
//     `;

// let YellowBtn = styled.button`
//         background : yellow;
//         color : black;
//         padding : 1rem;
//     `;

function Detail(props) {
    let [discountAlert, setDiscountAlert] = useState(true);
    let [tab, setTab] = useState(0);
    let [detailFade, setDetailFade] = useState('');

    // useEffect 쓰는 이유
    // 실행 시점 : html이 랜더링 다 된 후에 실행됨
    // 사용 되는 곳 예시 : 어려운 연산, 서버에서 데이터 가져오는 작업, 타이머 장착
    // useEffect(() => { // hook
    //     let interval = setTimeout(() => { setDiscountAlert(false) }, 2000)
    //     return () => { clearTimeout(interval) } // useEffect가 실행되기전에 실행 됨, clearTimeout : 타이머제거 함수


    // }); // [] 추가시 mount 될 때 한 번만 실행

    // useEffect 정리
    // 재렌더링마다 코드 실행하고 싶으면 : useEffect(()=>{ })
    // mount시 1회 코드 실행하고 싶으면 : useEffect(()=>{ }, [])
    // unmount시 1회 코드 실행하고 싶으면 : 
    // useEffect(()=>{
    //     return()=>{

    //     }
    // }, [])

    let [inputValue, setInputValue] = useState(0);

    useEffect(() => {
        let interval = setTimeout(() => { setDiscountAlert(false) }, 2000)

        if (isNaN(inputValue) === true) { // isNaN() 함수 : 매개변수가 숫자가 아니면 true를 반환
            console.log('숫자를 입력해주세요')
        }
        return () => { clearTimeout(interval) } // useEffect가 실행되기전에 실행 됨, clearTimeout : 타이머제거 함수

    }, [inputValue]);


    let { id } = useParams(); // url에입력한번호 : /detail/숫자

    let findProduct = props.shoes.find((x) => { // x는 array자료에 있던 자료를 뜻함
        // eslint-disable-next-line
        return x.id == id // 조건식 : array자료.id == url에입력한번호 일때 return
    });

    // Detail 페이지 로드시 투명도 0 -> 1 애니메이션 적용
    useEffect(() => {
        setDetailFade(detailStyle.end)

        return (() => {
            setDetailFade('')
        })
    }, [])

    if (findProduct !== undefined) {
        return (
            <>
                {/* Detail 페이지 로드시 투명도 0 -> 1 애니메이션 적용 */}
                <div className={`container ${detailStyle.start} ${detailFade}`}>
                    {
                        discountAlert === true ?

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

                            <input onChange={(e) => { setInputValue(e.target.value) }} />

                            <h4 className="pt-5">{findProduct.title}</h4>
                            <p>{findProduct.content}</p>
                            <p>{findProduct.price}원</p>
                            <button className="btn btn-danger">주문하기</button>
                        </div>
                    </div>
                </div>

                {/* 상품 탭 구분, 내용 추가 */}
                <Nav variant="tabs" defaultActiveKey="link0">
                    <Nav.Item>
                        <Nav.Link eventKey="link0" onClick={() => { setTab(0) }} >버튼0</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link1" onClick={() => { setTab(1) }} >버튼1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link2" onClick={() => { setTab(2) }} >버튼2</Nav.Link>
                    </Nav.Item>
                </Nav>
                <TabContent tab={tab} />



                {/* <div>
                    <Box>
                        <p>아무 의미없음</p>
                        <YellowBtn>버튼</YellowBtn>
                    </Box>
                </div> */}


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

function TabContent({ tab }) { // 축약 버전 : props. 대신 props이름을 사용, 여러개 있으면 , 찍고 추가
    let [fade, setFade] = useState('')

    useEffect(() => {
        setTimeout(() => { setFade(detailStyle.end) }, 150)

        return (() => {
            setFade('')
        })
    }, [tab])

    return (
        <div className={`${detailStyle.start} ${fade}`}>
            {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
        </div>
    )
    // if (props.tab === 0) {
    //     return <div>내용0</div>
    // }
    // if (props.tab === 1) {
    //     return <div>내용1</div>
    // }
    // if (props.tab === 2) {
    //     return <div>내용2</div>
    // }
}


export default Detail;