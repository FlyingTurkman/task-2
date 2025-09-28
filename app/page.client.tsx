'use client'

import FeaturedProducts from "@/components/mainPage/FeaturedProducts"
import { productType } from "@/types"












export default function MainPageClient({
    featuredProducts
}: {
    featuredProducts: productType[]
}) {

    return (
        <div
        className="container mx-auto my-10"
        >
            <FeaturedProducts
            products={featuredProducts}
            />
        </div>
    )
}