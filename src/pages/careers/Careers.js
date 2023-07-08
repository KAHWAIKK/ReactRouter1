/* import React from 'react'
import {Link} from 'react-router-dom'
import {useLoaderData} from 'react-router-dom'
 */

/* loader function */
/* export const careersloader = async ()=>{
    const res = await fetch('http://localhost:5000/careers')

   return res.json()
}

const Careers = ()=>{ */
    /* after the careersLoader function is done fetching the data via the endpoint it will return data in json format, we will then use a hook called useLoaderData which will return the data back tpo us*/
   /*  const resp = useLoaderData()


  return (
    <div className="careers">
        {resp.map(n=>(
            <Link to="/" key={n.id}>
                <p>{n.title}</p>
                <p>Based in {n.location}</p>
            </Link>
        ))
        }
    
    
    </div>
  )
}

export default Careers


 */

import { Link } from "react-router-dom"

// data loader
export const careersloader = async () => {
  const res = await fetch('http://localhost:5000/careers') 

  const careers = res.json()

//export default function Careers() {
  //const careers = useLoaderData()

  return (
    <div className="careers">
      {careers.map(career => (
        <Link to='/' key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  )
}


