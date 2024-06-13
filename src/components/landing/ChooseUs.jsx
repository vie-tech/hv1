// import React from 'react'

// const ChooseUs = () => {
//   return (
//     <div className='bg-harvestaYellow items-center'>
//         <h1>Why Choose Us</h1>
//         <div className='flex flex-row justify-between'>
//       <div>
//             <img src="/icons/fruit.svg" alt="harvesta" />
//             <h2>Top Rated Vendors Around You</h2>
//             <div>
//                 <p>You have access to a diverse selection of grocery sellers,
//                     enabling you to either purchase your preferred Fresh Farm Produce.</p>
//             </div>
//       </div>
//       <div>
//             <img src="/icons/fruit.svg" alt="harvesta" />
//             <h2>Top Rated Vendors Around You</h2>
//             <div>
//                 <p>You have access to a diverse selection of grocery sellers,
//                     enabling you to either purchase your preferred Fresh Farm Produce.</p>
//             </div>
//       </div>
//       <div>
//             <img src="/icons/fruit.svg" alt="harvesta" />
//             <h2>Top Rated Vendors Around You</h2>
//             <div>
//                 <p>You have access to a diverse selection of grocery sellers,
//                     enabling you to either purchase your preferred Fresh Farm Produce.</p>
//             </div>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default ChooseUs
import React from 'react';

const ChooseUs = () => {
  return (
    <div className='bg-harvestaYellow flex flex-col items-center py-8'>
      <h1 className='text-3xl font-bold mb-8'>Why Choose Us</h1>
      <div className='flex flex-row justify-center gap-8'>
        <div className='flex flex-col items-center max-w-xs text-center'>
          <img src="/icons/fruit.png" alt="harvesta" className='mb-4'  width={'180px'}/>
          <h2 className='text-xl font-semibold mb-2'>Top Rated Vendors Around You</h2>
          <p>You have access to a diverse selection of grocery sellers, enabling you to either purchase your preferred Fresh Farm Produce.</p>
        </div>
        <div className='flex flex-col items-center max-w-xs text-center'>
          <img src="/icons/rider.png" alt="harvesta" className='mb-4'  width={'180px'}/>
          <h2 className='text-xl font-semibold mb-2'>Super Fast Delivery</h2>
          <p>Order or send anything in your city and receive it in minutes. Trust us when we say we are 10X Faster.</p>
        </div>
        <div className='flex flex-col items-center max-w-xs text-center'>
          <img src="/icons/custom.png" alt="harvesta" className='mb-4'  width={'180px'}/>
          <h2 className='text-xl font-semibold mb-2'>Super Fresh From The Farm</h2>
          <p>Explore the full range of Fresh-Farm Produce you need! Whether it's vegetables, fruits, grains, nuts, or tubers, and have it delivered to your doorstep.</p>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
