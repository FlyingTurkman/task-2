'use client'

import { useProductsContext } from "@/context/ProductsPageContextProvider"












export default function ProductsSidebar() {
    
    const { searchParams } = useProductsContext()

    return (
        <div
        className="flex flex-col gap-4 max-w-xs w-full p-4 bg-secondary text-secondary-foreground"
        >

        </div>
    )
}