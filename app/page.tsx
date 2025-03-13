import Image from "next/image"
import Link from "next/link"

import {Button} from "@/components/ui/button"
import {ProjectCard} from "@/components/cards/project-card"
import {SkillBadge} from "@/components/badges/skill-badge"
import {CertificationCard} from "@/components/cards/certification-card"
import {ContactForm} from "@/components/forms/contact-form"
import BaseContainer from "@/components/containers/base-container";
import IntroductionBanner from "@/components/sections/introduction-banner";

export default function Home() {
    return (
        <BaseContainer>
            <div className="flex flex-col min-h-screen">

                <IntroductionBanner />

                <main className="flex-1">
                    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        I am a Master&apos;s student in Computer Science with a passion for software
                                        development, artificial
                                        intelligence, and data science. My academic journey has equipped me with a
                                        strong
                                        foundation in
                                        theoretical computer science and practical programming skills.
                                    </p>
                                </div>
                                <div
                                    className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
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
                                            src="/placeholder.svg?height=400&width=400"
                                            width={400}
                                            height={400}
                                            alt="About Me Image"
                                            className="rounded-lg object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projects</h2>
                                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        Explore my portfolio of projects spanning various domains and technologies.
                                    </p>
                                </div>
                                <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                                    <ProjectCard
                                        title="AI-Powered Image Recognition"
                                        description="A deep learning model for image classification using TensorFlow and PyTorch."
                                        tags={["Python", "TensorFlow", "PyTorch", "Computer Vision"]}
                                        imageUrl="/placeholder.svg?height=300&width=400"
                                        projectUrl="#"
                                    />
                                    <ProjectCard
                                        title="E-commerce Platform"
                                        description="A full-stack e-commerce application with user authentication, product management, and payment processing."
                                        tags={["React", "Node.js", "MongoDB", "Stripe"]}
                                        imageUrl="/placeholder.svg?height=300&width=400"
                                        projectUrl="#"
                                    />
                                    <ProjectCard
                                        title="Data Visualization Dashboard"
                                        description="Interactive dashboard for visualizing complex datasets using D3.js and React."
                                        tags={["JavaScript", "D3.js", "React", "Data Visualization"]}
                                        imageUrl="/placeholder.svg?height=300&width=400"
                                        projectUrl="#"
                                    />
                                    <ProjectCard
                                        title="Natural Language Processing Tool"
                                        description="A tool for sentiment analysis and text classification using BERT and transformers."
                                        tags={["Python", "NLTK", "Transformers", "NLP"]}
                                        imageUrl="/placeholder.svg?height=300&width=400"
                                        projectUrl="#"
                                    />
                                    <ProjectCard
                                        title="Mobile Fitness App"
                                        description="A cross-platform mobile application for tracking fitness activities and nutrition."
                                        tags={["React Native", "Firebase", "Redux", "Mobile Development"]}
                                        imageUrl="/placeholder.svg?height=300&width=400"
                                        projectUrl="#"
                                    />
                                    <ProjectCard
                                        title="Blockchain Smart Contract"
                                        description="Implementation of smart contracts for decentralized applications on Ethereum."
                                        tags={["Solidity", "Ethereum", "Web3.js", "Blockchain"]}
                                        imageUrl="/placeholder.svg?height=300&width=400"
                                        projectUrl="#"
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <Button variant="outline" className="mt-4">
                                        View All Projects
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills &
                                        Technologies</h2>
                                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
                        </div>
                    </section>
                    <section id="certifications" className="w-full py-12 md:py-24 lg:py-32">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Certifications</h2>
                                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        Professional certifications and achievements that validate my expertise.
                                    </p>
                                </div>
                                <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                                    <CertificationCard
                                        title="AWS Certified Solutions Architect"
                                        issuer="Amazon Web Services"
                                        date="2023"
                                        imageUrl="/placeholder.svg?height=100&width=100"
                                        credentialUrl="#"
                                    />
                                    <CertificationCard
                                        title="TensorFlow Developer Certificate"
                                        issuer="Google"
                                        date="2022"
                                        imageUrl="/placeholder.svg?height=100&width=100"
                                        credentialUrl="#"
                                    />
                                    <CertificationCard
                                        title="Microsoft Certified: Azure Data Scientist Associate"
                                        issuer="Microsoft"
                                        date="2022"
                                        imageUrl="/placeholder.svg?height=100&width=100"
                                        credentialUrl="#"
                                    />
                                    <CertificationCard
                                        title="Certified Kubernetes Administrator"
                                        issuer="Cloud Native Computing Foundation"
                                        date="2021"
                                        imageUrl="/placeholder.svg?height=100&width=100"
                                        credentialUrl="#"
                                    />
                                    <CertificationCard
                                        title="MongoDB Certified Developer"
                                        issuer="MongoDB"
                                        date="2021"
                                        imageUrl="/placeholder.svg?height=100&width=100"
                                        credentialUrl="#"
                                    />
                                    <CertificationCard
                                        title="Oracle Certified Professional: Java SE 11 Developer"
                                        issuer="Oracle"
                                        date="2020"
                                        imageUrl="/placeholder.svg?height=100&width=100"
                                        credentialUrl="#"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Me</h2>
                                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        Have a project in mind or want to discuss a collaboration? Get in touch!
                                    </p>
                                </div>
                                <div className="mx-auto grid w-full max-w-5xl gap-6 py-12 lg:grid-cols-2">
                                    <div className="flex flex-col justify-center space-y-4">
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-bold">Contact Information</h3>
                                            <p className="text-muted-foreground">Feel free to reach out through any of
                                                these
                                                channels.</p>
                                        </div>
                                        <div className="grid gap-4">
                                            <div className="flex items-center gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="h-5 w-5"
                                                >
                                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                                </svg>
                                                <span>email@example.com</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="h-5 w-5"
                                                >
                                                    <path
                                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                                </svg>
                                                <span>+1 (123) 456-7890</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="h-5 w-5"
                                                >
                                                    <path d="M15 11h.01"></path>
                                                    <path d="M11 15h.01"></path>
                                                    <path d="M16 16h.01"></path>
                                                    <path d="m2 16 20 6-6-20A20 20 0 0 0 2 16Z"></path>
                                                    <path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"></path>
                                                </svg>
                                                <span>City, Country</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <Link href="#" className="rounded-full p-2 bg-muted hover:bg-muted/80">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="h-5 w-5"
                                                >
                                                    <path
                                                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                                    <rect width="4" height="12" x="2" y="9"></rect>
                                                    <circle cx="4" cy="4" r="2"></circle>
                                                </svg>
                                                <span className="sr-only">LinkedIn</span>
                                            </Link>
                                            <Link href="#" className="rounded-full p-2 bg-muted hover:bg-muted/80">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="h-5 w-5"
                                                >
                                                    <path
                                                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                                </svg>
                                                <span className="sr-only">GitHub</span>
                                            </Link>
                                            <Link href="#" className="rounded-full p-2 bg-muted hover:bg-muted/80">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="h-5 w-5"
                                                >
                                                    <path
                                                        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                                </svg>
                                                <span className="sr-only">Twitter</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <ContactForm/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer
                    className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                    <p className="text-xs text-muted-foreground">© 2024 Portfolio. All rights reserved.</p>
                    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                        <Link href="#" className="text-xs hover:underline underline-offset-4">
                            Terms of Service
                        </Link>
                        <Link href="#" className="text-xs hover:underline underline-offset-4">
                            Privacy
                        </Link>
                    </nav>
                </footer>
            </div>
        </BaseContainer>
    )
}

