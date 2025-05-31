'use client'
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
// import About from "@/components/about";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      {/* <About></About> */}
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
