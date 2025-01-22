import React from 'react'
interface LabelProps {
    htmlFor: string;
    className?: string;
    children: React.ReactNode;
  }
  
  const CheckOut: React.FC<LabelProps> = ({ htmlFor, className, children }) => {


  return (
    <form  action="https://formspree.io/f/xpwqanag"
    method="POST" className=" body-font  relative">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">Shipping Address</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Enter your Shipping Details</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">

        {/* first name last name */}
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm ">First Name</label>
            <input type="text" id="name" name="name" placeholder='Enter your first name...' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm ">Last Name</label>
            <input type="text" id="name" name="name" placeholder='Enter your last name...' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>

      {/* email and phone number */}
        
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm ">Email</label>
            <input type="email" id="email" name="email" placeholder='Enter your email...' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="number" className="leading-7 text-sm ">Number</label>
            <input type="number" id="number" name="number" placeholder='Enter your phone no...' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
      
      {/* Address */}
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="address" className="leading-7 text-sm ">Address</label>
            <textarea id="address" name="address" placeholder='Enter your address...' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button type='submit' className="flex mx-auto text-white bg-red border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Done</button>
        </div>
        
           
      </div>
    </div>
  </div>
</form>
  )
}

export default CheckOut