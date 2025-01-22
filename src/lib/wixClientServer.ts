
import { OAuthStrategy, createClient } from "@wix/sdk";
import { collections, products } from "@wix/stores";

import { cookies } from "next/headers";


export const wixClientServer = async () => {
  let refreshToken;

  try {
    const cookieStore = await cookies();
    refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}");
  } catch (e) {}

  const wixClient = createClient({
    modules: {
      products,
      collections,
    
    
    },
    auth: OAuthStrategy({
      clientId: "2936b442-7a59-4025-ad5a-542a9f03b247",
      // process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      tokens: {
        refreshToken,
        accessToken: { value: "", expiresAt: 0 },
      },
    }),
  });

  return wixClient;
};