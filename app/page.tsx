import { apiBasePath } from "@/lib/src/constants";
import { productType } from "@/types";
import MainPageClient from "./page.client";



export const revalidate = 60


export default async function Home() {
  
  const featuredProducts = await getFeaturedProducts()

  return (
    <MainPageClient
    featuredProducts={featuredProducts}
    />
  );
}



async function getFeaturedProducts(): Promise<productType[]> {

  try {
    
    const res = await fetch(`${apiBasePath}/products`, {
      next: {
        revalidate: 60
      }
    })

    const response = await res.json()

    const products: productType[] = JSON.parse(JSON.stringify(response))

    // return with first 4 products
    return products.slice(0, 4)

  } catch (error) {
    console.log('Error: ', error)

    return []
  }
}
