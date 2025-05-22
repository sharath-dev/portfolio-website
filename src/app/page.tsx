import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ContactForm from "@/components/contact";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main className="flex flex-col justify-center md:items-center sm:items-start">
        <Hero></Hero>
        <div className="grid grid-cols-2 gap-4 w-[60vw] mt-10">
          <div className="flex flex-col p-10">
            <div className="text-4xl mb-5">Lorem Ipsum</div>
            <div>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</div>
          </div> 
          <div className="flex flex-col p-10 bg-[#111111] rounded-4xl border-[0.5] border-gray-400 shadow-2xl">
            <div className="text-4xl mb-5">Lorem Ipsum</div>
            <div>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</div>
          </div>
        </div>
        <div className="flex flex-col justify-start w-[60vw] p-10">
          <span className="text-4xl">Contact Me.</span>
          <ContactForm></ContactForm>
        </div>
      </main>
    </>
  );
}
