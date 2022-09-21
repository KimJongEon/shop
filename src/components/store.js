import { configureStore, createSlice } from '@reduxjs/toolkit';


// Redux store에 state 보관하는 법 
// step 1. createSlice( ) 로 state 만들고
// step 2. configureStore( ) 안에 등록하면 된다.

let user = createSlice({
    name : 'user',
    initialState : 'kim'
})


export default configureStore({
    reducer: {
        user : user.reducer
    }
}) 