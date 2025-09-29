'use client'

import { cartProductType } from "@/types"
import { Card, CardContent } from "../ui/card"
import Image from "next/image"
import { imageLoader } from "@/lib/src/imageLoader"
import { Label } from "../ui/label"
import { Button } from "../ui/button"
import { IoRemove, IoAdd, IoTrashBin } from 'react-icons/io5'
import { useSiteContext } from "@/context/SiteContextProvider"














export default function ProductSheetCard({
    product
}: {
    product: cartProductType
}) {

    const { cart, setCart } = useSiteContext()

    return (
        <Card>
            <CardContent>
                <div
                className="flex flex-row items-center gap-2"
                >
                    <div
                    className="w-16 h-16 aspect-square shrink-0"
                    >
                        <Image
                        width={64}
                        height={64}
                        alt={`${product.title} cart image`}
                        src={product.image}
                        loader={imageLoader}
                        className="w-full aspect-square rounded-md"
                        />
                    </div>
                    <div
                    className="flex flex-col gap-2"
                    >
                        <Label>
                            <b>
                                {product.title}
                            </b>
                        </Label>
                        <Label>
                            {product.price * product.count} $
                        </Label>
                        <div
                        className="flex flex-row items-center gap-4"
                        >
                            <Button
                            variant={product.count == 1 ? 'destructive' : 'outline'}
                            size={'icon'}
                            className="rounded-full w-6 h-6"
                            onClick={() => {
                                if (product.count == 1) {
                                    removeProductFromBasket(product.id)
                                } else {
                                    minusFunction(product.id)
                                }
                            }}
                            >
                                {product.count == 1 ? (
                                    <IoTrashBin/>
                                ): (
                                    <IoRemove/>
                                )}
                            </Button>
                            <Label
                            className="text-xl"
                            >
                                {product.count}
                            </Label>
                            <Button
                            variant={'outline'}
                            size={'icon'}
                            className="rounded-full w-6 h-6"
                            onClick={() => {
                                plusCount(product.id)
                            }}
                            >
                                <IoAdd/>
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )

    function plusCount(productId: number) {
        
        const newCart: cartProductType[] = cart.map((product) => {

            if (product.id == productId) {

                const { count, ...rest } = product
                return {
                    ...rest,
                    count: count + 1
                }
            } else {
                return product
            }
        })

        setCart(newCart)

        localStorage.setItem('cart', JSON.stringify(newCart))
    }

    function minusFunction(productId: number) {
        const newCart: cartProductType[] = cart.map((product) => {

            if (product.id == productId) {

                const { count, ...rest } = product
                return {
                    ...rest,
                    count: count - 1
                }
            } else {
                return product
            }
        })

        setCart(newCart)

        localStorage.setItem('cart', JSON.stringify(newCart))
    }

    function removeProductFromBasket(productId: number) {

        const newCart: cartProductType[] = cart.filter((c) => c.id != productId)

        setCart(newCart)

        localStorage.setItem('cart', JSON.stringify(newCart))

    }
}