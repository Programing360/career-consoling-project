import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContextData } from '../../provider/AuthProvider';

const NavBar = () => {

    const {user, setUser, userSignOut,setError} = useContext(AuthContextData)
    console.log(user)
    const handleSignOut = () => {
        userSignOut()
        .then(() => {
            setUser(null)
            console.log('User sign out')
        })
        .catch(error => setError(error))
        
    }
    const list = <>
        <li className='text-black'><NavLink to='/'>Homepage</NavLink></li>
        <li className='text-black'><NavLink to='/about'>About Me</NavLink></li>
        <li className='text-black'><NavLink to='/page'>Page</NavLink></li>
        <li className='text-black'><NavLink to='/dashboard'>Dashboard</NavLink></li>
        
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {list}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-[#0166cc]">Career Counseling</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {list}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                       user && user ? <button onClick={handleSignOut} className='btn btn-primary'>Sign out</button> : <Link to='/login' className="btn hover:transform duration-150 ease-in-out bg-[#074c9e] text-white">Login</Link>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default NavBar;