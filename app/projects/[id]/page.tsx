'use client'
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import BaseContainer from "@/components/containers/base-container";
import projects from "@/data/projects.json";
import {Button} from "@/components/ui/button";
import {FileText} from "lucide-react";
import {useParams} from "next/navigation";
import {Badge} from "@/components/ui/badge";

const ProjectPage = () => {

    const params = useParams<{ id: string }>()

    const project = projects.find((p) => p.id === parseInt(params.id));

    if (!project) {
        return (
            <BaseContainer>
                <div>
                    Project Not Found
                </div>
            </BaseContainer>
        )
    }

    return (
        <BaseContainer>
            <div className="prose max-w-none dark:prose-invert min-h-screen py-12 md:py-24 lg:py-32">

                <h1>
                    {project.title}
                </h1>

                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                >
                    {project.content}
                </ReactMarkdown>

                <div
                    className={"flex flex-col"}
                >
                    <h3>
                        Authors
                    </h3>
                    <div className="flex flex-wrap gap-2 items-center">
                        {project.authors?.map((author, index) => (
                            <Badge
                                key={index}
                                variant={"accent"}
                            >
                                <a
                                    href={author.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={"text-sm"}
                                >
                                    {author.name}
                                </a>
                            </Badge>
                        ))}
                    </div>
                </div>


                <div>
                    <h3>
                        More Resources
                    </h3>
                    <div className={"flex gap-4 "}>
                        <a
                            href={project.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button>
                                View PDF
                                <FileText className="h-4 w-4"/>
                            </Button>
                        </a>

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant={"secondary"}
                            >
                                Open on GitHub
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </BaseContainer>
    );
};

export default ProjectPage;