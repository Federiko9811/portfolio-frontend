import React from 'react';
import {SkillBadge} from "@/components/badges/skill-badge";
import BaseContainer from "@/components/containers/base-container";

const Skills = () => {
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
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Programming Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                <SkillBadge name="Python"/>
                                <SkillBadge name="JavaScript"/>
                                <SkillBadge name="TypeScript"/>
                                <SkillBadge name="Java"/>
                                <SkillBadge name="C++"/>
                                <SkillBadge name="SQL"/>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Web Development</h3>
                            <div className="flex flex-wrap gap-2">
                                <SkillBadge name="React"/>
                                <SkillBadge name="Next.js"/>
                                <SkillBadge name="Node.js"/>
                                <SkillBadge name="Express"/>
                                <SkillBadge name="HTML/CSS"/>
                                <SkillBadge name="Tailwind CSS"/>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Data Science & AI</h3>
                            <div className="flex flex-wrap gap-2">
                                <SkillBadge name="TensorFlow"/>
                                <SkillBadge name="PyTorch"/>
                                <SkillBadge name="Scikit-learn"/>
                                <SkillBadge name="Pandas"/>
                                <SkillBadge name="NumPy"/>
                                <SkillBadge name="NLTK"/>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Tools & Platforms</h3>
                            <div className="flex flex-wrap gap-2">
                                <SkillBadge name="Git"/>
                                <SkillBadge name="Docker"/>
                                <SkillBadge name="AWS"/>
                                <SkillBadge name="Firebase"/>
                                <SkillBadge name="MongoDB"/>
                                <SkillBadge name="PostgreSQL"/>
                            </div>
                        </div>
                    </div>
                </div>
            </BaseContainer>
        </section>
    );
};

export default Skills;