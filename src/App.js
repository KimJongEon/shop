import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import data from './components/Data.js';
import Card from './components/Card.js';
import Header from './components/Header.js';
import Detail from './pages/Detail.js'
import About from './pages/About.js';
import Event from './pages/Event.js';
import { Routes, Route, useNavigate } from 'react-router-dom';


function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [buttonNum, setButtonNum] = useState(0);

  return (
    <div className="App">
      
      {/* 고정 : 상단 헤더 */}
      <Header navigate={navigate} ></Header>

      {/* 라우터로 페이지 나누기 */}
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={
          <>
            {/* 메인 사진 */}
            <div>
              <img alt="메인사진" className="main-bg" src={process.env.PUBLIC_URL + '/img/bg.png'} ></img>
            </div>

            {/* 상품 소개 및 사진 */}
            <Card shoes={shoes} setShoes={setShoes} buttonNum={buttonNum} setButtonNum={setButtonNum} ></Card>
          </>
        } />

        {/* Detail 페이지 */}
        <Route path="/detail/:id" element={ <Detail shoes={shoes} />} />

        {/* nested routes 사용 */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>위치 정보</div>} />
        </Route>

        {/* nested routes 사용 */}
        <Route path="/event" element={<Event />} >
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}/>
        </Route>



        {/* 404 페이지 */}
        <Route path="*" element={<div>없는 페이지</div>

        } />
      </Routes>


    </div>
  ); // return End
} //App() End

export default App;

