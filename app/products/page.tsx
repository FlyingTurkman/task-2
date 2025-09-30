import { apiBasePath } from "@/lib/src/constants";
import { productType } from "@/types";
import ProductsPageClient from "./page.client";
import ProductsPageContextProvider from "@/context/ProductsPageContextProvider";




export const revalidate = 60



export type productsPageSearchParamsType = {
    category?: string,
    minPrice?: string,
    maxPrice?: string,
    priceOrder?: string
}


export default async function Page({
    searchParams: initialSearchParams
}: {
    searchParams: Promise<productsPageSearchParamsType>
}) {

    const searchParams = await initialSearchParams

    const products = await getProducts()

    const categories = getCategories(products) // need this at filter sidebar

    const { minPrice, maxPrice } = getMinAndMaxPrice(products) // need this at filter sidebar

    return (
        <ProductsPageContextProvider
        initialProducts={products}
        searchParams={searchParams}
        categories={categories}
        minPrice={minPrice}
        maxPrice={maxPrice}
        >
            <ProductsPageClient/>
        </ProductsPageContextProvider>
    )
}

async function getProducts(): Promise<productType[]> {

    try {
        
        const res = await fetch(`${apiBasePath}/products`, {
            next: {
                revalidate: 0
            }
        })

        if (!res.ok) {
            return []
        }

        const response = await res.json()

        return response

    } catch (error) {
        console.log('Error: ', error)

        return []
    }
}

function getCategories(products: productType[]): string[] {

    const categories: string[] = []

    for (const product of products) {

        if (!categories.includes(product.category)) {
            categories.push(product.category)
        }
    }

    return categories
}


type minAndMaxPriceType = {
    minPrice: number,
    maxPrice: number
}

function getMinAndMaxPrice(products: productType[]): minAndMaxPriceType  {

    if (products.length < 1) {
        return {
            minPrice: 0,
            maxPrice: 0
        }
    }

    const sortedProducts: productType[] = products.sort((a, b) => a.price - b.price)

    const minPrice = sortedProducts[0].price

    const maxPrice = sortedProducts[sortedProducts.length - 1].price

    return {
        minPrice,
        maxPrice
    }

}