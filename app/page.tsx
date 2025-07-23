import AboutMe from "@/components/sections/about-me";
import IntroductionBanner from "@/components/sections/introduction-banner";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Federico Raponi - Developer Portfolio",
    description: "Federico Raponi's professional portfolio showcasing web development skills, projects, and technical expertise in software engineering.",
    keywords: ["developer", "portfolio", "web developer", "software engineer", "Federico Raponi", "projects"],
    authors: [{ name: "Federico Raponi" }],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://federicoraponi.it",
        title: "Federico Raponi - Developer Portfolio",
        description: "Federico Raponi's professional portfolio showcasing web development skills, projects, and technical expertise in software engineering.",
        siteName: "Federico Raponi Portfolio",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Federico Raponi Portfolio"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Federico Raponi - Developer Portfolio",
        description: "Federico Raponi's professional portfolio showcasing web development skills, projects, and technical expertise in software engineering.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <IntroductionBanner/>

            <AboutMe/>
            <Projects/>
            <Skills/>
        </div>
    )
}