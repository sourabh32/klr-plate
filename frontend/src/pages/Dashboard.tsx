import { useParams } from "react-router-dom";
import Container from "./Container";
import { useEffect, useState } from "react";

import ColorTable from "./ColorTable";
import instance from "../axios";
import Schema from "./Schema";


type projectType = {
  id: number,
  name: string
}

const Dashboard = () => {
  const [copied, setCopied] = useState<true | false>(false);
  const [project, setProject] = useState<projectType | null>(null)


  let { id } = useParams();

  const getProject = async () => {

    try {
      const res = await instance.get(`/project/name/${id}`);
      setProject(res.data)
    } catch (error) {
      console.log(error)
    }
    
  }

  




  const handleClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`https://klrplate.sourabhsharma181003.workers.dev/project/${id}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Error copying to clipboard:", error);

    }
  }

  useEffect(() => {
    getProject()
  }, [])
  return (
    <div className="w-full px-10">
      <Container>
        <nav className="border-b-[2px] font-bold text-2xl ">
          Dashboard for <span className="underline"><i>{project && project.name}</i></span>
        </nav>
        <div className="flex gap-5 mt-10 items-center ">
          <div className="text-xl bg-green-50 p-2 rounded-md">{`https://klrplate.sourabhsharma181003.workers.dev/project/schema/${id}`}</div>
          <button onClick={handleClipboard} className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-2 border border-green-500 hover:border-transparent rounded">
            {
              !copied ? ("copy") : ("copied!"
              )
            }


          </button>

        </div>
        <p className="text-sm">*Make an GET request to above url</p>




        <ColorTable id={id} />

       {id && <Schema id={id} />}

      </Container>




    </div>
  )
}

export default Dashboard