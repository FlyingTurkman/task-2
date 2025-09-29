'use client'

import { productsPageSearchParamsType } from "@/app/products/page"
import { productType } from "@/types"
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"



export type productsPageContextType = {
    searchParams?: productsPageSearchParamsType,
    products: productType[],
    setProducts: Dispatch<SetStateAction<productType[]>>
}



export const ProductsPageContext = createContext<productsPageContextType>({
    searchParams: undefined,
    products: [],
    setProducts: () => {}
})



export function useProductsContext() {

    const ctx = useContext(ProductsPageContext)

    if (!ctx) {
        throw new Error('useProductsContext must be within ProductsContextProvider')
    }

    return ctx
}



export default function ProductsPageContextProvider({
    children,
    searchParams,
    initialProducts,
    categories,
    minPrice,
    maxPrice
}: {
    children: ReactNode,
    searchParams?: productsPageSearchParamsType,
    initialProducts: productType[],
    categories: string[],
    minPrice: number,
    maxPrice: number
}) {

    const [products, setProducts] = useState<productType[]>([])

    const value: productsPageContextType = {
        searchParams,
        products,
        setProducts
    }

    return (
        <ProductsPageContext.Provider
        value={value}
        >
            {children}
        </ProductsPageContext.Provider>
    )
}