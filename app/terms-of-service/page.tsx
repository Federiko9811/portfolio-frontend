'use client'
import React, { useRef } from 'react';
import BaseContainer from "@/components/containers/base-container";
import { motion, useInView } from "framer-motion";

const TermsOfService = () => {
    const contentRef = useRef(null);
    const isInView = useInView(contentRef, { once: true, amount: 0.1 });

    return (
        <BaseContainer>
            <motion.div
                className="prose max-w-none dark:prose-invert min-h-screen py-12 md:py-24 lg:py-32"
                ref={contentRef}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Terms of Service
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <h2>Last Updated: March 22, 2025</h2>

                    <p>Welcome to my personal portfolio website. By accessing or using this website, you agree to be bound by these Terms of Service.</p>

                    <h2>1. Website Usage</h2>
                    <p>This website is provided for informational and showcase purposes only. The content displayed here represents my personal work, projects, and professional background.</p>

                    <h2>2. Intellectual Property</h2>
                    <p>All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is my property or the property of my content suppliers and is protected by international copyright laws.</p>

                    <h2>3. User Conduct</h2>
                    <p>When using this website, you agree not to:</p>
                    <ul>
                        <li>Use the website in any way that may impair its functionality or interfere with other users&#39; use</li>
                        <li>Attempt to gain unauthorized access to any portion of the website</li>
                        <li>Use the website for any unlawful purpose or in violation of these terms</li>
                    </ul>

                    <h2>4. External Links</h2>
                    <p>This website may contain links to external websites that are not operated by me. I have no control over the content and practices of these sites and cannot accept responsibility for their respective privacy policies.</p>

                    <h2>5. Limitation of Liability</h2>
                    <p>The information on this website is provided on an &#34;as is&#34; basis. I make no representations or warranties of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on this website.</p>
                    <p>In no event will I be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>

                    <h2>6. Changes to Terms</h2>
                    <p>I reserve the right to modify these terms at any time without prior notice. By continuing to use the website after such modifications, you agree to be bound by the revised terms.</p>

                    <h2>7. Governing Law</h2>
                    <p>These Terms shall be governed and construed in accordance with the laws applicable to my jurisdiction, without regard to its conflict of law principles.</p>

                    <h2>8. Contact Information</h2>
                    <p>For any questions regarding these Terms of Service, please contact me through the contact information provided on the website.</p>
                </motion.div>
            </motion.div>
        </BaseContainer>
    );
};

export default TermsOfService;