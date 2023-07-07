
import React from 'react'
import {Outlet} from 'react-router-dom'

const CareersLayout = () => {
  return (
    <div className="careers-layout">
    <h2>Careers</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis perspiciatis aut hic odio magnam modi sint officia dolorum nostrum sit nisi sed, a est consequuntur sapiente! Explicabo sint dolores aliquid!</p>

    <Outlet/>
    </div>
  )
}

export default CareersLayout