'use client'

import { productType } from "@/types"
import ProductCard from "../products/ProductCard"
import H1 from "../ui/h1"
import { useTranslation } from "react-i18next"
import { Separator } from "../ui/separator"













export default function FeaturedProducts({
    products
}: {
    products: productType[]
}) {

    const { t } = useTranslation()
    return (
        <div
        className="flex flex-col gap-4"
        >
            <H1>
                {t('Featured Products')}
            </H1>
            <Separator/>
            <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 direction-rtl"
            >
                {products.map((product) => {

                    return (
                        <div
                        key={product.id}
                        className=""
                        >
                            <ProductCard
                            product={product}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}