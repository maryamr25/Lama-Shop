// 'use client'

import CategoryList from "@/components/home/categorylist";
import HomeProductList from "@/components/home/productlist";
import HomeSlider from "@/components/home/Silder";

// import { WixClientContext } from "@/context/wixContext";
// import { usewixClient } from "@/hooks/useWixClient";
// import { wixClientServer } from "@/lib/wixClientServer";
import { Suspense } from "react";
// import { useContext, useEffect } from "react";


const Home = async () => {
//   const wixClient = usewixClient()

//   useEffect(() => {

 
// const getProducts = async () => {
//   // const res = await wixClient.products.queryProducts().find();
//   // console.log("product data",res);
//   try {
//     const res = await wixClient.products.queryProducts().find();
//     console.log("product data", res);
//   } catch (error) {
//     console.error("Error fetching products:", error); // Log the error
//   }

// }
// getProducts();
// },[wixClient])




  return (
    <>
    <HomeSlider/>

    <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className="text-2xl">Featured Products</h1>
      <Suspense fallback={"Loading"}>
    <HomeProductList categoryId={'e0706615-fb6d-4aee-5b02-ae64e98a9505'} limit={4}/>
    </Suspense>
    </div>

    <div className="mt-24 ">
      <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Categories</h1>
      <Suspense fallback={"Loading"}>
         <CategoryList/>
         </Suspense>
    </div>

    <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className="text-2xl">New Products</h1>
      <Suspense fallback={"Loading"}>
    <HomeProductList categoryId={'e0706615-fb6d-4aee-5b02-ae64e98a9505'} limit={4}/>
    </Suspense>
    </div>
    </>
  );
}

export default Home