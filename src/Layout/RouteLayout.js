import React from 'react'
import {NavLink,Outlet} from "react-router-dom"

const RouteLayout = () => {
  return (
  <div className="root-layout">
    <header>
        <nav>
          <h1>Job Routing</h1>
         {/*  <Link to="/">Home</Link> */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/help">Help</NavLink>
          <NavLink to="/careers">Careers</NavLink>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
  </div>  
  )
}

export default RouteLayout