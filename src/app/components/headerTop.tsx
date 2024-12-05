import Link from 'next/link'
import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'


const headerTop = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
<div className="container mx-auto  items-center py-4">
  <div className="flex justify-between items-center">
    <div className="hidden lg:flex gap-2">
      <div  className="header_top__icon_wrapper"> 
     <Link target="_blank" href={"/"}> <BsFacebook className='text-2xl hover:text-accent'/>
     </Link>
      </div>
      <div className="header_top__icon_wrapper">
        <Link target="_blank" href={"https://github.com/ibadwaseem"}> <FaGithub className='text-2xl hover:text-accent'/>
      </Link>
      </div>
      <div className="header_top__icon_wrapper">
      <Link target="_blank" href={"https://www.linkedin.com/in/syed-muhammad-ibad-56a28a293/"}> <FaLinkedin className='text-2xl hover:text-accent'/>
      </Link>
      </div>
      <div className="header_top__icon_wrapper">
       <Link target="_blank" href={"https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"}> <SiGmail className='text-2xl hover:text-accent'/>
      </Link>
      </div>
     
    </div>
 <div className="text-gray-500 text-[12px]">
  <b>Free Shipping</b> on this Week order over - $20
</div> 


 
<div className="flex gap-4">
<select className='text-gray-500 text-[12px] w-[70px]'
name='curreny'
id='currency'>

<option value="PKR">PKR</option>
<option value="INR">INR</option>
<option value="Eur %">EUR </option>
<option value="USD $">USD $</option>

</select>
<select className='text-gray-500 text-[12px] w-[80px]'
name="language" id="language">

<option value="English">English</option>
<option value="Urdu">Urdu</option>
<option value="Frech">French</option>
<option value="Arabic">Arabic</option>
<option value="Hindhi">Hindhi</option>

</select>













</div> 






  </div>
</div>




    </div>
  )
}

export default headerTop