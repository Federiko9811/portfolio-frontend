'use client'
import React, { useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import BaseContainer from "@/components/containers/base-container";
import projects from "@/data/projects.json";
import { Button } from "@/components/ui/button";
import { FileText, Globe } from "lucide-react";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { motion, useInView } from "framer-motion";

const ProjectPage = () => {
    const contentRef = useRef(null);
    const isInView = useInView(contentRef, { once: true, amount: 0.1 });

    const params = useParams<{ id: string }>();
    const project = projects.find((p) => p.id === parseInt(params.id));

    if (!project) {
        return (
            <BaseContainer>
                <div>
                    Project Not Found
                </div>
            </BaseContainer>
        );
    }

    return (
        <BaseContainer>
            <motion.div
                className="prose max-w-none dark:prose-invert min-h-screen py-12 md:py-24 lg:py-32"
                ref={contentRef}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    {project.title}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                    >
                        {project.content}
                    </ReactMarkdown>
                </motion.div>

                <motion.div
                    className={"flex flex-col"}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <h3>
                        Authors
                    </h3>
                    <div className="flex flex-wrap gap-2 items-center">
                        {project.authors?.map((author, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.7 + (index * 0.1), duration: 0.4 }}
                            >
                                <Badge
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
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <h3>
                        More Resources
                    </h3>

                    <div className={"flex gap-4 flex-wrap"}>
                        {project.pdf ? (
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                transition={{ delay: 0.9, duration: 0.4 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a
                                    href={project.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button>
                                        View PDF
                                        <FileText className="ml-2 h-4 w-4"/>
                                    </Button>
                                </a>
                            </motion.div>
                        ) : null}

                        {project.website ? (
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                transition={{ delay: 1.0, duration: 0.4 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a
                                    href={project.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button>
                                        Go to Website
                                        <Globe className="ml-2 h-4 w-4"/>
                                    </Button>
                                </a>
                            </motion.div>
                        ) : null}

                        {project.github ? (
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                transition={{ delay: 1.1, duration: 0.4 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
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
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                transition={{ delay: 1.1, duration: 0.4 }}
                            >
                                <HoverCard>
                                    <HoverCardTrigger>
                                        <Button
                                            variant={"secondary"}
                                            disabled
                                        >
                                            GitHub Repository Not Available
                                        </Button>
                                    </HoverCardTrigger>
                                    <HoverCardContent>
                                        This repository is private, please contact the authors for more information.
                                    </HoverCardContent>
                                </HoverCard>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </BaseContainer>
    );
};

export default ProjectPage;