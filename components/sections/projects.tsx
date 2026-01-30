"use client"
import {useEffect, useRef, useState} from "react"
import {ProjectCard} from "@/components/cards/project-card"
import BaseContainer from "@/components/containers/base-container"
import projectsList from "@/data/projects.json"
import {ArrowDown, Search} from "lucide-react"
import {Input} from "@/components/ui/input"
import {Badge} from "@/components/ui/badge"
import {motion, useInView} from "framer-motion"
import ZoomInButton from "@/components/buttons/zoom-in-button";

const Projects = () => {
    const [visibleCount, setVisibleCount] = useState(6)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [allTags, setAllTags] = useState<string[]>([])

    // Reference for scroll animation
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {once: true, amount: 0.1});

    // Sort projects by priority (lower = more important)
    const projects: Project[] = projectsList.sort((a, b) => {
        return (a.priority ?? 999) - (b.priority ?? 999);
    })

    // Extract all unique tags from projects
    useEffect(() => {
        const tags = new Set<string>()
        projects.forEach((project) => {
            project.tags.forEach((tag) => tags.add(tag))
        })
        setAllTags(Array.from(tags).sort())
    }, [projects])

    // Filter projects based on search term and selected tags
    const filteredProjects = projects.filter((project) => {
        const matchesSearch =
            searchTerm === "" ||
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase())

        const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => project.tags.includes(tag))

        return matchesSearch && matchesTags
    })

    const visibleProjects = filteredProjects.slice(0, visibleCount)
    const hasMoreProjects = visibleCount < filteredProjects.length

    const loadMoreProjects = () => {
        setVisibleCount((prevCount) => prevCount + 3)
    }

    const toggleTag = (tag: string) => {
        setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
        // Reset visible count when filters change
        setVisibleCount(6)
    }

    // Keep your existing animation variants
    const container = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: {y: 20, opacity: 0},
        show: {y: 0, opacity: 1},
    }

    return (
        <section
            id="projects"
            className="w-full py-12 md:py-24 lg:py-32"
            ref={sectionRef}
        >
            <BaseContainer>
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <motion.div
                        className="space-y-2"
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                        transition={{duration: 0.6}}
                    >
                        <motion.h2
                            className="text-3xl font-bold tracking-tighter sm:text-5xl"
                            initial={{opacity: 0}}
                            animate={isInView ? {opacity: 1} : {opacity: 0}}
                            transition={{delay: 0.2, duration: 0.5}}
                        >
                            Projects
                        </motion.h2>
                        <motion.p
                            className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                            initial={{opacity: 0}}
                            animate={isInView ? {opacity: 1} : {opacity: 0}}
                            transition={{delay: 0.3, duration: 0.6}}
                        >
                            Explore my portfolio of projects spanning various domains and technologies.
                        </motion.p>
                    </motion.div>

                    {/* Search and filter section */}
                    <motion.div
                        className="w-full max-w-3xl mt-8 space-y-4"
                        initial={{opacity: 0, y: 10}}
                        animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 10}}
                        transition={{delay: 0.4, duration: 0.5}}
                    >
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"/>
                            <Input
                                placeholder="Search projects..."
                                className="pl-10"
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value)
                                    setVisibleCount(6) // Reset visible count when search changes
                                }}
                            />
                        </div>

                        <motion.div
                            className="flex flex-wrap gap-2 justify-center"
                            initial={{opacity: 0}}
                            animate={isInView ? {opacity: 1} : {opacity: 0}}
                            transition={{delay: 0.5, duration: 0.5}}
                        >
                            {allTags.map((tag, index) => (
                                <motion.div
                                    key={tag}
                                    initial={{opacity: 0, scale: 0.9}}
                                    animate={isInView ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.9}}
                                    transition={{delay: 0.5 + (index * 0.03), duration: 0.4}}
                                >
                                    <Badge
                                        variant={selectedTags.includes(tag) ? "accent" : "outline"}
                                        className="cursor-pointer hover:opacity-80 transition-all"
                                        onClick={() => toggleTag(tag)}
                                    >
                                        {tag}
                                    </Badge>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Projects grid - Keeping your existing animation but making it conditional on scroll */}
                    {filteredProjects.length > 0 ? (
                        <motion.div
                            className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8 mt-10"
                            variants={container}
                            initial="hidden"
                            animate={isInView ? "show" : "hidden"}
                        >
                            {visibleProjects.map((project: Project) => (
                                <motion.div key={project.id} variants={item}>
                                    <ProjectCard project={project}/>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            className="py-12 text-center"
                            initial={{opacity: 0}}
                            animate={isInView ? {opacity: 1} : {opacity: 0}}
                            transition={{delay: 0.6, duration: 0.4}}
                        >
                            <p className="text-muted-foreground">No projects match your search criteria.</p>
                        </motion.div>
                    )}

                    {/* Load more button - Keeping your existing animation */}
                    {hasMoreProjects && (
                        <motion.div
                            className="mt-8"
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.3}}
                            onClick={loadMoreProjects}
                        >
                            <ZoomInButton
                                text={"View More Projects"}
                                icon={<ArrowDown className="h-4 w-4 ml-2"/>}
                                variant={"secondary"}
                                className={"hidden md:flex"}
                            />
                            <ZoomInButton
                                text={"More"}
                                icon={<ArrowDown className="h-4 w-4 ml-2"/>}
                                variant={"secondary"}
                                className={"md:hidden"}
                            />
                        </motion.div>
                    )}
                </div>
            </BaseContainer>
        </section>
    )
}

export default Projects