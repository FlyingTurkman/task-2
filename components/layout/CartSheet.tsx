'use client'

import { FaShoppingCart } from "react-icons/fa"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { useTranslation } from "react-i18next"
import { Separator } from "../ui/separator"
import { useSiteContext } from "@/context/SiteContextProvider"
import ProductSheetCard from "../products/ProductSheetCard"











export default function CartSheet() {

    const { cart } = useSiteContext()

    const { t } = useTranslation()

    return (
        <Sheet>
            <SheetTrigger
            aria-label={t('Cart Button')}
            >
                <div
                className="relative"
                >
                    <FaShoppingCart className="text-xl"/>
                    {cart.length > 0 && (
                        <div
                        className="absolute -bottom-2 -left-2 rounded-full w-4 h-4 bg-destructive text-xs"
                        >
                            {cart.length <= 9 ? cart.length : '9+'}
                        </div>
                    )}
                </div>
            </SheetTrigger>
            <SheetContent
            className="overflow-auto"
            >
                <SheetHeader>
                    <SheetTitle>
                        {t('Shopping Cart')}
                    </SheetTitle>
                </SheetHeader>
                <Separator/>
                <div
                className="flex flex-col gap-4 p-4"
                >
                    {cart.map((product) => {

                        return (
                            <ProductSheetCard
                            key={product.id}
                            product={product}
                            />
                        )
                    })}
                </div>
            </SheetContent>
        </Sheet>
    )
}