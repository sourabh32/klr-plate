import  { useState } from 'react'

import { updateColor } from './ColorTable'

type item = {
    id:number,
    name:string,
    colorCode:string
}
type updateProp = {
    item:item,
    updateColor:({name,colorCode,colorId}:updateColor)=>{}
}
const TableData = ({item,updateColor}:updateProp) => {
  const [color,setColor] = useState(item.colorCode)
  const [variable,setVariable] = useState(item.name)



  


    
  return (
     <tr >
    <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{item.id}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">


    <input placeholder='Enter color code...' type="text" className='border  py-2  border-gray-300 rounded px-4 ' onChange={(e) => setVariable( e.target.value)} value={variable} />
    </td>
    <td className="px-6 flex items-center gap-2 py-4 whitespace-nowrap">

        <input
            type="color"
            value={color}
            onChange={(e) => setColor( e.target.value)}
            className="w-10 h-10 rounded-lg"
        />

        <input placeholder='Enter color code...' type="text" className='border  py-2  border-gray-300 rounded px-4 ' onChange={(e) => setColor( e.target.value)} value={color} />
        <button onClick={()=>{updateColor({name:variable,colorCode:color,colorId:item.id})}} className="bg-slate-800 ml-2 text-white py-2 font-bold  px-4 rounded">
            Update
        </button>
    </td>
</tr>
  )
}

export default TableData