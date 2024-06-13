import React from 'react'
import categorys from '../../routes/category.routes'
import { Link } from 'react-router-dom'



const Category = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='bg-harvestaLightGreen w-66   mb-6 rounded-full'>
        <div className='flex flex-row gap-1 justify-center text-white'>
          {categorys.map((list, index) => (
          <Link to={list.path}
          className='hover:bg-harvestaDarkGreen active:bg-harvestaDarkGreen px-4 p-3 w-40 text-center rounded-full'>{list.name}
        </Link>
          ))}
        </div>
      </div>
      <div className='flex flex-row items-center justify-center min-h-screen ml-44'>
        <div className='flex flex-col items-center justify-center text-center'>
         <div className='w-80 justify-center'>
          <img src="/icons/arrow.svg" alt="harvesta"  width={'200px'}/>
          <h1 className='text-2xl font-bold mb-4'>Download Our App</h1>
          <p className='mb-6 '>Get fresh farm produce delivered in minutes from a variety of trusted vendors offering fruits, veggies, tubers, grains, and nuts.</p>
          </div>
          <div className='flex flex-row justify-center  gap-5 mb-6'>
            <img src="/icons/applestore.svg" alt="harvesta" width='150px' />
            <img src="/icons/playstore.svg" alt="harvesta" width='150px' />
          </div>
          </div>
        <div>
          <img src="/icons/iphone1.svg" alt="mobile app" width={'550px'}/>
      </div>
      </div>
    </div>
  )
}

export default Category
