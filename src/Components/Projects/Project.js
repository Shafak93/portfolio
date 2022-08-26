import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css'
import carpent from '../../images/carpent/Carpent-Shop1.png'
import ProjectDetails from './ProjectDetails';

const project = ({project}) => {
    
    const {id, name,live ,frontImg, fullImg, github, logoinImg, signoutImg} = project
    return (
        <div 
        data-aos="zoom-in-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        class="project card w-80 lg:w-96 bg-white  shadow-xl  overflow-hidden">
                    <figure className='overflow-hidden'><img className='hover:transform hover:scale-125 hover:transition hover:duration-1000 duration-1000' src={frontImg} alt="Shoes" /></figure>
                    <div class="card-body">
                    <h2 class="card-title text-orange-600">
                    {name}
                    </h2>
                     <div class="card-actions justify-start ">
                     <a className=' link-btn font-bold hover:translate-y-2 hover:transition hover:duration-500 duration-500 p-3  cursor-pointer' href={live} target='_blank'>Live Link</a>
                    <a className=' link-btn font-bold hover:translate-y-2 hover:transition hover:duration-500 duration-500 p-3  cursor-pointer' href={github} target='_blank'>Github Link</a>
                    <Link className=' link-btn font-bold hover:translate-y-2 hover:transition hover:duration-500 duration-500 p-3  cursor-pointer' to={'/project/' + id}>Details</Link>
                </div>
            </div>
        </div>
    );
};

export default project;