import { MetadataRoute } from 'next'
import projects from '@/data/projects.json'

export const dynamic = 'force-static'

// Helper function to safely parse dates
function safeParseDate(dateString: string | undefined | null): Date {
    if (!dateString) return new Date()

    const parsed = new Date(dateString)
    // Check if the date is valid
    if (isNaN(parsed.getTime())) {
        console.warn(`Invalid date found: ${dateString}, using current date instead`)
        return new Date()
    }

    return parsed
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://federicoraponi.it'
    const currentDate = new Date()

    // Main pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: currentDate,
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms-of-service`,
            lastModified: currentDate,
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        }
    ]

    // Project pages with safe date parsing
    const projectUrls = projects.map((project) => {
        const startDate = safeParseDate(project.start_date)
        const endDate = safeParseDate(project.end_date)

        return {
            url: `${baseUrl}/projects/${project.id}`,
            lastModified: project.end_date ? endDate : startDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }
    })

    return [...staticPages, ...projectUrls]
}
