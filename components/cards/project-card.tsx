import Link from "next/link"
import {Card, CardContent, CardFooter} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {formatDateRange} from "@/utils/format-date-range"
import {ArrowRight} from "lucide-react"
import ZoomInButton from "@/components/buttons/zoom-in-button";

interface ProjectCardProps {
    project: Project
}

export function ProjectCard({project}: ProjectCardProps) {

    const handleTrackOpenProject = (projectTitle: string) => {
        if (typeof window !== 'undefined' && typeof window.umami !== 'undefined') {
            window.umami.track('Open Project', {project: projectTitle});
        }
    }

    return (
        <Card
            className="overflow-hidden transition-all rounded-lg bg-muted/40 border-none hover:shadow-lg flex flex-col h-full group">
            <CardContent className="p-6 flex-grow">
                <div className="flex justify-center text-xs text-gray-500 mb-2 font-semibold">
                    {formatDateRange(project.start_date, project.end_date)}
                </div>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm line-clamp-3">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 items-center justify-center">
                    {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                        </Badge>
                    ))}
                    {project.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                            +{project.tags.length - 3}
                        </Badge>
                    )}
                </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
                <Link
                    href={`/projects/${project.id}`}
                    className={"w-full"}
                    onClick={() => handleTrackOpenProject(project.title)}
                >
                    <ZoomInButton
                        className={"w-full"}
                        text={"View Project"}
                        icon={
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/>
                        }
                        variant={"accent"}
                    />
                </Link>
            </CardFooter>
        </Card>
    )
}

