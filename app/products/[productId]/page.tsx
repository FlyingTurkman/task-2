import { apiBasePath } from "@/lib/src/constants"
import { productType } from "@/types"
import { notFound } from "next/navigation"
import ProductPageClient from "./page.client"







export const revalidate = 60






export default async function Page({
    params: initialParams
}: {
    params: Promise<{ productId: string }>
}) {

    const params = await initialParams


    const product = await getProduct(params.productId)

    if (!product) {
        notFound()
    }

    return (
        <ProductPageClient
        product={product}
        />
    )
}

async function getProduct(productId: string): Promise<productType | null> {

    try {
        
        const res = await fetch(`${apiBasePath}/products/${productId}`)

        const response = await res.json()

        if (!response) {
            return null
        }

        return response

    } catch (error) {
        console.log('Error: ', error)

        return null
    }
}