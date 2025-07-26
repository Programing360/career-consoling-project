import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center mt-80'>
            <h1 className="text-3xl  font-bold">Page Not Found</h1>
            <Link to='/' className='btn mt-3'>Go Back</Link>
        </div>
    );
};

export default ErrorPage;