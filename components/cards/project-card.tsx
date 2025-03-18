import Link from "next/link"

import {Card, CardContent, CardFooter} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"

interface ProjectCardProps {
    project: Project
}

export function ProjectCard({project}: ProjectCardProps) {

    return (
        <Card className="overflow-hidden transition-all rounded-lg bg-muted/40 border-none hover:shadow-lg">
            <CardContent className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 items-center justify-center">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="accent">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
                <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                    View Project
                </Link>
            </CardFooter>
        </Card>
    )
}