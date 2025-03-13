import React from 'react';
import {CertificationCard} from "@/components/cards/certification-card";
import BaseContainer from "@/components/containers/base-container";

const Certifications = () => {
    return (
        <BaseContainer>
            <section id="certifications" className="w-full py-12 md:py-24 lg:py-32">
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
            </section>
        </BaseContainer>
    );
};

export default Certifications;