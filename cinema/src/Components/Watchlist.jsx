import React, { useState } from 'react'

function Watchlist(watchlist) {
    const [search,setSearch] = useState('')


  return (
    <>
    <div className='flex justify-center flex-wrap m-4 gap-20'>
     <div className='flex justify-center h-[3rem] w-[9rem] bg-blue-300 rounded-xl text-white font-bold items-center'>Action</div>
     <div className='flex justify-center h-[3rem] w-[9rem] bg-blue-300 rounded-xl text-white font-bold items-center'>Crime</div>
     <div className='flex justify-center h-[3rem] w-[9rem] bg-blue-300 rounded-xl text-white font-bold items-center'>All Genre</div>
    </div>
    <div className='flex justify-center my-4'>
        <input className='h-[3rem] w-[18rem] border rounded-lg bg-gray-200 outline-none px-4' type='text' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Enter Film Name...'/>
    </div>
    <div className='border border-gray-200 m-8 justify-around'>
        <table className=' rounded-lg overflow-hidden  w-full text-gray-500 text-center'>
            <thead className='border-b-1'>
                  <tr>
                    <th>Name</th>
                    <th>Ratings</th>
                    <th>Poplarity</th>
                    <th>Genre</th>
                  </tr>
            </thead>
            <tbody>

           
                    <tr className='boreder-b-2'>
                        <td className='flex items-center px-6 py-4'>
                            <img className='h-[8rem] w-[10rem] ' src={`https://i.pinimg.com/1200x/58/a6/51/58a651bd6750d055faf23570802cdfbf.jpg`}/>
                          <div className='mx-13'>LOKAH CHAPTER 1</div>
                        </td>

                        <td>8.5</td>
                        <td>9</td>
                        <td>Action</td>
                       
                       <td className='text-red-700 font-bold hover:cursor-pointer'>DELETE</td>
                     
                    </tr>

            </tbody>
        </table>
    </div>
    </>
  )
}

export default Watchlist