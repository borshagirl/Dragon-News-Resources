
import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
    return (
        <div>
          <div className='text-center py-8 space-y-3'>
              <Image src={logo} width={300} height={300} alt='Logo' className='mx-auto'></Image>
               <p className='text-gray-600'>Journalism Without Fear or Favour</p>
               <p className='text-gray-800'>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
          </div>
            
        </div>
    );
};

export default Header;