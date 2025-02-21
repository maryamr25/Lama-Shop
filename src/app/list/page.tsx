import HomeProductList from '@/components/home/productlist'
import Filter from '@/components/list-page/filter'
import { wixClientServer } from '@/lib/wixClientServer'
import Image from 'next/image'
import React, { Suspense } from 'react'

const ListPage = async ({ searchParams } : { searchParams : any} ) => {
 
  const wixClient = await wixClientServer();

  const categ = await wixClient.collections.getCollectionBySlug(searchParams.cat || "all-products")
  
  console.log(categ)
  return (
    <div className='px-4 text-black md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
       {/* campaing */}
       <div className='hidden bg-pink-50 px-4 sm:flex justify-between h-64 '>
       <div className='w-2/3 flex flex-col items-center justify-center gap-8'>
       <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <button className="rounded-3xl bg-red text-white w-max py-3 px-5 text-sm">
            Buy Now
          </button>
       </div>
       <div className='relative w-1/3'>
        <Image src='/woman.png' alt='' fill className='object-contain'/>
       </div>


       </div>

       {/* filter component */}
       <Filter/>

       {/* Product list */}
       <h1 className="mt-12 text-xl font-semibold">{categ?.collection?.name} For You</h1>
       <Suspense fallback={"loading..."}>
        <HomeProductList categoryId={categ.collection?._id || "00000000-000000-000000-000000000001"}
        searchParams={searchParams}/>
       </Suspense>
       </div>
  )
}

export default ListPage