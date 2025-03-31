import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/providers/theme-provider";
import {Toaster} from "@/components/ui/sonner"
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Script from "next/script";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Federico Raponi - Portfolio",
    description: "Federico Raponi's personal portfolio showcasing his projects, skills, and certifications.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Script
            src="https://umami.federicoraponi.it/script.js"
            data-website-id="9ade7300-70f2-40bb-887b-cd23915ab4b6"
        />
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
            {/*<TanStackQueryProvider>*/}
            <Navbar/>
            {children}
            <Footer/>
            <Toaster/>
            {/*</TanStackQueryProvider>*/}
        </ThemeProvider>
        </body>
        </html>
    );
}

// Add TypeScript declaration for window.umami
declare global {
    interface Window {
        umami?: {
            track: (eventName: string, eventData?: Record<string, unknown>) => void;
        }
    }
}