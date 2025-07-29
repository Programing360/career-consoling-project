import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContextData } from '../../provider/AuthProvider';

const NavBar = () => {

    const { user, setUser, userSignOut, setError } = useContext(AuthContextData)
    console.log(user)
    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                setUser(null)
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
                <div className="navbar-end pr-3">
                    {
                        user && user ? <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={user.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <h3 className='text-center'>{user.email}</h3>
                                <div className='text-center'>
                                    <img className='w-10 rounded-full mt-4 mx-auto' src={user.photoURL} alt="" />
                                    <h2>{user.displayName}</h2>
                                </div>
                                <button onClick={handleSignOut} className='btn btn-primary'>Sign out</button>
                            </ul>
                        </div> : <Link to='/login' className="btn hover:transform duration-150 ease-in-out bg-[#074c9e] text-white">Login</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavBar;