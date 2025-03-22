'use client'
import React from 'react';
import Image from "next/image";
import aboutMe from "@/assets/images/about-me.svg";
import BaseContainer from "@/components/containers/base-container";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutMe = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <BaseContainer>
            <section
                id="about"
                className="w-full py-12 md:py-24 lg:py-32"
                ref={sectionRef}
            >
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h2
                            className="text-3xl font-bold tracking-tighter sm:text-5xl"
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            About Me
                        </motion.h2>
                        <motion.p
                            className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            I am a Master&apos;s student in Computer Science with a passion for software
                            development, artificial
                            intelligence, and data science. My academic journey has equipped me with a
                            strong
                            foundation in
                            theoretical computer science and practical programming skills.
                        </motion.p>
                    </motion.div>
                    <div
                        className="grid items-center gap-6 pt-12 lg:grid-cols-2 lg:gap-12">
                        <motion.div
                            className="flex flex-col justify-center space-y-4"
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            <ul className="grid gap-6">
                                <motion.li variants={itemVariants}>
                                    <div className="grid gap-1">
                                        <h3 className="text-xl font-bold">Education</h3>
                                        <p className="text-muted-foreground">
                                            Master&apos;s in Computer Science, Specializing in Artificial
                                            Intelligence
                                        </p>
                                    </div>
                                </motion.li>
                                <motion.li variants={itemVariants}>
                                    <div className="grid gap-1">
                                        <h3 className="text-xl font-bold">Research Interests</h3>
                                        <p className="text-muted-foreground">
                                            Machine Learning, Natural Language Processing, Computer Vision
                                        </p>
                                    </div>
                                </motion.li>
                                <motion.li variants={itemVariants}>
                                    <div className="grid gap-1">
                                        <h3 className="text-xl font-bold">Professional Goal</h3>
                                        <p className="text-muted-foreground">
                                            To develop innovative solutions that address real-world
                                            challenges
                                            using cutting-edge
                                            technologies
                                        </p>
                                    </div>
                                </motion.li>
                            </ul>
                        </motion.div>
                        <motion.div
                            className="flex justify-center lg:justify-end"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{
                                delay: 0.4,
                                duration: 0.7,
                                type: "spring",
                                stiffness: 80
                            }}
                        >
                            <Image
                                src={aboutMe}
                                alt="About Me Image"
                                className="rounded-lg object-cover scale-75"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </BaseContainer>
    );
};

export default AboutMe;