import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContextData } from '../provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';

const UserLogin = () => {

    const { UserSignIn, userSignWithGoogle,setError, error } = useContext(AuthContextData)
    const navigate = useNavigate()
    const location = useLocation()
    
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
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl hover:shadow-fuchsia-400 p-8">
                        <div className="card-body">
                            <form onSubmit={handleSignInBtn}>
                                <fieldset className="fieldset">
                                    {
                                      error &&  error ? <p className='text-center text-red-500'>Something is Wrong</p> : ''
                                    }
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login
                                    <ToastContainer></ToastContainer>
                                    </button>
                                    <p>If you don't have a account ? Please <span className='font-bold'><Link to='/signUp'>Sign up</Link></span></p>
                                </fieldset>
                            </form>
                            <p className='text-center'>-------------- OR --------------</p>

                            <div onClick={handleGoogleSignIn} className='mt-5'>

                                <Link className='flex items-center gap-2 justify-center hover:bg-blue-300 p-2 rounded-lg'><FaGoogle></FaGoogle>
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