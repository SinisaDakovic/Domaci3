import React from 'react'
import {Link} from 'react-router-dom'

import './navigation.css'

function Navigation() {

    return (
        <>
        <nav className="navigation"> 

           <div className="sections">
                <Link to="filmovi" className='link'>Filmovi</Link>
                <Link to="knjige" className='link'>Knjige</Link>
                <Link to="osobe" className='link'>Osobe</Link>
           </div>

           <div>
                <Link to="/" className='link'>Log out</Link>
           </div> 

        </nav>
        </>
    )
}

export default Navigation
