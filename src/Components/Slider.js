import React, { useState } from 'react'
import "./Style/Slider.css"
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'


const Slider = (props) => {
  const [x, setX] = useState(0)
  const goLeft = () => {
    x === 0 ? setX(-100 * (props.arr.length - 1)) : setX(x + 100)
  }
  const goRight = () => {
    x === -100 * (props.arr.length - 1) ? setX(0) : setX(x - 100)
  }
  return (
    <div className="slider">
      {props.arr.map((item, index) => (
        <div key={ index } className="slide" style={ { transform: `translateX(${x}%)`,backgroundImage: `url(${item})`}}>
          
        </div>
      )) }
      <FaArrowCircleRight id="goRight" onClick={ goRight }/>
      <FaArrowCircleLeft id="goLeft" onClick={ goLeft }/>
     
    </div>
  )
}

export default Slider
