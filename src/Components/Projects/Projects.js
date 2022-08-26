import React, { useEffect, useState } from 'react';
import Project from '../Projects/Project';
import carpent from '../../images/carpent/Carpent-Shop1.png'
import bike from '../../images/Bike/Bike-Mania.png'
import psycho from '../..//images/psycho/Psycho-Medicine.png'
import useHook from '../../hooks/useHook';


const Projects = () => {
//    const [projects] = useHook()
//    console.log(projects);
    const [projects, setProjects] = useState([])
    console.log(projects);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    return (
        <div className='mt-10'>
            <h1 className='text-5xl text-center font-bold uppercase'>Projects</h1>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-10 mt-12'>
            {
                projects.map(project => <Project key={project.id} project = {project}></Project>)
            }
                {/* <div class="card w-96 bg-base-300 shadow-xl">
                    <figure className='overflow-hidden'><img className='hover:transform hover:scale-150 hover:transition hover:duration-1000 duration-1000'  src={bike} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                        Bike Mania warehouse
                        </h2>
                        <div class="card-actions justify-start ">
                        <a className=' bg-white text-orange-500 hover:bg-orange-500 hover:text-white hover:translate-y-2 hover:transition hover:duration-500 duration-500 p-3 border-orange-500 cursor-pointer'>Live Site</a>
                        <a className=' bg-white text-orange-500 hover:bg-orange-500 hover:text-white hover:translate-y-2 hover:transition hover:duration-500 duration-500 p-3 border-orange-500 cursor-pointer'>Github Link</a>
                        </div>
                    </div>
                    </div>
                <div class="card w-96 bg-base-300 shadow-xl">
                    <figure className='overflow-hidden'><img className='hover:transform hover:scale-150 hover:transition hover:duration-1000 duration-1000' src={psycho} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                        Psycho Medicine | A psycologist's Website
                        </h2>
                        <div class="card-actions justify-start ">
                        <a className=' bg-white text-orange-500 hover:bg-orange-500 hover:text-white hover:translate-y-2 hover:transition hover:duration-500 duration-500 p-3 border-orange-500 cursor-pointer'>Live Site</a>
                        <a className=' bg-white text-orange-500 hover:bg-orange-500 hover:text-white hover:translate-y-2 hover:transition hover:duration-500 duration-500 p-3 border-orange-500 cursor-pointer'>Github Link</a>
                        </div>
                    </div>
                    </div> */}
            </div>
        </div>
    );
};

export default Projects;
/**
 * const [projects, setProjects] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[]);

    return [projects, setProjects]
 */