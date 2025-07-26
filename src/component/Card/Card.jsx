import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/career.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className='container w-11/12 mx-auto'>
            <h1 className='text-center mt-10 font-bold text-3xl'>Our Counselling Services For Counsellors{data.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14'>
                {
                    data.map(data => <div key={data.id} className="card bg-base-100 w-96 shadow-lg hover:shadow-fuchsia-500">
                        <figure className="px-10 pt-10">
                            <img
                                src={data.image}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body ">
                            <div className='flex items-center flex-wrap gap-6'>
                                <h2 className="card-title font-bold">{data.service_name}</h2>
                                <p className='font-semibold text-[#]'>{data.pricing}</p>
                            </div>
                            <p>{data.duration}</p>
                            <p className='font-semibold'>{data.category}</p>
                            <p>{data.description}</p>
                            <div className="card-actions justify-between items-center" >
                                <div>
                                    <Link to={`/details/${data.id}`}><button className="btn bg-[#0573e1] text-[#ffffff] hover:scale-105 hover:bg-amber-400">Learn More</button></Link>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                                    </div>
                                    <h3 className='font-bold'> {data.rating}</h3>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Card;