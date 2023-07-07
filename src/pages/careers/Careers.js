import React from 'react'
import {useLoaderData,Link} from 'react'



const Careers = () => {
    /* after the careersLoader function is done fetching the data via the endpoint it will return data in json format, we will then use a hook called useLoaderData which will return the data back tpo us*/
    const careers = useLoaderData()
  return (
    <div className="careers">
        {careers.map((career)=>(
            <Link to="/" key={career.id}>
                <p>{career.title}</p>
                <p>Based in {career.location}</p>
            </Link>
        ))
        }
    
    
    </div>
  )
}

export default Careers


/* loader function */
export const careersloader = async ()=>{
    const res = await fetch('http://localhost:4000/careers')

    return res.json()
}