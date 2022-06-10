import React from 'react';
import SkillBar from 'react-skillbars';

const AboutMe = () => {
    const skills = [
        { type: 'HTML', level: 75 },
        { type: 'CSS', level: 50 },
        { type: 'Bootstrap', level: 75 },
        { type: 'Tailwind CSS', level: 65 },
        { type: 'Javascript', level: 60 },
        { type: 'React', level: 60 },
        { type: 'Node.js', level: 25 },
        { type: 'Express.js', level: 20 },
      ];
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mx-12 mt-10 '>
            <div>
                <h2 className='text-3xl font-bold text-orange-500 border w-44 hover:bg-orange-500 hover:text-white hover:translate-x-5 hover:transition hover:duration-500 duration-500 p-3 border-orange-500'>About Me</h2>
                <p className='text-xl mt-10'>I'm Front-end web developer working from home.I'm engaged with web-development work.I enjoy my work with my joy.I'm enthusiastic about new tools and technologies. Learning new things is my passion.In my leisure I spent my times exploring in new work. </p>
            </div>

            <div  className='ml-10'>
                <h2 className='text-3xl font-bold text-orange-500 border w-44 hover:bg-orange-500 hover:text-white hover:translate-x-5 hover:transition hover:duration-500 duration-500 p-3 border-orange-500 mb-10'>My Skills</h2>
                <div>
                <SkillBar skills={skills} animationDuration={7000}/>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;