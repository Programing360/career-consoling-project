import React from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const CardShow = ({ data }) => {
    // console.log(data)
    const { service_name, image, category, description, pricing, rating, counselor } = data

    const handleSubmit = (e) => {
        e.preventDefault()
        toast('Add Your Comment')
        document.getElementById('field').value = ''
        
    }
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col">
                <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className='text-start'>
                    <h1 className="text-4xl font-bold">{service_name}</h1>
                    <p className='font-semibold'>{category}</p>
                    <p className='font-light'>counselor: {counselor}</p>
                    <p className="py-6">
                        <span className='font-semibold'>Info:</span> {description}
                    </p>
                    <div >
                        <p className='font-bold'>price: {pricing}</p>
                        <div className='flex items-center gap-4'>
                            <p>Rating: {rating}</p>
                            <div className="rating">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="1 star" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="2 star" defaultChecked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="3 star" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="4 star" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="5 star" />
                            </div>
                            <div className='mx-auto'>
                                <h2>Feedback</h2>
                                <div className='flex items-center gap-2'>
                                    <form onSubmit={handleSubmit}>
                                        <input className='border-2 p-4 border-gray-400 rounded-lg' type="text" name="message" id="field" placeholder='Your opinion' />
                                        <button className='btn bg-blue-400'>Comment</button>
                                        <ToastContainer></ToastContainer>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <Link to='/'><button className="btn btn-ghost mt-2 translate-2">Go Back</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardShow;