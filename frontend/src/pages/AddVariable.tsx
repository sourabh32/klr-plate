import { useState } from 'react'
import { addColor } from './ColorTable'


type addPropType = {
    handleAdd: ({ name, colorCode }: addColor) => {}

}
const AddVariable = ({ handleAdd }: addPropType) => {


    const [color, setColor] = useState("")
    const [variable, setVariable] = useState("")











    return (
        <tr >
            <td className="px-6 py-4 whitespace-nowrap">

            </td>
            <td className="px-6 py-4 whitespace-nowrap">


                <input placeholder='Enter color code...' type="text" className='border  py-2  border-gray-300 rounded px-4 ' onChange={(e) => setVariable(e.target.value)} value={variable} />
            </td>
            <td className="px-6 flex items-center gap-2 py-4 whitespace-nowrap">

                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-10 h-10 rounded-lg"
                />

                <input placeholder='Enter color code...' type="text" className='border  py-2  border-gray-300 rounded px-4 ' onChange={(e) => setColor(e.target.value)} value={color} />
                <button onClick={() => handleAdd({ name: variable, colorCode: color })} className="bg-slate-800 ml-2 text-white py-2 font-bold  px-4 rounded">
                    Add
                </button>
            </td>
        </tr>
    )
}

export default AddVariable