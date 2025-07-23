import ClientPage from "@/app/projects/[id]/client-page";
import projects from "@/data/projects.json";
import type { Metadata } from "next";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

// Generate metadata for each project page dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const project = projects.find((p) => p.id === parseInt(id));

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
        authors: project.authors?.map(author => ({ name: author.name })) || [{ name: "Federico Raponi" }],
        openGraph: {
            title: `${project.title} | Federico Raponi Portfolio`,
            description: previewDescription,
            url: `https://federicoraponi.it/projects/${id}`,
            type: "article",
            publishedTime: project.start_date,
            modifiedTime: project.end_date, // If you have an end_date field
            authors: project.authors?.map(author => author.name) || ["Federico Raponi"],
            tags: project.tags,
            images: [
                {
                    url: "/og-image.jpg", // Use project-specific image if available
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
}

export async function generateStaticParams() {
    return projects.map((p) => ({
        id: p.id.toString(),
    }));
}

export default async function ProjectPage({ params }: Props) {
    const { id } = await params;
    return <ClientPage projectId={id} />;
}