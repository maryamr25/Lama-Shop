import Add from "@/components/products/add"
import CustomizeProducts from "@/components/products/pro-customize"
import ProductsImages from "@/components/products/pro-images"
import { wixClientServer } from "@/lib/wixClientServer"
import { notFound } from "next/navigation"
// import type { Metadata, ResolvingMetadata } from 'next'
 
// type Props = {
//   params: Promise<{ id: string }>
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>
// }

// const SinglePage = async ({params} : {params: {slug : any}}) => {
//  console.log("params....",params.slug)

export default async function SinglePage(props: {
  params: Promise<{ slug: any }>;
}) {

// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
   
const params = await props.params;
 const wixClient = await wixClientServer()
      
   const products = await wixClient.products.queryProducts()
      .eq("slug", params.slug).find();
      // console.log("data" , res)


      if(!products.items[0]){
        return notFound()
      }
      const product = products.items[0];
      console.log(product.productOptions)


  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16"> 
      {/* image */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
         <ProductsImages items={product.media?.items}/>
      </div>

      {/* texts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-500">
          {product.description}
          </p>
        
          <div className="h-[2px] bg-gray-100" />
          {product.price?.price === product.price?.discountedPrice ? (
             <h2 className="font-medium text-2xl">${product.price?.price}</h2>
          ) : (
        <div className="flex items-center gap-4">

          <h3 className="text-xl text-gary line-through">${product.price?.price}</h3>
          <h2 className="text-2xl font-medium">${product.price?.discountedPrice}</h2>
          </div>
          )}
          

        <div className="h-[2px] bg-gray-100"></div>

        {product.variants && product.productOptions ? (
         <CustomizeProducts productId={product._id!} variants={product.variants} productOptions={product.productOptions}/>
        ) : (

          <Add productId={product._id!} variantId="00000000-0000-0000-0000-000000000000" stockNumber={product.stock?.quantity || 0}/>
        )}

        
       
        <div className="h-[2px] bg-gray-100"/>
       
       {product.additionalInfoSections?.map((section) => (

        <div className="text-sm" key={section.title}>
          <h4 className="font-medium mb-4">{section.title}</h4>
          <p>
            {section.description}
            </p>
        </div>
        ))}

       

        </div>
    </div>
  )
}

// export default SinglePage