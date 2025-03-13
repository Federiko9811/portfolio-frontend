import React from 'react';
import {ProjectCard} from "@/components/cards/project-card";
import {Button} from "@/components/ui/button";
import BaseContainer from "@/components/containers/base-container";

const Projects = () => {
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
                        <ProjectCard
                            title="AI-Powered Image Recognition"
                            description="A deep learning model for image classification using TensorFlow and PyTorch."
                            tags={["Python", "TensorFlow", "PyTorch", "Computer Vision"]}
                            imageUrl="/placeholder.svg?height=300&width=400"
                            projectUrl="#"
                        />
                    </div>
                    <div className="flex justify-center">
                        <Button variant="secondary" className="mt-4">
                            View All Projects
                        </Button>
                    </div>
                </div>
            </section>
        </BaseContainer>
    );
};

export default Projects;