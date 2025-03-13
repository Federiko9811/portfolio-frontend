import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import Image from "next/image";
import codeThinking from "@/assets/images/code-thinking.svg";
import BaseContainer from "@/components/containers/base-container";

const IntroductionBanner = () => {
    return (
        <BaseContainer>
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48" id="introduction">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Computer Science Master&apos;s Student
                            </h1>
                            <p className="text-muted-foreground md:text-xl">
                                Passionate about building innovative solutions and exploring cutting-edge
                                technologies.
                            </p>
                        </div>
                        <div className="flex gap-6 flex-row items-center justify-center md:justify-start">
                            <Link href="#projects">
                                <Button>
                                    View My Projects
                                    <ArrowRight className="ml-2 h-4 w-4"/>
                                </Button>
                            </Link>
                            <Link href="#contact">
                                <Button variant="secondary">
                                    Contact Me
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image
                            src={codeThinking}
                            alt="code-thinking illustration"
                            className="rounded-lg object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>
        </BaseContainer>
    );
};

export default IntroductionBanner;