'use client'

import Link from "next/link"
import { useTranslation } from "react-i18next"













export default function MainMenu() {

    const { t } = useTranslation()
    return (
        <div
        className="bg-primary text-primary-foreground"
        >
            <div
            className="flex flex-row mx-auto items-center gap-4 p-4"
            >
                <Link
                href={'/'}
                >
                    {t('Main Menu')}
                </Link>
                <Link
                href={'/products'}
                >
                    {t('Products')}
                </Link>
            </div>
        </div>
    )
}