import React from 'react';
import img from '../assets/Demo.png';
import '../cards.css';
function Cards(props) {
  return (
    <>
    <div className="cards">
        <div className='card'>
        <div className="card-image">
            <img src={img} alt="" />
        </div>
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
    </div>
    </div>
    </>
  )
}
export default Cards