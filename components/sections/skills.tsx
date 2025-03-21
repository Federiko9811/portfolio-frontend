import React from 'react';
import {SkillBadge} from "@/components/badges/skill-badge";
import BaseContainer from "@/components/containers/base-container";

const Skills = () => {

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
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
            <BaseContainer>
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills &
                            Technologies</h2>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            A comprehensive list of my technical skills and the technologies I work with.
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Programming Languages</h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {programmingLanguages.map((language) => (
                                    <SkillBadge key={language} name={language}/>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Web Development</h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {webDevelopment.map((technology) => (
                                    <SkillBadge key={technology} name={technology}/>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Data Science & AI</h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {dataScienceAI.map((technology) => (
                                    <SkillBadge key={technology} name={technology}/>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Tools & Platforms</h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {toolsPlatforms.map((technology) => (
                                    <SkillBadge key={technology} name={technology}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </BaseContainer>
        </section>
    );
};

export default Skills;