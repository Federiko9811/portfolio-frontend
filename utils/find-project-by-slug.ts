// Funzione helper per trovare un progetto per slug
import {generateSlug} from "@/utils/generate-slug";

export function findProjectBySlug(projects: Project[], slug: string): Project {
    return projects.find(project => generateSlug(project.title) === slug) as Project;
}