import BaseContainer from "@/components/containers/base-container";
import AboutMe from "@/components/sections/about-me";
import IntroductionBanner from "@/components/sections/introduction-banner";
import Projects from "@/components/sections/projects";

export default function Home() {
    return (
        <BaseContainer>
            <div className="flex flex-col min-h-screen">

                <IntroductionBanner/>

                <main>
                    <AboutMe/>

                    <Projects />

                </main>
            </div>
        </BaseContainer>
    )
}

