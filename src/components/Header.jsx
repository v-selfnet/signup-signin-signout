import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)
    // console.log('header show:', user)

    const handelSignout = () => {
        logOut()
            .then(() => {
                console.log('Header: signout success!');
            })
            .catch(err => console.error(err.message, err.code))
    };

    return (
        <div className="navbar bg-neutral text-neutral-content flex justify-between ">
            
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Aaron Haque</Link>
            
            <div>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                { user &&
                    <Link className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>
                }
                <Link className="btn btn-ghost normal-case text-xl" to='/signup'>Signup</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/signin'>Signin</Link>
            </div>
            
            <div>
                {
                    user ? <>
                        <span className='text-orange-400'>{user.email}</span>
                        <button className="btn btn-ghost normal-case text-xl" onClick={handelSignout}>Signout</button>
                    </> :
                        <button className='btn btn-xs'>
                            <Link className="text-green-400" to='/signin'>Please Signin!</Link>
                        </button>
                }
            </div>
        </div>
    );
};

export default Header;