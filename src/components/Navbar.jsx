
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from "@/assets/user.png";
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto mt-6'>
            <div></div>
            
               <ul className='flex justify-between items-center gap-4 ml-35 text-gray-600'>
                <li>
                    <NavLink href={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink href={"/about"} className={'text-gray-900'}>About</NavLink>
                </li>
                <li>
                    <NavLink href={"/career"}>career</NavLink>
                </li>
             </ul>

           <div className='flex justify-between items-center gap-2'>
              <Image src={userAvatar} alt='User Avatar width={60} height={60}'></Image>
              <button className='btn bg-[#403F3F] text-white py-5 px-7'>
                <Link href={"/login"}>LogIn</Link>
              </button>
           </div>
        </div>
    );
};

export default Navbar;