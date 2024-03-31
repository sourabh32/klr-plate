import React, {  useState } from 'react';
import instance from '../axios';

interface Props {
  id:string 
}

const Schema: React.FC<Props> = ({id}) => {
  const [copied, setCopied] = useState(false);
 const [schema,setSchema] = useState({})

 const [loading,setLoading] = useState<boolean>(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(schema, null, 2));
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Reset copied state after 2 seconds
  };

  

  const getSchema = async () =>{
    try {
        setLoading(true)
      const res  = await instance.get(`/project/schema/${id}`);
      console.log(res.data)

      setSchema(res.data)
     setLoading(false)
     
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }


  

  return (
  
    
   <div className='border relative p-5 rounded-md bg-green-50'>
      <div className="flex absolute right-2 top-2 gap-2">
      <button className='  p-2 bg-green-200 rounded-md font-bold ' onClick={handleCopy}>{copied ? 'Copied!' : 'Copy'}</button>
      <button className='  p-2 bg-green-200 rounded-md  font-bold ' onClick={getSchema}>{loading ? "load...":"Refresh"}</button>
     
      </div>
      

      <pre className='text-green-500'>{JSON.stringify(schema, null, 2)}</pre>
    </div>
   
  );
};

export default Schema;
