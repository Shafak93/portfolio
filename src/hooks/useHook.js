import React, { useEffect, useState } from 'react';

const useHook = () => {
    const [projects, setProjects] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[]);

    return [projects, setProjects]
};

export default useHook;