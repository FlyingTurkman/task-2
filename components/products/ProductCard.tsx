'use client'

import { productType } from "@/types"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import Link from "next/link"
import { buttonVariants } from "../ui/button"
import { Separator } from "../ui/separator"
import Image from "next/image"
import { imageLoader } from "@/lib/src/imageLoader"
import { Label } from "../ui/label"
import ProductStars from "./ProductStars"
import { useTranslation } from "react-i18next"













export default function ProductCard({
    product
}: {
    product: productType
}) {

    const { t } = useTranslation()

    return (
        <Card
        className="flex flex-col justify-between h-full"
        >
            <CardHeader>
                <CardTitle>
                    <Link
                    href={`/products${product.id}`}
                    className="text-primary hover:underline"
                    >
                        {product.title}
                    </Link>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Image
                width={256}
                height={256}
                loader={imageLoader}
                alt={`${product.title} image`}
                className="w-full rounded-md aspect-square"
                src={product.image}
                />
            </CardContent>
            <CardContent>
                <div
                className="flex flex-col gap-2"
                >
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
                    <CardDescription
                    className="line-clamp-3"
                    >
                        {product.description}
                    </CardDescription>
                </div>
            </CardContent>
            <CardFooter>
                <Link
                href={`/products/${product.id}`}
                className={buttonVariants({ variant: 'default', className: 'w-full' })}
                >
                    {t('Go To Product')}
                </Link>
            </CardFooter>
        </Card>
    )
}