import React from 'react';
import bannerImg from '../../images/portfolio-01.png'
import resume from '../../images/My-ResumePDF.pdf'

const Banner = () => {
    return (
        <div className='flex justify-around p-12'>
            <div>
                <p className='text-2xl'>Hello,</p>
                <h1 className='text-6xl font-bold'> I'm Mohiuddin Shafak</h1>
                <h3 className='text-3xl'>Front-end Web Developer</h3>
                <h4 className='text-2xl'>From Bangladesh</h4>
                <button className='btn text-white mt-10'><a href={resume} download='mohiuddinshafak.pdf'>Download Resume</a></button>
            </div>
            <div>
                <img className='w-00px' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;