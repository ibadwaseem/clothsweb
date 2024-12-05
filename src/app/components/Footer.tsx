import Link from 'next/link'
import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'

const Footer = () => {
  return (
    <><div className='bg-blackish text-gray-500 text-center py-4 pb-10 md:pb-1'>Copyright @ logo<br />All Rights Reserved 2024.
    <div className="hidden lg:flex gap-2">
      <div className="header_top__icon_wrapper">
        <Link target="_blank" href={"/"}> <BsFacebook className='text-2xl hover:text-accent' />
        </Link>
      </div>
      <div className="header_top__icon_wrapper">
        <Link target="_blank" href={"https://github.com/ibadwaseem"}> <FaGithub className='text-2xl hover:text-accent' />
        </Link>
      </div>
      <div className="header_top__icon_wrapper">
        <Link target="_blank" href={"https://www.linkedin.com/in/syed-muhammad-ibad-56a28a293/"}> <FaLinkedin className='text-2xl hover:text-accent' />
        </Link>
      </div>
      <div className="header_top__icon_wrapper">
        <Link target="_blank" href={"https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"}> <SiGmail className='text-2xl hover:text-accent' />
        </Link>
      </div>

    </div>
    <div> </div>
    </div></>
  )
}

export default Footer