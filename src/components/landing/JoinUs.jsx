import React from 'react'

const JoinUs = () => {
  return (
    <div className="mt-12 bg-[url('/icons/design.svg')] bg-cover bg-center h-screen w-full flex items-center justify-center">
      <div className='flex flex-row gap-4 items-center'>
         <div className='flex flex-col items-center'>
            <img src="/icons/getapp.svg" alt="harvesta" className='relative z-10' width={'328px'} />
            <div className='bg-white p-4 border-4 border-harvestaDarkGreen absolute  mt-48 rounded-lg h-48 '>
                <h1 className='p-1 font-jakarta'>1</h1>
            <p className='w-72 jakarta'>Feeling exhausted from market trips? Harvesta is here to ease your stress! Download our app, place your order instantly, and let us bring Satisfaction  right to your doorstep.</p>
            </div>    
            <div className='bg-harvestaDarkGreen w-44 rounded-3xl mt-44 text-white text-center p-2'>
               <p>Get Our app</p>
            </div>    
         </div>
         <div className='flex flex-col items-center'>
            <img src="/icons/getapp1.svg" alt="harvesta" width={'328px'}/>
            <div className='bg-white p-4 border-4 border-harvestaDarkGreen absolute  mt-48 rounded-lg h-48'>
                <h1>2</h1>
                <p className='w-72'>Join our First-Class team of dispatch riders and start earning by delivering satisfaction to our customers. Be your Boss, and Rule your world!</p>
            </div>  
            <div className='bg-harvestaDarkGreen w-44 rounded-3xl mt-44 text-white text-center p-2'>
               <p>Become a Rider</p>
            </div>
        </div>
         <div className='flex flex-col items-center'>
            <img src="/icons/ven.svg" alt="harvesta" width={'328px'}/>
            <div className='bg-white p-4 border-4 border-harvestaDarkGreen absolute  mt-48 rounded-lg h-48'>
                <h1>3</h1>
            <p className='w-72'>Feeling exhausted from market trips? Harvesta is here to ease your stress! Download our app, place your order instantly, and let us bring Satisfaction  right to your doorstep.</p>
            </div>
            <div className='bg-harvestaDarkGreen w-44 rounded-3xl mt-44 text-white text-center p-2'>
               <p>Become a Vendor</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default JoinUs
