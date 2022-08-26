import React from 'react';
import SkillBar from 'react-skillbars';
import './AboutMe.css'

const AboutMe = () => {
    const skills = [
        { type: 'HTML', level: 75 },
        { type: 'CSS', level: 50 },
        { type: 'Bootstrap', level: 75 },
        { type: 'TailwindCSS', level: 65 },
        { type: 'Javascript', level: 60 },
        { type: 'React.js', level: 60 },
        { type: 'Node.js', level: 25 },
        { type: 'Express.js', level: 20 },
      ];
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mx-12 mt-10 '>
            <div>
                <h2  data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className='aboutme text-3xl font-bold  w-44 p-3 '>About Me</h2>
                <p className='text-xl mt-10'>I'm Front-end web developer working from home.I'm enthusiastic about new tools and technologies. Learning new things is my passion.I can ensure you that I can adapt myself to this rapidly changing industry. I have gained my knowledge in this field recently in a web-development course. Before this course, I spent above one year in this field of self-learning. I did some projects where I explored my front-end and backend knowledge.If I get opportunities, I can improve my skills and can contribute to your organization </p>
            </div>

            <div  className='lg:ml-10 mt-10 lg:mt-0'>
                <h2
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className='aboutme text-3xl font-bold  w-44 p-3 mb-10'>My Skills</h2>
                <div>
                <SkillBar skills={skills} animationDuration={3000}/>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;