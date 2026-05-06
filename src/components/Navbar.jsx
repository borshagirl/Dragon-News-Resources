
"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from "@/assets/user.png";
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;
    console.log(user, "user")

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

          {isPending ? <span className="loading loading-spinner text-neutral"></span> : user ? (
             <div className='flex justify-between items-center gap-2'>
            <h2>Hello, {user.name}</h2>
            <Avatar>
              <Image src={user?.image || userAvatar} alt='User Avatar' width={60} height={60}></Image>
            </Avatar>

             <button className='btn bg-red-500 text-white py-5 px-5' onClick={ async () => await authClient.signOut()}>Logout</button>
           </div>
          ) : (
             <button className='btn bg-[#403F3F] text-white py-5 px-7'>
                <Link href={"/login"}>LogIn</Link>
              </button>
          )
        }
        </div>
    );
};

export default Navbar;