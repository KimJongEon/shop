import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Cart() {
    // return state 사용 시 store에 있던 모든 state가 그 자리에 남는다.
    // return state.xxx : 해당 name의 xxx state만 출력 가능
    let a = useSelector((state)=>{ return state})
    console.log(a)

    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>안녕</td>
                    <td>안녕</td>
                    <td>안녕</td>
                </tr>
            </tbody>
        </Table>
    )

}

export default Cart;