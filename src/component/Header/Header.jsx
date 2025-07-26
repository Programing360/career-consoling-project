
import photo1 from '../../assets/your-point-portrait-of-handsome-confident-and-coo-2022-10-12-15-29-26-utc.jpg'
import photo2 from '../../assets/1_CRIUB3VMicWCVZEBpZOXqg.png'
import { GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero bg-base-200 py-20">
                        <div className="hero-content flex-col lg:flex-row">
                            <img
                                src={photo1}
                                className="w-xl h-2/4 rounded-lg shadow-sm transition  "
                                data-aos="slide-up"
                                
                            />
                            <div>
                                <h3 className='text-lg text-[#0066cc]'>Unlock Your Full Potential</h3>
                                <h1 className="text-5xl font-bold text-[#122658] ">Your Trusted Career <span className='text-[#0066cc]'>Counseling Partner</span></h1>
                                <p className="py-6 text-neutral-500">
                                    CareerPath is a modern career counseling platform designed to guide students, job seekers, and professionals toward the right career decisions.
                                </p>
                                <Link to='/discover'><button className="btn bg-[#084997] duration-300 ease-in-out hover:scale-105 text-[#ffffff]">Discover More <GoArrowRight></GoArrowRight></button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero bg-base-200 py-20">
                        <div className="hero-content flex-col lg:flex-row">
                            <img
                                src={photo2}
                                className="w-xl h-2/4 rounded-lg shadow-sm transition  "
                                data-aos="slide-up"
                                
                            />
                            <div>
                                <h3 className='text-lg text-[#0066cc]'>You are in safe hands</h3>
                                <h1 className="text-5xl font-bold text-[#122658] ">Struggling at some stage in normal life? <span className='text-[#0066cc]'>I can help</span></h1>
                                <p className="py-6 text-neutral-500">
                                    CareerPath is a modern career counseling platform designed to guide students, job seekers, and professionals toward the right career decisions.
                                </p>
                                <Link to='/discover'><button className="btn bg-[#084997] duration-300 ease-in-out hover:scale-105 text-[#ffffff]">Discover More <GoArrowRight></GoArrowRight></button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;