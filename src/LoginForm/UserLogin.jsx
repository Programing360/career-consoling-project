import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContextData } from '../provider/AuthProvider';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const UserLogin = () => {

    const { UserSignIn, userSignWithGoogle, setError, error } = useContext(AuthContextData)
    const navigate = useNavigate()
    const location = useLocation()
    const [showPassword, setShowPassword] = useState(false)

    const handleSignInBtn = (e) => {

        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        setError('')
        // --------------------------------------
        UserSignIn(email, password)
            .then(result => {
                // setUser(true)

                console.log(result)
                {
                    location.state ? navigate(location.state) : navigate('/')
                }
                // setUser(result.user)
                toast('User Login successful')
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }


    const handleGoogleSignIn = () => {
        userSignWithGoogle()
            .then(result => {
                navigate('/')
                toast('User Login successful')
                // setUser(result.user)
                console.log(result.user)
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <Helmet>
                <title>Login - Career Counseling</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl hover:shadow-fuchsia-400 p-8">
                        <div className="card-body ">
                            <form onSubmit={handleSignInBtn}>
                                <fieldset className="fieldset">
                                    {
                                        error && error ? <p className='text-center text-red-500'>Something is Wrong</p> : ''
                                    }
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" />
                                    <div className='relative'>
                                        <label className="label ">Password</label>
                                        <input type={showPassword ? "text" : "password"} name='password' className="input" placeholder="Password" required />
                                        <button onClick={() => setShowPassword(!showPassword)} className='absolute btn btn-xs right-4 top-6 bg-transparent border-none text-gray-500 hover:text-gray-800'>
                                            {
                                                showPassword ? <FaEye className='text-xl'></FaEye> : <FaEyeSlash className='text-xl'></FaEyeSlash>
                                            }
                                        </button>
                                    </div>
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login
                                        <ToastContainer></ToastContainer>
                                    </button>
                                    <p>If you don't have a account ? Please <span className='font-bold'><Link to='/signUp'>Sign up</Link></span></p>
                                </fieldset>
                            </form>
                            <p className='text-center'>-------------- OR --------------</p>

                            <div onClick={handleGoogleSignIn} className='mt-5 text-center'>

                                <Link className='flex items-center text-center hover:bg-blue-300 p-2 border-2 border-blue-500 rounded-2xl'><FaGoogle className=''></FaGoogle>
                                    <p>Continue With Google</p>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;