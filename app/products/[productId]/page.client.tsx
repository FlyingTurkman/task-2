'use client'

import ProductStars from "@/components/products/ProductStars"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import H1 from "@/components/ui/h1"
import { Label } from "@/components/ui/label"
import { P } from "@/components/ui/p"
import { Separator } from "@/components/ui/separator"
import { imageLoader } from "@/lib/src/imageLoader"
import { productType } from "@/types"
import Image from "next/image"
import { useTranslation } from "react-i18next"













export default function ProductPageClient({
    product
}: {
    product: productType
}) {

    const { t } = useTranslation()

    return (
        <div
        className="container mx-auto my-10 space-y-6"
        >
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink
                        href="/"
                        >
                            {t('Main Page')}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbLink
                        href="/products"
                        >
                            {t('Products')}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbLink
                        href={`/products/${product.id}`}
                        >
                            {product.title}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            >
                <div
                className="col-span-1 sm:col-span-1 lg:col-span-2 aspect-square p-2"
                >
                    <Image
                    width={1000}
                    height={1000}
                    alt={`${product.title} image`}
                    loader={imageLoader}
                    src={product.image}
                    className="w-full aspect-square rounded-xl"
                    />
                </div>
                <div
                className="col-span-1 sm:col-span-1 lg:col-span-2 p-2 space-y-4"
                >
                    <H1
                    className="!text-start"
                    >
                        {product.title}
                    </H1>
                    <div
                    className="flex flex-row items-center gap-2"
                    >
                        <ProductStars
                        stars={product.rating.rate}
                        />
                        <Label>
                            ({product.rating.count})
                        </Label>
                    </div>
                    <Separator/>
                    <P>
                        {product.description}
                    </P>
                </div>
            </div>
        </div>
    )
}