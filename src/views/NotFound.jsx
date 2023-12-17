import React from 'react'
import { Link } from "react-router-dom";
import notfound from '../assets/imgs/notfound.png'

const NotFound = () => {
  return (
    <>
    <div className="img-found">
          <img className='notfound'
              src={notfound}
              alt="not-found" />
        <Link to="/" className='text-white'>Home</Link>
    </div>
    
    </>
  )
}

export default NotFound