'use client'

import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Button, buttonVariants } from "../ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { US, TR } from 'country-flag-icons/react/3x2'
import { useEffect, useState } from "react"
import CartSheet from "./CartSheet"












export default function MainMenu() {

    const { t, i18n } = useTranslation()
    
    return (
        <div
        className="bg-primary text-primary-foreground sticky top-0 left-0"
        >
            <div
            className="flex flex-row items-center mx-auto container justify-between w-full p-4"
            >
                <div
                className="flex flex-row items-center gap-4"
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
                        >
                            <SelectValue placeholder={t('Language')}/>
                            <SelectContent>
                                <SelectItem
                                value="tr"
                                >
                                    <TR/>
                                    Türkçe
                                </SelectItem>
                                <SelectItem
                                value="en"
                                >
                                    <US/>
                                    English
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