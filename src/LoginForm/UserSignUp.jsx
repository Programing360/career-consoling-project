
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContextData } from '../provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet-async';


const UserSignUp = () => {
    const {userLogin,userSignWithGoogle,setUser,setError} = useContext(AuthContextData)
    const navigate = useNavigate()
    const handleUserSignUp = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        userLogin(email, password)
        .then(result => {
            
            toast('User Login Successful')
            navigate('/')
            setUser(result.user)
            
        })
        .catch(error => {
            setError(error)
            toast('Something is Wrong')
        })
    }
    const handleGoogleSignIn = () => {
        userSignWithGoogle()
        .then(res => {
        
            toast('User Login Successful')
            navigate('/')
            setUser(res.user)
        })
        .catch(error => {
            toast('something is wrong')
            setError(error.message)
        })
    }
   
    return (
        <div className="hero bg-base-200 min-h-screen">
            <Helmet>
                <title>Sign Up - Career Counseling</title>
            </Helmet>
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left mb-4">
                    <h1 className="text-4xl font-bold">Sign Up Now</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl p-8 hover:shadow-fuchsia-700">
                    <div className="card-body">
                        <form onSubmit={handleUserSignUp}>
                            <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Your Name" />
                            <label className="label">Photo</label>
                            <input type="text" name='photo' className="input" placeholder="Your Photo" />
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <button className="btn btn-neutral mt-4">Sign Up
                                <ToastContainer></ToastContainer>
                            </button>
                            <p>Already have an account ? Please <Link to='/login'  className='font-bold'>Login</Link></p>
                        </fieldset>
                        <div onClick={handleGoogleSignIn} className='mt-5'>
                            <Link className='flex items-center gap-2 hover:bg-blue-300 p-2 rounded-lg'><FaGoogle></FaGoogle>
                            <p>Continue With Google</p>
                            </Link>
                            
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSignUp;