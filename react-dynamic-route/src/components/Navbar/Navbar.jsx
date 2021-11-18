import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="link">
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            {/* <Link to=''></Link> */}

        </div>
    )
}

export { Navbar }
