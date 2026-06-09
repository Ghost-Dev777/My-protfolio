import { About } from "@/components/AboutMe";
import { useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { Experience } from "@/components/MyExperiance";
import { MyWorks } from "@/components/MyWorks";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { Skills } from "@/components/Skills";
import { skills } from "@/data/portfolio-data";



export default function Home(){

    useEffect(() => {
    const target = sessionStorage.getItem("scrollTarget");
    if (!target) return;
    sessionStorage.removeItem("scrollTarget");

    const id = setTimeout(() => {
      if (target === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
    return () => clearTimeout(id);
  }, []);

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