/* eslint-disable */ // 터미널에 경고 메세지 안뜨게 해줌
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeCount } from '../components/store.js';

function Cart() {
    // return state 사용 시 store에 있던 모든 state가 그 자리에 남는다.
    // return state.xxx : 해당 name의 xxx state만 출력 가능
    let a = useSelector((state) => { return state })
    // console.log(a)

    let cartData = useSelector((state) => { return state.cartData })
    // console.log(cartData)

    // Redux : store의 state 변경하기 위한 함수 - useDispatch
    let dispatch = useDispatch()

    return (
        <>
            <Table >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartData.map((a, i) => {
                            return (
                                <tr key={i} >
                                    <td>{cartData[i].id}</td>
                                    <td>{cartData[i].name}</td>
                                    <td>{cartData[i].count}</td>
                                    <td><button className="btn btn-primary" onClick={()=>{
                                        let cartDataId = cartData[i].id
                                        let cartDataCount = cartData[i].count

                                        let cartDataUpdate = cartData.map((x)=>
                                            // console.log({...x})
                                            x.id === cartDataId
                                            ? {...x, count : cartDataCount += 1}
                                            : x
                                        )
                                        dispatch(changeCount(cartDataUpdate))
                                        
                                    } }>
                                        
                                        +</button></td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        </>
    ) // return End
} //Cart() End

export default Cart;