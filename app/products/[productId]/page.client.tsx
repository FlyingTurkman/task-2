'use client'

import ProductStars from "@/components/products/ProductStars"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import H1 from "@/components/ui/h1"
import { H2 } from "@/components/ui/h2"
import { Label } from "@/components/ui/label"
import { P } from "@/components/ui/p"
import { Separator } from "@/components/ui/separator"
import { useSiteContext } from "@/context/SiteContextProvider"
import { addToBasket } from "@/lib/src/addToBasket"
import { imageLoader } from "@/lib/src/imageLoader"
import { cartProductType, productType } from "@/types"
import Image from "next/image"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { FaShoppingCart } from "react-icons/fa"
import { IoAdd, IoRemove } from "react-icons/io5"
import { toast } from "sonner"













export default function ProductPageClient({
    product
}: {
    product: productType
}) {

    const { setCart } = useSiteContext()

    const [count, setCount] = useState<number>(1)

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
                        href={`/products?category=${product.category}`}
                        >
                            {product.category}
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
                    className="w-full aspect-square rounded-xl object-contain"
                    loading="lazy"
                    fetchPriority="high"
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
                    <Separator/>
                    <H2>
                        {(product.price * count).toFixed(2)} $
                    </H2>
                    <div
                    className="flex flex-row items-center gap-4"
                    >
                        <Button
                        variant={'outline'}
                        size={'icon'}
                        className="rounded-full"
                        disabled={count == 1}
                        onClick={() => {
                            if (count > 1) {
                                setCount((prev) => prev - 1)
                            }
                        }}
                        aria-label={t('Minus Button')}
                        >
                            <IoRemove/>
                        </Button>
                        <Label
                        className="text-2xl"
                        >
                            {count}
                        </Label>
                        <Button
                        variant={'outline'}
                        size={'icon'}
                        className="rounded-full"
                        onClick={() => {
                            setCount((prev) => prev + 1)
                        }}
                        aria-label={t('Minus Button')}
                        >
                            <IoAdd/>
                        </Button>
                    </div>
                    <Separator/>
                    <Button
                    onClick={() => {

                        const cartProduct: cartProductType = {
                            ...product,
                            count
                        }

                        const response = addToBasket(cartProduct)

                        setCart(response)

                        toast.success(t('Product succesfully added to cart.'))
                    }}
                    >
                        <FaShoppingCart/>
                        Add To Basket
                    </Button>
                </div>
            </div>
        </div>
    )
}