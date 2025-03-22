'use client'
import React, {useState} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import BaseContainer from "@/components/containers/base-container";
import {DownloadIcon, MenuIcon} from "lucide-react";
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {AnimatePresence, motion} from "framer-motion";
import ZoomInButton from "@/components/buttons/zoom-in-button";

interface SectionLink {
    name: string;
    href: string;
}

const Navbar = () => {
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const pathname = usePathname();

    // Check if we're on the home page
    const isHomePage = pathname === "/" || pathname === "";

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
    ];

    // Function to get the correct href for navigation
    const getAnchorLink = (href: string) => {
        // If link doesn't start with #, return as is
        if (!href.startsWith('#')) return href;

        // If we're on the home page, keep as is, otherwise prepend with "/"
        return isHomePage ? href : `/${href}`;
    };

    return (
        <motion.header
            className="sticky top-0 z-40 w-full border-b bg-background/10 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/80"
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{
                duration: 0.5,
                ease: "easeOut"
            }}
        >
            <BaseContainer>
                <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                    <div className="flex gap-6 md:gap-10 items-center">
                        <nav className="hidden gap-6 md:flex">
                            {sectionLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{opacity: 0, y: -10}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{
                                        delay: 0.1 * index,
                                        duration: 0.4
                                    }}
                                >
                                    <Link
                                        href={getAnchorLink(link.href)}
                                        className="font-semibold text-sm relative group"
                                    >
                                        {link.name}
                                        <motion.span
                                            className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full"
                                            initial={{width: 0}}
                                            whileHover={{width: '100%'}}
                                            transition={{duration: 0.3}}
                                        />
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                        <div
                            className={"md:hidden items-center flex"}
                        >
                            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                                <SheetTrigger>
                                    <motion.div
                                        whileHover={{scale: 1.1}}
                                        whileTap={{scale: 0.9}}
                                    >
                                        <MenuIcon/>
                                    </motion.div>
                                </SheetTrigger>
                                <SheetContent
                                    side={"left"}
                                >
                                    <SheetTitle>
                                        <div
                                            className={"mt-6 ml-6 flex flex-col gap-4"}
                                        >
                                            <AnimatePresence>
                                                {sectionLinks.map((link, index) => (
                                                    <motion.div
                                                        key={link.href}
                                                        initial={{opacity: 0, x: -20}}
                                                        animate={{opacity: 1, x: 0}}
                                                        exit={{opacity: 0, x: -20}}
                                                        transition={{
                                                            delay: 0.05 * index,
                                                            duration: 0.3
                                                        }}
                                                    >
                                                        <Link
                                                            href={getAnchorLink(link.href)}
                                                            className={"font-semibold text-sm"}
                                                            onClick={() => setIsSheetOpen(false)}
                                                        >
                                                            {link.name}
                                                        </Link>
                                                    </motion.div>
                                                ))}
                                            </AnimatePresence>
                                        </div>
                                    </SheetTitle>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                    <div className="flex flex-1 items-center justify-end space-x-4">
                        <nav className="flex items-center space-x-1">
                            <motion.div
                                initial={{opacity: 0, scale: 0.9}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{delay: 0.5, duration: 0.4}}
                            >
                                <motion.div
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                >
                                    <ZoomInButton
                                        text={"Download CV"}
                                        icon={<DownloadIcon className="ml-2 h-4 w-4"/>}
                                        className={"hidden md:flex"}
                                        variant={"secondary"}
                                    />
                                    <ZoomInButton
                                        text={"CV"}
                                        icon={<DownloadIcon className="ml-2 h-4 w-4"/>}
                                        className={"md:hidden"}
                                        variant={"secondary"}
                                    />
                                </motion.div>
                            </motion.div>
                        </nav>
                    </div>
                </div>
            </BaseContainer>
        </motion.header>
    );
};

export default Navbar;