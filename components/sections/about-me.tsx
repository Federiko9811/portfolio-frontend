import React from 'react';
import Image from "next/image";
import aboutMe from "@/assets/images/about-me.svg";
import BaseContainer from "@/components/containers/base-container";

const AboutMe = () => {
    return (
        <BaseContainer>
            <section id="about" className="w-full py-12 md:py-24 lg:py-32">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            I am a Master&apos;s student in Computer Science with a passion for software
                            development, artificial
                            intelligence, and data science. My academic journey has equipped me with a
                            strong
                            foundation in
                            theoretical computer science and practical programming skills.
                        </p>
                    </div>
                    <div
                        className="grid items-center gap-6 pt-12 lg:grid-cols-2 lg:gap-12">
                        <div className="flex flex-col justify-center space-y-4">
                            <ul className="grid gap-6">
                                <li>
                                    <div className="grid gap-1">
                                        <h3 className="text-xl font-bold">Education</h3>
                                        <p className="text-muted-foreground">
                                            Master&apos;s in Computer Science, Specializing in Artificial
                                            Intelligence
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="grid gap-1">
                                        <h3 className="text-xl font-bold">Research Interests</h3>
                                        <p className="text-muted-foreground">
                                            Machine Learning, Natural Language Processing, Computer Vision
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="grid gap-1">
                                        <h3 className="text-xl font-bold">Professional Goal</h3>
                                        <p className="text-muted-foreground">
                                            To develop innovative solutions that address real-world
                                            challenges
                                            using cutting-edge
                                            technologies
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <Image
                                src={aboutMe}
                                alt="About Me Image"
                                className="rounded-lg object-cover scale-75"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </BaseContainer>
    );
};

export default AboutMe;