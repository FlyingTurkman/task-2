'use client'

import { buttonVariants } from "@/components/ui/button"
import H1 from "@/components/ui/h1"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import "./globals.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"










export default function GlobalNotFound() {

    const { t } = useTranslation()
    return (
        <html>
            <body>
                <main
                className="flex items-center justify-center mx-auto max-w-xl w-full h-screen"
                >
                    <Card
                    className="shrink-0 w-full"
                    >
                        <CardHeader>
                            <CardTitle>
                                <H1>
                                    {t('Page Not Found')}
                                </H1>
                            </CardTitle>
                        </CardHeader>
                        <CardContent
                        className="flex flex-row items-center justify-center"
                        >
                            <Link
                            href={'/'}
                            className={buttonVariants({ variant: 'link', className: 'mx-auto' })}
                            >
                                {t('Go to main page')}
                            </Link>
                        </CardContent>
                    </Card>
                </main>
            </body>
        </html>
    )
}