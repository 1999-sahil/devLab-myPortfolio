"use client";

import { navigationLinks } from "@/constants";
import Logo from "../logo";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight, LocateFixed, Mail, Phone } from "lucide-react";
import SocialIcons from "./SocialIcons";
import FooterQuote from "./FooterQuote";

function Footer() {
  return (
    <div id="contact" className="w-full h-full bg-black p-6 flex items-center justify-center">
      <div className="bg-black rounded-md w-full h-full p-4 flex flex-col gap-6">
        {/** upper section */}
        <div className='flex items-center justify-between'>
          <Logo />
          <div className='md:flex hidden items-center md:gap-4'>
            {navigationLinks.map((link, index) => {
              return (
                <div key={index}>
                  <Link to={link.to} className="capitalize font-montserrat font-medium text-sm text-white hover:text-[#5FFB17]">
                    {link.title}
                  </Link>
                </div>
              )
            })}
          </div>
          <SocialIcons />
        </div>

        {/** mid section */}
        <div className='w-full flex flex-col md:flex-row mt-4 items-center'>
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <div className='flex items-center gap-4 w-full'>
              <Link to='' className='w-1/2 flex items-center justify-center gap-2 bg-[#5FFB17] text-black font-montserrat font-semibold text-sm rounded-sm px-2 py-1 hover:opacity-90'>
                My Work
                <ArrowUpRight className='bg-black text-[#5FFB17] p-1 rounded-full' />
              </Link>
              <Link to='' className='w-1/2 flex items-center justify-center gap-2 bg-black ring-1 ring-white text-white font-montserrat font-medium text-sm rounded-sm px-2 py-1.5 hover:bg-zinc-800'>
                <FaGithub size={15} />
                Github
              </Link>
            </div>

            <div className='flex flex-col gap-1'>
              <h2 className='flex items-center gap-1 font-lato text-zinc-300 text-xs md:text-sm'>
                <Mail className='text-[#5FFb17]' size={15} /> Email: <span className="font-openSans">sahilahmed466@gmail.com</span>
              </h2>
              <h2 className='flex items-center gap-1 font-lato text-zinc-300 text-xs md:text-sm'>
                <Phone className='text-[#5FFb17]' size={15} /> Phone: <span className='font-openSans'>+91 87440-91822</span>
              </h2>
              <h2 className='flex items-center gap-1 font-lato text-zinc-300 text-xs md:text-sm'>
                <LocateFixed className='text-[#5FFb17]' size={15} /> Address: <span className='font-openSans'>Uttam Nagar, West Delhi, Delhi - 110059, India</span>
              </h2>
            </div>
          </div>

          <div className='w-full md:w-1/2 flex items-center justify-center m-4 p-4'>
            <FooterQuote />
          </div>
        </div>

        {/** bottom section */}
        <div className='border-t pt-2 text-center md:text-start'>
          <h2 className='font-lato text-[10px] md:text-xs text-white'>@2024 Portfolio made by Sahil Ahmed. All Rights Reserved.</h2>
        </div>
      </div>
    </div>
  )
}

export default Footer