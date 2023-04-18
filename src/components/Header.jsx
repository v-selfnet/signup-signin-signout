import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-neutral text-neutral-content">
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Aaron Haque</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/signup'>Signup</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/signin'>Signin</Link>
        </div>
    );
};

export default Header;