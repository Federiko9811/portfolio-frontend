'use client'
import React, {useRef} from 'react';
import Link from "next/link";
import {motion, useInView} from "framer-motion";
import {Github, Linkedin, Mail, MapPin} from "lucide-react";

const Contacts = () => {
    const contactRef = useRef(null);
    const isInView = useInView(contactRef, {once: true, amount: 0.1});

    const contactInfo = [
        {
            icon: <Mail className="h-5 w-5"/>,
            label: "Email",
            value: "fraponi98@gmail.com",
            href: "mailto:fraponi98@gmail.com"
        },
        {
            icon: <MapPin className="h-5 w-5"/>,
            label: "Location",
            value: "Latina, Italy",
            href: null
        }
    ];

    const socialLinks = [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/federico-raponi-4501ab199",
            icon: <Linkedin className="h-5 w-5"/>
        },
        {
            name: "GitHub",
            href: "https://github.com/Federiko9811",
            icon: <Github className="h-5 w-5"/>
        },
    ];

    return (
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
            <motion.div
                ref={contactRef}
                className="container mx-auto px-4 md:px-6"
                initial={{opacity: 0}}
                animate={isInView ? {opacity: 1} : {opacity: 0}}
                transition={{duration: 0.6}}
            >
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <motion.div
                        className="space-y-2"
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                        transition={{delay: 0.2, duration: 0.5}}
                    >
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Contact Me
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Have a project in mind or want to discuss a collaboration? Get in touch!
                        </p>
                    </motion.div>

                    <motion.div
                        className="mx-auto w-full max-w-md py-12"
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                        transition={{delay: 0.4, duration: 0.5}}
                    >
                        <div className="space-y-6">
                            {/* Contact Information */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-center">Contact Information</h3>
                                <div className="space-y-3">
                                    {contactInfo.map((contact, index) => (
                                        <motion.div
                                            key={contact.label}
                                            className="flex items-center justify-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                                            initial={{opacity: 0, x: -20}}
                                            animate={isInView ? {opacity: 1, x: 0} : {opacity: 0, x: -20}}
                                            transition={{delay: 0.6 + (index * 0.1), duration: 0.4}}
                                        >
                                            <div className="text-primary">
                                                {contact.icon}
                                            </div>
                                            {contact.href ? (
                                                <Link
                                                    href={contact.href}
                                                    className="text-sm font-medium hover:text-primary transition-colors"
                                                >
                                                    {contact.value}
                                                </Link>
                                            ) : (
                                                <span className="text-sm font-medium">
                                                    {contact.value}
                                                </span>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-center">Connect With Me</h3>
                                <motion.div
                                    className="flex justify-center gap-4"
                                    initial={{opacity: 0, y: 20}}
                                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                                    transition={{delay: 0.8, duration: 0.5}}
                                >
                                    {socialLinks.map((social, index) => (
                                        <motion.div
                                            key={social.name}
                                            initial={{opacity: 0, scale: 0.8}}
                                            animate={isInView ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.8}}
                                            transition={{delay: 1.0 + (index * 0.1), duration: 0.4}}
                                            whileHover={{scale: 1.1}}
                                            whileTap={{scale: 0.95}}
                                        >
                                            <a
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors group"
                                            >
                                                <div className="group-hover:scale-110 transition-transform">
                                                    {social.icon}
                                                </div>
                                                <span className="sr-only">{social.name}</span>
                                            </a>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contacts;
