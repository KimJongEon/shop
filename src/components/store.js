import { configureStore, createSlice } from '@reduxjs/toolkit';


// Redux store에 state 보관하는 법 
// step 1. createSlice( ) 로 state 만들고
// step 2. configureStore( ) 안에 등록하면 된다.

let user = createSlice({
    name: 'user',
    initialState: 'kim'
})

let cartData = createSlice({
    name: 'cartData',
    initialState:
        [
            { id: 0, name: 'White and Black', count: 2 },
            { id: 2, name: 'Grey Yordan', count: 1 }
        ],

    // state 수정 함수 만드는 곳 
    reducers: {
        changeCount(state, action) { // action이 파라미터
            //파라미터로 받아올 때 꼭 파라미터 뒤에.payload를 붙여주어야 함. 리덕스 규칙임
            return action.payload
        },
        changeCartData(state, action){
            
            // console.log(action.payload)
            state.push(action.payload)
            // return state.push(action.payload)
        }
    }
})


export default configureStore({
    reducer: {
        user: user.reducer,
        cartData: cartData.reducer

    }
}) 

export let {changeCount, changeCartData} = cartData.actions