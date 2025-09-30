'use client'

import { productType } from "@/types"
import ProductsSidebar from "@/components/products/ProductsSidebar"
import { useProductsContext } from "@/context/ProductsPageContextProvider"
import { useEffect, useState } from "react"
import ProductCard from "@/components/products/ProductCard"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { FaFilter } from "react-icons/fa6"
import { useTranslation } from "react-i18next"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { usePathname, useSearchParams } from "next/navigation"














export default function ProductsPageClient() {

    const pathname = usePathname()

    const clientSearchParams = useSearchParams()

    const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false)

    const { t } = useTranslation()

    const { products: initialProducts, searchParams } = useProductsContext()

    const [products, setProducts] = useState<productType[]>(initialProducts)

    useEffect(() => {
        let filteredProducts: productType[] = [...initialProducts]

        if (searchParams?.category) {
            filteredProducts = filteredProducts.filter((p) => p.category == searchParams.category)
        }

        if (searchParams?.minPrice) {
            const minPrice = parseFloat(searchParams.minPrice) 

            if (!isNaN(minPrice)) {
                filteredProducts = filteredProducts.filter((p) => p.price >= minPrice)
            }
        }

        if (searchParams?.maxPrice) {
            const maxPrice = parseFloat(searchParams.maxPrice) 

            if (!isNaN(maxPrice)) {
                filteredProducts = filteredProducts.filter((p) => p.price <= maxPrice)
            }
        }

        if (searchParams?.priceOrder) {
            const priceOrder = searchParams.priceOrder

            if (priceOrder == 'asc' || priceOrder == 'desc') {
                filteredProducts = filteredProducts.sort((a, b) => priceOrder == 'asc' ? a.price - b.price : b.price - a.price)
            }
        }

        setProducts(filteredProducts)

    }, [searchParams, initialProducts])

    useEffect(() => {
        setIsSheetOpen(false)
    }, [pathname, clientSearchParams])
    return (
        <div
        className="flex flex-col lg:flex-row items-start gap-4 container mx-auto"
        >
            <div
            className="hidden lg:block"
            >
                <ProductsSidebar/>
            </div>
            <div
            className="block lg:hidden mt-4 mx-4"
            >
                <Sheet
                open={isSheetOpen}
                onOpenChange={setIsSheetOpen}
                >
                    <SheetTrigger
                    asChild
                    >
                        <Button
                        variant={'outline'}
                        >
                            <FaFilter/>
                            {t('Filter')}
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                    side="left"
                    >
                        <SheetHeader>
                            <SheetTitle>
                                {t('Filter')}
                            </SheetTitle>
                        </SheetHeader>
                        <Separator/>
                        <ProductsSidebar/>
                    </SheetContent>
                </Sheet>
            </div>
            <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            >
                {products.map((product) => {

                    return (
                        <div
                        key={product.id}
                        className="p-4"
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