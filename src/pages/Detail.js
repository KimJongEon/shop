import { useParams } from 'react-router-dom'; // hook 사용


function Detail(props) {
    let {id} = useParams(); // url에입력한번호 : /detail/숫자

    let findProduct = props.shoes.find((x)=>{ // x는 array자료에 있던 자료를 뜻함
        // eslint-disable-next-line
        return x.id == id // 조건식 : array자료.id == url에입력한번호 일때 return
    });
    // console.log(findProduct);
    // console.log(findProduct.id);

    if(findProduct !== undefined) {
        return (
            <>
                <div className="container">
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
            </>
        ); // return End
    }
    else{
        return(
            <>
                <div>존재하지 않는 상품입니다.</div>
            </>
        );
        
    }
    
} // Detail() End

export default Detail;