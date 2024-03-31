import React, { useState } from 'react';

import instance from '../axios';
import { useNavigate } from 'react-router-dom';
import Container from './Container';





const Home: React.FC = () => {
  const [projectName, setProjectName] = useState<string>('');
  const [loading,setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const handleSubmit = async () => {

    if(projectName.length<4){
      alert("Minimum 4 characters in project")
      
    }

    else{
        setLoading(true)
       const res  = await instance.post("/project",{name:projectName})
       navigate(`/project/${res.data.id}`)

       setLoading(false)
      
     
    }
    
  
  };

  return (
    <div  className="flex flex-col relative custom  items-center justify-center h-screen">
      <Container>
        <div className=' gap-5 text-center flex-col justify-center align-center text-black'>

        
      <h1 className='text-6xl mb-5 font-bold'>Test  color-schemes with ease!</h1>
      <p className="text-3xl font-semibold ">
        KLRplate allows devs to test color schemes for your projects, whether they are websites, apps, or anything else.
      </p>
      
       <div className='my-10' >
      
        <input
          type="text"
          id="projectName"
          value={projectName}
          placeholder='Enter project name..'
          onChange={(e) => setProjectName(e.target.value)}
          className="border  py-2  border-gray-300 rounded px-4 "
        />
        <button onClick={handleSubmit} className="bg-slate-800 ml-2 text-white py-2 font-bold  px-4 rounded">
        { loading ? "load..." : "Start"}
      </button>
      <p className="text-sm mt-2  ">
        *Initiating a New Project/Open Old project
      </p>
        </div>
      
      
      </div>
      </Container>
      
    </div>
  );
};

export default Home;
