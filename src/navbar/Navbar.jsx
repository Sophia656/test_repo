import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div style={{width: '100vw', height: '10vh', background: 'lightblue', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'absolute', top: 0, left: 0, zIndex: 500}}>
            <Link to='/'>one</Link>
            <Link to='/two'>two</Link>
            <Link to='/three'>three</Link>
        </div>
    );
};

export default Navbar;