import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import data from './components/Data.js';
import Card from './components/Card.js';
import Header from './components/Header.js';

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      {/* 상단 헤더, 메인 사진 */}
      <Header></Header>

      {/* 상품 소개 및 사진 */}
      <Card shoes={shoes} ></Card>
      

    </div>
  );
}


export default App;

