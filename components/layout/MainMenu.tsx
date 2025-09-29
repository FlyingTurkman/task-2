'use client'

import Link from "next/link"
import { useTranslation } from "react-i18next"
import { buttonVariants } from "../ui/button"













export default function MainMenu() {

    const { t } = useTranslation()
    return (
        <div
        className="bg-primary text-primary-foreground sticky top-0 left-0"
        >
            <div
            className="flex flex-row mx-auto container items-center gap-4 p-4"
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
        </div>
    )
}