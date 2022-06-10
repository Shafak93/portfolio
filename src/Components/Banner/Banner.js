import React from 'react';
import bannerImg from '../../images/portfolio-01.png'
import resume from '../../images/My-ResumePDF.pdf'
import TypeAnimation from 'react-type-animation';

const Banner = () => {
    return (
        <div className='flex justify-around  lg:px-5 rounded-xl lg:bg-gray-200 mt-10 lg:mx-20 md:mx-10 sm:mx-10'>
            <div className='mt-10'>
            <p className='text-2xl'>Hello, I'm</p>
            <h1 className='text-6xl font-bold'> I'm Mohiuddin Shafak</h1>
            <div className='text-4xl font-bold'  >
            <TypeAnimation
            cursor={true}
            sequence={[
              'A front-end developer',
              3000,
              'A web developer',
              2000,
            ]}
            wrapper="h2"
            repeat={Infinity}
           />
           <h4 className='text-2xl'>From Bangladesh</h4>
                <button className='btn bg-white hover:border-none text-orange-500 hover:bg-orange-500 hover:text-white hover:translate-x-5 hover:transition hover:duration-500 duration-500 p-3 border-orange-500 mt-10'><a href={resume} download='mohiuddinshafak.pdf'>Download Resume</a></button>
            </div>
                {/* <h1 className='text-6xl font-bold'> I'm Mohiuddin Shafak</h1>
                <h3 className='text-3xl'>Front-end Web Developer</h3> */}
                
            </div>
            <div>
                <img className='h-96' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;