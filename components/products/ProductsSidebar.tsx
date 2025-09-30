'use client'

import { useProductsContext } from "@/context/ProductsPageContextProvider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { useTranslation } from "react-i18next"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { SubmitHandler, useForm } from "react-hook-form"
//import { productsPageSearchParamsType } from "@/app/products/page"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Separator } from "../ui/separator"
import { useRouter } from "next/navigation"




export type productsPageSearchParamsType = {
    category?: string,
    minPrice?: string,
    maxPrice?: string,
    priceOrder?: string
}







export default function ProductsSidebar() {

    const router = useRouter()

    const { t } = useTranslation()
    
    const { 
        categories,
        searchParams,
        minPrice
    } = useProductsContext()

    const form = useForm<productsPageSearchParamsType>({
        defaultValues: searchParams
    })

    const {
        control,
        handleSubmit,
        setValue
    } = form
    

    const onSubmit: SubmitHandler<productsPageSearchParamsType> = ((data) => {
        filterProducts(data)
    })
    return (
        <div
        className="flex flex-col shirnk-0 gap-4 lg:min-w-xs lg:max-w-xs w-full p-4 border-r border-r-border max-h-[calc(100vh-68px)] h-[calc(100vh-68px)] overflow-auto sticky top-[68px]"
        >
            <Form
            {...form}
            >
                <form
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
                className="h-full"
                >
                    <Accordion
                    type="multiple"
                    defaultValue={["categories", "price", "order"]}
                    >
                        <AccordionItem
                        value="categories"
                        >
                            <AccordionTrigger
                            className="cursor-pointer"
                            >
                                {t('Categories')}
                            </AccordionTrigger>
                            <AccordionContent
                            className="p-2"
                            >
                                <FormField
                                name="category"
                                control={control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            {t('Product Category')}
                                        </FormLabel>
                                        <FormControl>
                                            <RadioGroup
                                            value={field.value}
                                            onValueChange={field.onChange}
                                            >
                                                {categories.map((category, i) => {

                                                    return (
                                                        <FormItem
                                                        key={i}
                                                        >
                                                            <FormControl>
                                                                <FormLabel
                                                                className="cursor-pointer"
                                                                htmlFor={category}
                                                                >
                                                                    <RadioGroupItem
                                                                    value={category}
                                                                    id={category}
                                                                    />
                                                                    {category}
                                                                </FormLabel>
                                                            </FormControl>
                                                        </FormItem>
                                                    )
                                                })}
                                            </RadioGroup>
                                        </FormControl>
                                    </FormItem>
                                )}
                                />
                                <Button
                                variant={'ghost'}
                                type="button"
                                className="w-full my-2"
                                onClick={() => {
                                    setValue('category', '')
                                }}
                                >
                                    {t('Clear category filter')}
                                </Button>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                        value="price"
                        >
                            <AccordionTrigger
                            className="cursor-pointer"
                            >
                                {t('Price')}
                            </AccordionTrigger>
                            <AccordionContent
                            className="p-2"
                            >
                                <FormField
                                name="minPrice"
                                control={control}
                                rules={{
                                    min: {
                                        value: minPrice,
                                        message: `${t('MinPriceError', { minPrice })}`
                                    },
                                    pattern: {
                                        value: new RegExp(/^\d+(\.\d+)?$/),
                                        message: `${t('Invalid price')}`
                                    }
                                }}
                                render={({ field }) => (

                                    <FormItem>
                                        <FormLabel>
                                            {t('Minimum Price')}
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                            {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                                />
                                <FormField
                                name="maxPrice"
                                control={control}
                                rules={{
                                    pattern: {
                                        value: new RegExp(/^\d+(\.\d+)?$/),
                                        message: `${t('Invalid price')}`
                                    }
                                }}
                                render={({ field }) => (

                                    <FormItem>
                                        <FormLabel>
                                            {t('Maximum Price')}
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                            {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                                />
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                        value="order"
                        >
                            <AccordionTrigger
                            className="cursor-pointer"
                            >
                                {t('Order')}
                            </AccordionTrigger>
                            <AccordionContent
                            className="p-2"
                            >
                                <FormField
                                name="priceOrder"
                                control={control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            {t('Order by Price')}
                                        </FormLabel>
                                        <Select
                                        value={field.value}
                                        onValueChange={field.onChange}
                                        >
                                            <FormControl>
                                                <SelectTrigger
                                                className="w-full"
                                                >
                                                    <SelectValue placeholder={t('Order by Price')}/>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem
                                                value="asc"
                                                >
                                                    {t('Ascending')}
                                                </SelectItem>
                                                <SelectItem
                                                value="desc"
                                                >
                                                    {t('Descending')}
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                                />
                                <Button
                                variant={'ghost'}
                                type="button"
                                className="w-full my-2"
                                onClick={() => {
                                    setValue('priceOrder', '')
                                }}
                                >
                                    {t('Clear order filter')}
                                </Button>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Separator
                    className="mb-2"
                    />
                    <Button
                    type="button"
                    onClick={() => {
                        router.replace('/products')
                    }}
                    variant={'destructive'}
                    className="w-full my-2"
                    >
                        {t('Clear All Filters')}
                    </Button>
                    <Button
                    type="submit"
                    className="w-full"
                    >
                        {t('Filter')}
                    </Button>
                </form>
            </Form>
            
        </div>
    )

    function filterProducts(data: productsPageSearchParamsType) {

        const params = new URLSearchParams()

        Object.entries(data).map(([ key, value ]) => {
            if (value) {
                params.set(key, value)
            }
        })

        router.replace(`/products?${params.toString()}`)
    }
}