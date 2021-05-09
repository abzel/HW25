import React from 'react'
import './Footer-Carts.css'
import footer1 from "./images/footer1.png"
import footer2 from "./images/footer2.png"
import footer3 from "./images/footer3.png"
import footer4 from "./images/footer4.png"


function Footer_Carts() {
  return (
    <div className='title'>
      <img src={footer1} className="footer1"/>
      <img src={footer2} className="footer2"/>
      <img src={footer3} className="footer3"/>
      <img src={footer4} className="footer4"/>
      </div>
  )
}

export default Footer_Carts
