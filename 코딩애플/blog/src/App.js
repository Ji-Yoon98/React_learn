/* eslint-disoble : Lint끄는 기능 */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {

  let [title, change] = useState(['카레떡볶이 조아', '가나맛 떡볶이', '마라맛 떡볶이']);
  let [Like, plus] = useState(0);
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'yellow', fontSize:'20px'}}>BLOG</h4>
      </div>

      <button 
        style={{margin:'30px 10px', padding:'10px 20px', border:'2px solid black', background:'none', cursor:'pointer' }}
        onClick={()=>{ let num_copy = [...title].sort(); change(num_copy);}}
      >가나다 정렬</button>

      <button 
        style={{margin:'30px 0', padding:'10px 20px', border:'2px solid black', background:'none', cursor:'pointer' }}
        onClick={()=>{ let copy = [...title]; copy[0]= '맛변경'; change(copy); 
    }}>글수정</button>

      <div className="list" style={{borderTop:'1px solid black'}}>
        <h4>{title[0]} <span style={{cursor:'pointer'}} onClick={()=>{plus(Like+1);}}>❤️</span>{Like} </h4>
        <p>떡볶이 조아 오픈</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>매운맛 등록</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>중간맛 등록</p>
      </div>

      <Modal/>

    </div>
  );
}

function Modal() {
  return(
    <div className="modal">
      <h4>제목</h4>
      <p>소제목</p>
      <p>내용</p>
    </div>
  );
}
export default App;
