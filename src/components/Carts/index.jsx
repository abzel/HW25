import React from 'react'
import './Carts.css'
import jett from './images/jett.png'
import sova from './images/sova.png'
import sage from './images/sage.png'
import phoenix from './images/phoenix.png'
import agent from './images/agent.png'

export const Carts = () => {
  return (
    <div className='carts'>
      <div className='carts-imgs'>
        {/* 1 */}
        <div className='agent'>
          <img alt='' src={agent}></img>
        </div>
        {/* 2 */}
        <div>
          <div className='phoenix'>
            <img alt='' src={phoenix}></img>
          </div>
        </div>
        {/* 3 */}
        <div>
          <div className='jet'>
            <img alt='' src={jett}></img>
          </div>
        </div>
        {/* 4 */}
        <div>
          <div className='sova'>
            <img alt='' src={sova}></img>
          </div>
          </div>
        {/* 5 */}
        <div>
          <div className='sage'>
            <img alt='' src={sage}></img>
          </div>
          </div>
          </div>
    </div>
  )
}
