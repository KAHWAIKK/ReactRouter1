import React from 'react'
import {Outlet,NavLink} from 'react-router-dom'

const HelpLayout = () => {
  return (
    <div className='help-layout'>
        <h2>Website Help</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione voluptatem voluptatibus asperiores voluptas doloremque eligendi officiis ipsam quas quaerat. Aperiam nisi est aut recusandae ducimus vel, molestiae porro magni hic!</p>

        <nav>
            <NavLink to="faq">View the FAQ</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
        </nav>

        <Outlet></Outlet>
        
    </div>
    
  )
  
}
export default HelpLayout