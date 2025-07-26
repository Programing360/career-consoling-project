import photo from '../../assets/career-guidance-for-bangladeshi-students-abroad.webp'
import NavBar from '../NavBar/NavBar';

const DiscoverMore = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='flex justify-center gap-16 p-6'>
                <div>
                    <h1 className="text-2xl">Career guidance for Bangladeshi 
                        <br /> students to settle down abroad
                    </h1>

                    <p className='text-gray-400 w-96'>Career Guidance is a procedure that will assist you in getting to understand and comprehend yourself and the world of work so that you may make career, educational, and life decisions. Choosing the correct location is critical since it shapes a student's professional life, personal lifestyle, and the people he connects with.

                        In summary, one's career impacts one's quality of life. Preparing for higher education abroad is a significant financial and emotional decision. As a result, it is critical to devote appropriate time and effort to making the right professional choice.</p>

                    <p className='p-4 bg-cyan-600 text-white rounded-2xl mt-2'>Contract Us: +880173458940</p>
                </div>
                <div>
                    <img src={photo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default DiscoverMore;