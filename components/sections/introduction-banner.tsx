'use client'
import React, {useRef} from 'react';
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import Image from "next/image";
import codeThinking from "@/assets/images/code-thinking.svg";
import BaseContainer from "@/components/containers/base-container";
import {motion, useInView} from "framer-motion";
import ZoomInButton from "@/components/buttons/zoom-in-button";

const IntroductionBanner = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {once: true, amount: 0.3});

    return (
        <BaseContainer>
            <section
                className="w-full py-12 md:py-24 lg:py-32 xl:py-48"
                id="introduction"
                ref={sectionRef}
            >
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <motion.div
                        className="flex flex-col justify-center space-y-4"
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                        transition={{duration: 0.5}}
                    >
                        <motion.div
                            className="space-y-2"
                            initial={{opacity: 0}}
                            animate={isInView ? {opacity: 1} : {opacity: 0}}
                            transition={{delay: 0.2, duration: 0.5}}
                        >
                            <motion.h1
                                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center md:text-start"
                                initial={{opacity: 0, y: 10}}
                                animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 10}}
                                transition={{delay: 0.3, duration: 0.5}}
                            >
                                Computer Science Master&apos;s Student
                            </motion.h1>
                            <motion.p
                                className="text-muted-foreground md:text-xl text-center md:text-start"
                                initial={{opacity: 0, y: 10}}
                                animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 10}}
                                transition={{delay: 0.4, duration: 0.5}}
                            >
                                Passionate about building innovative solutions and exploring cutting-edge
                                technologies.
                            </motion.p>
                        </motion.div>
                        <motion.div
                            className="flex gap-6 flex-row items-center justify-center md:justify-start"
                            initial={{opacity: 0, y: 20}}
                            animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                            transition={{delay: 0.5, duration: 0.5}}
                        >
                            <Link
                                href="#projects"
                                className={"group"}
                            >
                                <ZoomInButton
                                    text={"View My Projects"}
                                    icon={
                                        <ArrowRight
                                            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                                        />
                                    }
                                    className={"hidden md:flex"}
                                />
                                <ZoomInButton
                                    text={"Projects"}
                                    icon={
                                        <ArrowRight
                                            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                                        />
                                    }
                                    className={"md:hidden"}
                                />
                            </Link>
                            <Link href="#contact">
                                <ZoomInButton
                                    text={"Contact Me"}
                                    variant={"secondary"}
                                />
                            </Link>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="flex items-center justify-center"
                        initial={{opacity: 0, scale: 0.9}}
                        animate={isInView ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.9}}
                        transition={{
                            delay: 0.3,
                            duration: 0.6,
                            type: "spring",
                            stiffness: 100
                        }}
                    >
                        <Image
                            src={codeThinking}
                            alt="code-thinking illustration"
                            className="rounded-lg object-cover"
                            priority
                        />
                    </motion.div>
                </div>
            </section>
        </BaseContainer>
    );
};

export default IntroductionBanner;