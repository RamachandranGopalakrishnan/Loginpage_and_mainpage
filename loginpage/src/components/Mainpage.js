import React from 'react'
import { useNavigate } from 'react-router-dom'
const Mainpage = () => {

    const navigate=useNavigate()
  return (
    <div className='container m-auto my-8'>
        <div className='h-12'>
            <button onClick={()=>navigate("/")}
            className='rounded bg-slate-600 text-white px-6 py-2 font-semibold'>Log out</button>
        </div>
        <div className='flex shadow border-b'>
        <table className='min-w-full'>
            <thead className='bg-gray-50'>
            <tr className>
            <th className=' py-3 px-6 font-medium text-gray-500'> #</th>
            <th className=' py-3 px-6 font-medium text-gray-500'>Name</th>
            <th className=' py-3 px-6 font-medium text-gray-500'>Date Created</th>
            <th className=' py-3 px-6 font-medium text-gray-500'>Role</th>
            <th className=' py-3 px-6 font-medium text-gray-500'> Status</th>
            <th className=' py-3 px-6 font-medium text-gray-500'> Action</th>
            </tr>
            </thead>
            <tbody className='bg-white'>
                <tr>
                    <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-600'>1</div></td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-600'>Ramachandran</div></td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-600'>17/02/2024</div></td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-600'>Software Devloper</div></td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-600'>Online</div></td>
                    <td>
                        <a href="#" className='text-indigo-600 hover:text-indigo-800 '>On Project</a>
                    </td>
                </tr>

                <tr>
                    <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-600'>2</div></td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-600'>Anbu</div></td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-600'>1/01/20024</div></td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-600'>Software Devloper</div></td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-600'>On Project</div></td>
                    <td>
                        <a href="#" className='text-indigo-600 hover:text-indigo-800 '>On Project</a>
                    </td>
                </tr>

                <tr>
                    <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-600'>3</div></td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-600'>Shiva</div></td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-600'>3/02/20024</div></td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-600'>FullStack Devloper</div></td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-600'>Offline</div></td>
                    <td>
                        <a href="#" className='text-indigo-600 hover:text-indigo-800 '>On Bench</a>
                    </td>
                </tr>

                <tr>
                    <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-600'>4</div></td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-600'>Saran</div></td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-600'>11/01/2001</div></td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-600'>Web Devloper</div></td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-600'>Online</div></td>
                    <td>
                        <a href="#" className='text-indigo-600 hover:text-indigo-800 '>On Project</a>
                    </td>
                </tr>

                <tr>
                    <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-600'>5</div></td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-600'>Soundarya</div></td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-600'>5/01/2024</div></td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-600'>Software Devloper</div></td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-600'>Offline</div></td>
                    <td>
                        <a href="#" className='text-indigo-600 hover:text-indigo-800 '>On Project</a>
                    </td>
                </tr>

                <tr>
                    <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-600'>6</div></td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-600'>Varuma</div></td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-600'>5/03/2001</div></td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-600'>Software Devloper</div></td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-600'>Online</div></td>
                    <td>
                        <a href="#" className='text-indigo-600 hover:text-indigo-800 '>On Bench</a>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        
    </div>
  )
}

export default Mainpage