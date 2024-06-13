import React from 'react'

const Hero = () => {
  return (
    <div>
        <img src="/icons/Hero.png" alt="harvesta" className='relative'/>
        <div className='absolute top-40 text-white ml-48'>
            <h2 className='text-2xl font-bold'>Find Your Healthy</h2>
            <h2 className='text-2xl text-harvestaYellow font-bold'>Groceries</h2>
            <br />
            <p className='text-xs'>Fresh fruits & veggies, grains, Tubers and More!</p>
            <br />
            <div className='flex flex-row items-center'>
                <img src="/icons/Vector.svg" alt=""  className='bg-harvestaLightGreen py-1 px-1.5 rounded-s'/>
                <input type="text" placeholder='search for your groceries...'  className='py-1.5 outline-0 w-80 px-2.5 rounded-e text-gray-500 text-xs'/>
            </div>
        </div>
    </div>
  )
}

export default Hero
