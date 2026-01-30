// app/projects/[slug]/page.tsx
import projects from "@/data/projects.json";
import type { Metadata } from "next";
import Script from "next/script";
import {findProjectBySlug} from "@/utils/find-project-by-slug";
import {generateSlug} from "@/utils/generate-slug";
import ClientPage from "@/app/projects/[slug]/client-page";
import {getAuthorsByIds, Author} from "@/utils/get-authors";

interface Project {
    id: number;
    priority: number;
    title: string;
    description: string;
    tags: string[];
    start_date: string;
    end_date: string;
    content: string;
    github: string | null;
    pdf: string | null;
    website?: string | null;
    author_ids: string[];
    image?: string;
    technologies?: string[];
}

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

// Generate structured data for the project
function generateProjectStructuredData(project: Project, slug: string) {
    const baseUrl = "https://federicoraponi.it";

    return {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description || project.content?.substring(0, 160),
        "url": `${baseUrl}/projects/${slug}`,
        "author": {
            "@type": "Person",
            "name": getAuthorsByIds(project.author_ids)?.[0]?.name || "Federico Raponi",
            "url": baseUrl,
            "sameAs": [
                getAuthorsByIds(project.author_ids)?.[0]?.github || "https://github.com/federicoraponi",
                getAuthorsByIds(project.author_ids)?.[0]?.linkedin || "https://linkedin.com/in/federicoraponi"
            ]
        },
        "creator": {
            "@type": "Person",
            "name": "Federico Raponi",
            "url": baseUrl
        },
        "dateCreated": project.start_date,
        "dateModified": project.end_date || project.start_date,
        "keywords": project.tags?.join(", ") || "",
        "genre": "Software Development",
        "inLanguage": "en",
        "isPartOf": {
            "@type": "WebSite",
            "name": "Federico Raponi Portfolio",
            "url": baseUrl
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${baseUrl}/projects/${slug}`
        },
        "image": project.image ? `${baseUrl}${project.image}` : `${baseUrl}/og-image.jpg`,
        "thumbnailUrl": project.image ? `${baseUrl}${project.image}` : `${baseUrl}/og-image.jpg`,
        // If the project has a website
        ...(project.website && {
            "workExample": {
                "@type": "WebApplication",
                "name": `${project.title} - Live Demo`,
                "url": project.website
            }
        }),
        // If the project has a GitHub repository
        ...(project.github && {
            "codeRepository": project.github
        }),
        // If the project has a PDF
        ...(project.pdf && {
            "encoding": {
                "@type": "MediaObject",
                "contentUrl": `${baseUrl}${project.pdf}`,
                "encodingFormat": "application/pdf"
            }
        }),
        // Add technology stack if available
        ...(project.technologies && {
            "about": project.technologies.map((tech: string) => ({
                "@type": "Thing",
                "name": tech
            }))
        })
    };
}

// Generate breadcrumb structured data
function generateBreadcrumbStructuredData(project: Project, slug: string) {
    const baseUrl = "https://federicoraponi.it";

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": baseUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Projects",
                "item": `${baseUrl}/projects`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": project.title,
                "item": `${baseUrl}/projects/${slug}`
            }
        ]
    };
}

// Generate metadata for each project page dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = findProjectBySlug(projects, slug) as Project | undefined;

    if (!project) {
        return {
            title: "Project Not Found | Federico Raponi",
            description: "The requested project could not be found.",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    // Create a preview description from the content
    const previewDescription = project.description ||
        (project.content && project.content.substring(0, 160).trim() + "...");

    return {
        title: `${project.title} | Federico Raponi Portfolio`,
        description: previewDescription,
        keywords: [...(project.tags || []), "Federico Raponi", "portfolio", "project"],
        authors: getAuthorsByIds(project.author_ids)?.map((author: Author) => ({ name: author.name })) || [{ name: "Federico Raponi" }],
        alternates: {
            canonical: `https://federicoraponi.it/projects/${slug}`
        },
        openGraph: {
            title: `${project.title} | Federico Raponi Portfolio`,
            description: previewDescription,
            url: `https://federicoraponi.it/projects/${slug}`,
            type: "article",
            publishedTime: project.start_date,
            modifiedTime: project.end_date,
            authors: getAuthorsByIds(project.author_ids)?.map((author: Author) => author.name) || ["Federico Raponi"],
            tags: project.tags,
            images: [
                {
                    url: project.image ? `https://federicoraponi.it${project.image}` : "/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: project.title,
                }
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${project.title} | Federico Raponi Portfolio`,
            description: previewDescription,
            images: [project.image ? `https://federicoraponi.it${project.image}` : "/og-image.jpg"],
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
}

// Generate static params for all projects using slugs
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: generateSlug(project.title),
    }));
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = findProjectBySlug(projects, slug) as Project | undefined;

    if (!project) {
        return <div>Project not found</div>;
    }

    const projectStructuredData = generateProjectStructuredData(project, slug);
    const breadcrumbStructuredData = generateBreadcrumbStructuredData(project, slug);

    return (
        <>
            {/* JSON-LD Structured Data */}
            <Script
                id="project-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(projectStructuredData)
                }}
            />
            <Script
                id="breadcrumb-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbStructuredData)
                }}
            />

            <ClientPage projectSlug={slug} />
        </>
    );
}
