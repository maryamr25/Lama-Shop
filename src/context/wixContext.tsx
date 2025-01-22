'use client'

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products,collections } from "@wix/stores";
import { currentCart } from "@wix/ecom";
import Cookies from 'js-cookie'
import { createContext, ReactNode } from "react";
import { redirects } from '@wix/redirects';



const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}") 
const wixClient = createClient({
    modules: {
      products,
      collections,
      currentCart,
      redirects
    },
    auth: OAuthStrategy({
      clientId: '2936b442-7a59-4025-ad5a-542a9f03b247',
    //    process.env.WIX_CLIENT_ID!,
      tokens: {
        refreshToken,
         accessToken: {value:"", expiresAt: 0}
      },
    }),
  });

  export type WixClient = typeof wixClient

  export const WixClientContext = createContext<WixClient>(wixClient)

  export const WixClientContextProvider = ({
    children,
  }: {
    children: ReactNode;
  }) => {
    return <WixClientContext.Provider value={wixClient}>
        {children}
        </WixClientContext.Provider>
  }
  