import React from 'react'
import './Header.css'
import textHeader from './images/textHeader.png'


function Header() {
  return (
    <div>
    <div className="header"></div>
    <img src={textHeader} className="textHeader"/>
    </div>
  )
}

export default Header
