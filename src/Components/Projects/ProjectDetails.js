import {React, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import useHook from '../../hooks/useHook';


const ProjectDetails = () => {
    // const [projects] = useHook()
    // console.log(projects);
    const [projects, setProjects] = useState([])
    console.log(projects);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    // const params = useParams()
    const {id} = useParams()
    
    //  console.log(projects);
    // console.log(projects);
    // const projectDetail = projects.find(project => project.id === id)
    // console.log(projectDetail);

    // const { name,live ,frontImg, fullImg, github, logoinImg, signoutImg} = projectDetail
    return (
        <div>
            <h1 className='text-6xl text-center mt-12'>Project details {id}</h1>
            <h2>Name :</h2>
        </div>
    );
};

export default ProjectDetails;