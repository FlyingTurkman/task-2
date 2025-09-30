import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteContextProvider from "@/context/SiteContextProvider";
import MainMenu from "@/components/layout/MainMenu";
import { Toaster } from "@/components/ui/sonner"
import I18nProviderWrapper from "@/components/layout/I18NextProviderWrap";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/src/i18nClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Task 2",
  description: "Task developed by FlyingTurkman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <I18nProviderWrapper>
        <SiteContextProvider>
          <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <MainMenu/>
            {children}
            <Toaster/>
          </body>
        </SiteContextProvider>
      </I18nProviderWrapper>
    </html>

  );
}
