'use client'

import { I18nextProvider } from 'react-i18next'
import { createContext, ReactNode } from "react"
import i18n from "@/lib/src/i18nClient"





const SiteContext = createContext({})






export default function SiteContextProvider({
    children
}: {
    children: ReactNode
}) {

    const value = {}

    return (
        <SiteContext.Provider
        value={value}
        >
            <I18nextProvider
            i18n={i18n}
            >
                {children}
            </I18nextProvider>
        </SiteContext.Provider>
    )
}
