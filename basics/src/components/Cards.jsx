import React from 'react';
import img from '../assets/Demo.png';
import '../cards.css';
function Cards() {
  return (
    <>
    <div className="cards">
        <div className='card'>
        <div className="card-image">
            <img src={img} alt="" />
        </div>
        <h3>Ironman</h3>
        <p>I am Ironman</p>
    </div>
    </div>
    </>
  )
}
export default Cards