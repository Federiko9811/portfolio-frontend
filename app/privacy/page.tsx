'use client'
import React, { useRef } from 'react';
import BaseContainer from "@/components/containers/base-container";
import { motion, useInView } from "framer-motion";

const PrivacyPage = () => {
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
                    Privacy Policy
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <h2>Last Updated: March 22, 2025</h2>

                    <p>This Privacy Policy describes how your personal information is handled on my personal portfolio website.</p>

                    <h2>1. Information Collection</h2>
                    <p><strong>I do not collect any personal information from visitors to this website.</strong></p>
                    <p>This website is a static portfolio designed to showcase my work and professional experience. It does not:</p>
                    <ul>
                        <li>Use contact forms that store data</li>
                        <li>Process payments</li>
                        <li>Use analytics tools that collect personal information</li>
                        <li>Maintain user accounts or login systems</li>
                        <li>Store cookies for tracking purposes</li>
                    </ul>

                    <h2>2. Technical Information</h2>
                    <p>The website may automatically receive and record certain non-personal information when you visit, such as:</p>
                    <ul>
                        <li>The type of browser you use</li>
                        <li>Your operating system</li>
                        <li>Basic access logs maintained by the hosting provider</li>
                    </ul>
                    <p>This information cannot be used to identify you personally and is only used to maintain and improve website functionality.</p>

                    <h2>3. Cookies</h2>
                    <p>This website uses only essential cookies necessary for the proper functioning of the website. These cookies do not track you or collect personal information.</p>

                    <h2>4. Third-party Services</h2>
                    <p>This website may use third-party services such as:</p>
                    <ul>
                        <li>Font providers (like Google Fonts)</li>
                        <li>Code hosting platforms (like GitHub)</li>
                        <li>Content delivery networks (CDNs)</li>
                    </ul>
                    <p>These services may have their own privacy policies and collection practices that are not covered by this privacy policy.</p>

                    <h2>5. External Links</h2>
                    <p>This website contains links to external sites that are not operated by me. I have no control over the content and privacy practices of these sites and cannot accept responsibility for their respective privacy policies.</p>

                    <h2>6. Children&#39;s Privacy</h2>
                    <p>This website does not knowingly collect any personally identifiable information from children under the age of 13.</p>

                    <h2>7. Changes to This Privacy Policy</h2>
                    <p>I may update this privacy policy from time to time. I will notify you of any changes by posting the new privacy policy on this page and updating the &#34;Last Updated&#34; date.</p>

                    <h2>8. Contact Information</h2>
                    <p>If you have any questions about this Privacy Policy, please contact me through the contact information provided on the website.</p>
                </motion.div>
            </motion.div>
        </BaseContainer>
    );
};

export default PrivacyPage;