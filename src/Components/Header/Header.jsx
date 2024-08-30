import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-around'>
           <Link to={"/"}>Home</Link>
           <Link to={"/about"}>About</Link>
           {/* <Link to={"/update/"}>Update</Link> */}
           <Link to={"/register"}>Register</Link>
           <Link to={"/login"}>Login</Link>
           <Link to={"/regget"}>RegGet</Link>
        </div>
    );
};

export default Header;