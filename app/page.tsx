import AboutMe from "@/components/sections/about-me";
import IntroductionBanner from "@/components/sections/introduction-banner";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Contacts from "@/components/sections/contacts";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <IntroductionBanner/>

            <AboutMe/>
            <Projects/>
            <Skills/>

            <Contacts/>
        </div>
    )
}