
import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({categories, activeId}) => {
    return (
        <div>
          <h2 className='font-semibold text-xl'>All Categories</h2>
            <ul className="flex flex-col gap-4 mt-5">
                {
                    categories.news_category?.map((category) => {
                    return <li key={category.category_id} className={`
                        ${activeId === category.category_id && "bg-[#403F3F] text-white"} 
                         rounded-md font-semibold text-center text-md`}>
                         <Link href={`/category/${category.category_id}`} className='block p-2'>{category.category_name}</Link>
                         </li>
                  })
                }
         </ul>
     </div>
    );
};

export default LeftSideBar;