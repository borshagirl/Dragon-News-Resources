
import LeftSideBar from '@/components/homepage/news/LeftSideBar';
import NewsCards from '@/components/homepage/news/NewsCards';
import RightSideBar from '@/components/homepage/news/RightSideBar';
import { getCategories, getNewsByCategoriesId } from '@/lib/data';
import React from 'react';



const NewsCategoryPage = async ({params}) => {
    const {id} = await params;
    console.log(id, "paramsRes");

     const categories = await getCategories();
     const news = await getNewsByCategoriesId(id);
    return (
          <div>
          <div className="grid grid-cols-12 gap-4 container mx-auto mt-12 mb-10">
           <div className="col-span-3">
            <LeftSideBar categories={categories} activeId={id}></LeftSideBar>
           </div>
            <div className="col-span-6">
              <h2 className="text-xl font-semibold">Dragon News Home</h2>
               <div className="mt-5 space-y-4">
                 
                  {news.length > 0 ? 
                  news.map((n) => {
                    return <NewsCards key={n._id} news={n}>{n.title}</NewsCards>
                  }) : <h2 className='font-semibold text-2xl text-center my-50 text-red-500'>No News Found</h2>}
               </div>
            </div>
            <div className="col-span-3">
                <RightSideBar></RightSideBar>
            </div>
          </div>
     </div>
    );
};

export default NewsCategoryPage;