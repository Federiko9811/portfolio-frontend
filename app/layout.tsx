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
    metadataBase: new URL('https://federicoraponi.it'),
    keywords: ["Federico Raponi", "portfolio", "developer", "software engineer", "projects"],
    authors: [{ name: "Federico Raponi" }],
    creator: "Federico Raponi",
    publisher: "Federico Raponi",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://federicoraponi.it",
        title: "Federico Raponi - Portfolio",
        description: "Federico Raponi's personal portfolio showcasing his projects, skills, and certifications.",
        siteName: "Federico Raponi Portfolio",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Federico Raponi Portfolio",
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Federico Raponi - Portfolio",
        description: "Federico Raponi's personal portfolio showcasing his projects, skills, and certifications.",
        images: ["/og-image.jpg"],
        creator: "@federicoraponi", // Add your Twitter handle if you have one
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        // Add these if you have them
        // google: "your-google-site-verification-code",
        // yandex: "your-yandex-verification-code",
        // bing: "your-bing-verification-code",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <title></title>
            {/* Additional meta tags for better SEO */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <link rel="canonical" href="https://federicoraponi.it" />

        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Script
            src="https://umami.federicoraponi.it/script.js"
            data-website-id="9ade7300-70f2-40bb-887b-cd23915ab4b6"
            strategy="afterInteractive"
        />

        {/* Structured Data for SEO */}
        <Script
            id="structured-data"
            type="application/ld+json"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Federico Raponi",
                    "jobTitle": "Software Developer",
                    "url": "https://federicoraponi.it",
                    "description": "Federico Raponi's professional portfolio showcasing web development skills, projects, and technical expertise in software engineering.",
                    "sameAs": [
                        "https://www.linkedin.com/in/federico-raponi-4501ab199/",
                        "https://github.com/Federiko9811",
                        "https://x.com/Federiko9811",
                        "https://www.instagram.com/federiko98/"
                    ]
                })
            }}
        />
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
            {/*<TanStackQueryProvider>*/}
            <Navbar/>
            <main>
                {children}
            </main>
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