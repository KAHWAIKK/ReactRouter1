
import React from 'react'
import {NavLink} from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h2>Page not Found</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, doloremque illum odio numquam dolorem omnis non, sapiente sed esse quisquam asperiores, perspiciatis eos! Praesentium quam culpa dolore repellat unde velit.</p>
        <p>Go to back <NavLink to="/">Home Page</NavLink></p>
    </div>
  )
}

export default NotFound