import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import BaseContainer from "@/components/containers/base-container";
import {DownloadIcon} from "lucide-react";

const Navbar = () => {

    const sectionLinks: SectionLink[] = [
        {
            name: "Home",
            href: "#introduction",
        },
        {
            name: "About",
            href: "#about",
        },
        {
            name: "Projects",
            href: "#projects",
        },
        {
            name: "Skills",
            href: "#skills",
        },
        {
            name: "Certifications",
            href: "#certifications",
        }
    ]

    return (
        <header
            className="sticky top-0 z-40 w-full border-b bg-background/10 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/80">
            <BaseContainer>
                <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                    <div className="flex gap-6 md:gap-10">
                        <nav className="hidden gap-6 md:flex">
                            {sectionLinks.map(link => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={"font-semibold text-sm"}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className="flex flex-1 items-center justify-end space-x-4">
                        <nav className="flex items-center space-x-1">
                            <Button
                                className={"p-5"}
                            >
                                Download CV
                                <DownloadIcon className="h-4 w-4"/>
                            </Button>
                        </nav>
                    </div>
                </div>
            </BaseContainer>
        </header>
    );
};

export default Navbar;