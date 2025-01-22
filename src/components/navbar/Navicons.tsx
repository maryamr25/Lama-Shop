'use client'

import Image from "next/image"

import {  useRouter } from "next/navigation"
import Cookies from "js-cookie";
import { useEffect, useState } from "react"
import CartModal from "./CartModal"
import { useWixClient } from "@/hooks/useWixClient"
import { useCartStore } from "@/hooks/useCartStore";
// import { useWixClient } from "@/hooks/useWixClient"

const Navicons = () => {
const [isProfileOpen, setIsProfileOpen] = useState(false)
const [isCartOpen, setIsCartOpen] = useState(false)
const [isLoading, setIsLoading] = useState(false);

const router = useRouter()

// const pathName = usePathname();

  const wixClient = useWixClient();
  const isLoggedIn = wixClient.auth.loggedIn();

// tempare
// const  isLoggedIn = false
const handleProfile = () => {
 if(!isLoggedIn) {
   router.push('/login')
 }  else {
 setIsProfileOpen((prev) => !prev)
}
};

// AUTH WITH WIX_MANAGE AUTH

// const wixClient = useWixClient();
// const login = async () => {
//     const loginRequestData = wixClient.auth.generateOAuthData(
//       "http://localhost:3000"
//     );

//     console.log(loginRequestData);

//     localStorage.setItem("oAuthRedirectData", JSON.stringify(loginRequestData));
//     const { authUrl } = await wixClient.auth.getAuthUrl(loginRequestData);
//     window.location.href = authUrl;
//   };


const handleLogout = async () => {
  setIsLoading(true);
  Cookies.remove("refreshToken");
  const { logoutUrl } = await wixClient.auth.logout(window.location.href);
  setIsLoading(false);
  setIsProfileOpen(false);
  router.push(logoutUrl);
};

const { cart, counter, getCart } = useCartStore();

  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);



  return (
    <div className="flex items-center gap-4 xl:gap-6 ">

        <Image src='/profile.png' alt='profile'
         width={22} height={22}
          onClick={handleProfile}
          // onClick={login}
           className="cursor-pointer"/>
        {isProfileOpen && (
        <div className="absolute p-2 bg-white rounded-md top-14 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 ">
            {/* <Link href='/'> Profile </Link> */}
            <div className=" cursor-pointer" onClick={handleLogout}>
            {isLoading ? "Logging out" : "Logout"}
               </div>
            </div>
            )}

        {/* <Image src='/bell.png' alt='bell' width={22} height={22} className="cursor-pointer"/> */}
        
        <div className="relative cursor-pointer" onClick={() => setIsCartOpen((prev) => !prev)}>
        <Image src='/cart.png' alt='cart' width={22} height={22} 
        
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-red rounded-full text-white text-sm flex items-center  justify-center">
          {counter}</div>
        </div>
        {isCartOpen && <CartModal/>}
        

        
    </div>
  )
}

export default Navicons