import React from 'react'
import Image from 'next/image';

const testimonial = () => {
  return (
    <div>
        <div className='container pt-16 pb-16 grid-cols-2  mx-auto  items-center py-4'>
         
            <div className="grid lg:grid-cols-2 gap-4"> {/**/}
                <div className="border border-gray-[300px , 1fr] rounded-2xl grid place-items-center p-3 lg:p-0">
                    <div className="text-center flex flex-col items-center gap-1">
                        <Image className ='rounded-full inline-block'
                        src="/profile.jpg"
                        width={250}
                        height={800} 
                        alt='dp'
                          />
                          <h2 className='text-gray-500 font-black text-[20px]'>Syed Muhammad Ibad</h2>
                          <p>Ceo & Founder Invision</p>
                            <p className='max-w-[200px] text-gray-500'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    </div>
                    {/* <Image className='inline-block py-2'
                    src="/bg1.jpg"
                    width={30}
                    height={30}
                    alt='qoutes'
                    /> */}
                  
                </div>
{/* cta-banner.jpg*/}
 <div className="bg-red-600 bg-[url(/bg1.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center">
    <div className='bg-[#ffffffab] main-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3' >
        <button className='bg-blackish text-white p-2 rounded-md '>
            25% DISCOUNT
        </button>
        <h2 className='font-extrabold text-2xl text-[#272727]'>
            Summer COllection
        </h2>
        <p className='text-gary-500 text-[20px]'>
            Starting @ $10 <b>Order Now</b>
        </p>
    </div>

</div> 



            </div>
        </div>
        
    </div>
  )
}

export default testimonial