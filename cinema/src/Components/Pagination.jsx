import React from 'react'

function Pagination({handlePrev,handleNext,pageno}) {
  return (
    <div className='bg-gray-400 p-2 mt-8 text-center'>
    <i onClick={handlePrev} class="fa-solid fa-arrow-left mr-10"></i>
{pageno}
    <i onClick={handleNext} class="fa-solid fa-arrow-right ml-10"></i>
    
    </div>
  )
}

export default Pagination