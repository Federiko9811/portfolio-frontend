import React from 'react';
import {ProjectCard} from "@/components/cards/project-card";
import BaseContainer from "@/components/containers/base-container";
import projectsList from "@/data/projects.json";

const Projects = () => {

    const projects: Project[] = projectsList.sort((a, b) => {
        const dateA = new Date(a.end_date);
        const dateB = new Date(b.end_date);

        if (dateA < dateB) return -1;
        if (dateA > dateB) return 1;

        return a.title.localeCompare(b.title);
    });

    return (
        <BaseContainer>
            <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projects</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Explore my portfolio of projects spanning various domains and technologies.
                        </p>
                    </div>
                    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                        {projects.map((project: Project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </BaseContainer>
    );
};

export default Projects;