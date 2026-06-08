import { About } from "@/components/AboutMe";
import { HeroSection } from "@/components/HeroSection";
import { Experience } from "@/components/MyExperiance";
import { MyWorks } from "@/components/MyWorks";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { Skills } from "@/components/Skills";
import { skills } from "@/data/portfolio-data";



export default function Home(){

    return(
        <>
            <HeroSection/>
            <About/>
            <MyWorks/>
            <Skills skills={skills}/>
            <ProgressIndicator/>
            <Experience/>
        </>
    )
}