'use client'

import Link from "next/link"
import { useTranslation } from "react-i18next"
import { buttonVariants } from "../ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { US, TR } from 'country-flag-icons/react/3x2'
import CartSheet from "./CartSheet"
import { Label } from "../ui/label"
import { FormLabel } from "../ui/form"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { IoMenu } from "react-icons/io5"
import { Separator } from "../ui/separator"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"












export default function MainMenu() {

    const pathname = usePathname()

    const [isMenuSheetOpen, setIsMenuSheetOpen] = useState<boolean>(false)

    const { t, i18n } = useTranslation()

    useEffect(() => {
        setIsMenuSheetOpen(false)
    }, [pathname])
    return (
        <div
        className="bg-primary text-primary-foreground sticky top-0 left-0"
        >
            <div
            className="flex flex-row items-center mx-auto container justify-between w-full p-4"
            >
                <div
                className="hidden lg:flex flex-row items-center gap-4"
                >
                    <Link
                    href={'/'}
                    className={buttonVariants({ variant: 'ghost' })}
                    >
                        {t('Main Page')}
                    </Link>
                    <Link
                    href={'/products'}
                    className={buttonVariants({ variant: 'ghost' })}
                    >
                        {t('Products')}
                    </Link>
                </div>
                <div
                className="flex lg:hidden"
                >
                    <Sheet
                    open={isMenuSheetOpen}
                    onOpenChange={setIsMenuSheetOpen}
                    >
                        <SheetTrigger
                        aria-label={t('Menu Button')}
                        >
                            <IoMenu/>
                        </SheetTrigger>
                        <SheetContent
                        side="left"
                        >
                            <SheetHeader>
                                <SheetTitle>
                                    {t('Menu')}
                                </SheetTitle>
                            </SheetHeader>
                            <Separator/>
                            <Link
                            href={'/'}
                            className={buttonVariants({ variant: 'link', className: '!justify-start' })}
                            >
                                {t('Main Page')}
                            </Link>
                            <Link
                            href={'/products'}
                            className={buttonVariants({ variant: 'link', className: '!justify-start' })}
                            >
                                {t('Products')}
                            </Link>
                        </SheetContent>
                    </Sheet>
                </div>
                <div
                className="flex flex-row items-center gap-4"
                >
                    <Select
                    defaultValue={i18n.language}
                    onValueChange={((e) => {
                        i18n.changeLanguage(e)
                        localStorage.setItem('lng', e)
                    })}
                    >
                        <SelectTrigger
                        className={buttonVariants({ variant: 'secondary' })}
                        aria-label={t('Language Button')}
                        size="sm"
                        >
                            <SelectValue placeholder={t('Language')}/>
                            <SelectContent>
                                <SelectItem
                                value="tr"
                                >
                                    <Label>
                                        <TR/>
                                        <Label
                                        className="hidden lg:block"
                                        >
                                            Türkçe
                                        </Label>
                                    </Label>
                                </SelectItem>
                                <SelectItem
                                value="en"
                                >
                                    <Label>
                                        <US/>
                                        <Label
                                        className="hidden lg:block"
                                        >
                                            English
                                        </Label>
                                    </Label>
                                </SelectItem>
                            </SelectContent>
                        </SelectTrigger>
                    </Select>
                    <CartSheet/>
                </div>
            </div>
        </div>
    )
}