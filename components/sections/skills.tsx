'use client'
import React, { useRef } from 'react';
import { SkillBadge } from "@/components/badges/skill-badge";
import BaseContainer from "@/components/containers/base-container";
import { motion, useInView } from "framer-motion";

const Skills = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    const programmingLanguages = [
        "Go",
        "Python",
        "JavaScript",
        "TypeScript",
        "Java",
        "SQL"
    ];

    const webDevelopment = [
        "React",
        "Next.js",
        "Django REST",
        "Gin",
        "Tailwind CSS",
        "Shadcn"
    ];

    const dataScienceAI = [
        "PyTorch",
        "Scikit-learn",
        "Pandas",
        "NumPy",
    ];

    const toolsPlatforms = [
        "Git",
        "Docker",
        "AWS - S3, RDS",
        "Firebase",
        "Proxmox",
        "PostgreSQL"
    ];

    return (
        <section
            id="skills"
            className="w-full py-12 md:py-24 lg:py-32 bg-muted/40"
            ref={sectionRef}
        >
            <BaseContainer>
                <motion.div
                    className="flex flex-col items-center justify-center space-y-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <motion.h2
                            className="text-3xl font-bold tracking-tighter sm:text-5xl"
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            Skills & Technologies
                        </motion.h2>
                        <motion.p
                            className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            A comprehensive list of my technical skills and the technologies I work with.
                        </motion.p>
                    </motion.div>
                    <motion.div
                        className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12 w-full"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <h3 className="text-xl font-bold">Programming Languages</h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {programmingLanguages.map((language, index) => (
                                    <motion.div
                                        key={language}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                        transition={{ delay: 0.7 + (index * 0.05), duration: 0.3 }}
                                    >
                                        <SkillBadge name={language} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                        >
                            <h3 className="text-xl font-bold">Web Development</h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {webDevelopment.map((technology, index) => (
                                    <motion.div
                                        key={technology}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                        transition={{ delay: 0.8 + (index * 0.05), duration: 0.3 }}
                                    >
                                        <SkillBadge name={technology} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                        >
                            <h3 className="text-xl font-bold">Data Science & AI</h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {dataScienceAI.map((technology, index) => (
                                    <motion.div
                                        key={technology}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                        transition={{ delay: 0.9 + (index * 0.05), duration: 0.3 }}
                                    >
                                        <SkillBadge name={technology} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                            transition={{ delay: 0.9, duration: 0.5 }}
                        >
                            <h3 className="text-xl font-bold">Tools & Platforms</h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {toolsPlatforms.map((technology, index) => (
                                    <motion.div
                                        key={technology}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                        transition={{ delay: 1.0 + (index * 0.05), duration: 0.3 }}
                                    >
                                        <SkillBadge name={technology} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </BaseContainer>
        </section>
    );
};

export default Skills;