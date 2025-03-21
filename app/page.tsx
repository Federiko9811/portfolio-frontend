import AboutMe from "@/components/sections/about-me";
import IntroductionBanner from "@/components/sections/introduction-banner";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function Home() {
    return (
        <div>
            <div className="flex flex-col min-h-screen">

                <IntroductionBanner/>

                <main>
                    <AboutMe/>

                    <Projects/>

                    <Skills/>

                    {/*<Certifications/>*/}
                </main>
            </div>
        </div>
    )
}

