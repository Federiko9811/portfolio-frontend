import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import BaseContainer from "@/components/containers/base-container";
import projects from "@/data/projects.json";
import {Button} from "@/components/ui/button";
import {FileText} from "lucide-react";

interface ProjectPageParams {
    params: {
        id: string;
    }
}

const ProjectPage = async ({params}: ProjectPageParams) => {
    // Make sure params is fully resolved before accessing
    const resolvedParams = await Promise.resolve(params);
    const projectId = Number(resolvedParams.id);

    const project = projects.find((p) => p.id === projectId);

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
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                >
                    {project.content}
                </ReactMarkdown>
                <div className={"flex gap-4"}>
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
        </BaseContainer>
    );
};

export default ProjectPage;