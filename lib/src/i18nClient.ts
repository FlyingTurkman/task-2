'use client'

import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import Backend from 'i18next-http-backend'



const lng = typeof window != 'undefined' ? localStorage.getItem('lng') : null
const initialLng = lng ?? 'tr'




i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'tr',
    lng: initialLng,
    supportedLngs: ['en', 'tr'],
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  })

export default i18n