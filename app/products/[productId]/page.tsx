import { apiBasePath } from "@/lib/src/constants"
import { productType } from "@/types"
import { notFound } from "next/navigation"
import ProductPageClient from "./page.client"
import { Metadata, ResolvingMetadata } from "next"







export const revalidate = 60


type propsType = {
    params: Promise<{ productId: string }>
}


export async function generateMetadata({ params }: propsType, parent: ResolvingMetadata): Promise<Metadata> {

    try {
        const { productId } = await params

        const res = await fetch(`${apiBasePath}/products/${productId}`)

        const response: productType | undefined = await res.json()

        if (!response) {
            return {
                title: 'Task 2',
                description: 'Developed by FlyingTurkman'
            }
        }

        return {
            title: response.title,
            description: response.description,
            keywords: response.category,
            category: response.category,
            twitter: {
                images: response.image,
                title: response.title,
                description: response.description,
                site: `http://localhost:3000/products/${response.id}`
            },
            openGraph: {
                title: response.title,
                description: response.description,
                images: response.image,
                siteName: 'Task 2',
            }
        }
    } catch (error) {
        console.log('Error: ', error)

        return {
            title: 'Task 2',
            description: 'Developed by FlyingTurkman'
        }
    }
}



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