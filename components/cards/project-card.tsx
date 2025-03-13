import Image from "next/image"
import Link from "next/link"

import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"

interface ProjectCardProps {
    title: string
    description: string
    tags: string[]
    imageUrl: string
    projectUrl: string
}

export function ProjectCard({title, description, tags, imageUrl, projectUrl}: ProjectCardProps) {
    return (
        <Card className="overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                    <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover"/>
                </div>
            </CardHeader>
            <CardContent className="p-6">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 text-muted-foreground">{description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
                <Link
                    href={projectUrl}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                    View Project
                </Link>
            </CardFooter>
        </Card>
    )
}