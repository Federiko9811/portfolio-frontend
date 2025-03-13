import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";

const Navbar = () => {
    return (
        <header
            className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex gap-6 md:gap-10">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="inline-block font-bold">Portfolio</span>
                    </Link>
                    <nav className="hidden gap-6 md:flex">
                        <Link
                            href="#about"
                            className="flex items-center text-lg font-medium transition-colors hover:text-primary"
                        >
                            About
                        </Link>
                        <Link
                            href="#projects"
                            className="flex items-center text-lg font-medium transition-colors hover:text-primary"
                        >
                            Projects
                        </Link>
                        <Link
                            href="#skills"
                            className="flex items-center text-lg font-medium transition-colors hover:text-primary"
                        >
                            Skills
                        </Link>
                        <Link
                            href="#certifications"
                            className="flex items-center text-lg font-medium transition-colors hover:text-primary"
                        >
                            Certifications
                        </Link>
                        <Link
                            href="#contact"
                            className="flex items-center text-lg font-medium transition-colors hover:text-primary"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-1">
                        <Button variant="ghost" size="icon" aria-label="Toggle Theme" className="mr-6">
                            <span className="sr-only">Toggle theme</span>
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
                                className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                            >
                                <circle cx="12" cy="12" r="4"></circle>
                                <path d="M12 2v2"></path>
                                <path d="M12 20v2"></path>
                                <path d="m4.93 4.93 1.41 1.41"></path>
                                <path d="m17.66 17.66 1.41 1.41"></path>
                                <path d="M2 12h2"></path>
                                <path d="M20 12h2"></path>
                                <path d="m6.34 17.66-1.41 1.41"></path>
                                <path d="m19.07 4.93-1.41 1.41"></path>
                            </svg>
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
                                className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                            >
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                            </svg>
                        </Button>
                        <Button>Download CV</Button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;