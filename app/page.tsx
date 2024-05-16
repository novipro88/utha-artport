import About from "@/components/About/About";
import Archive from "@/components/Arcihive/Archive";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Project from "@/components/Projects/Project";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-mycolor-400">
        <Navbar />

        <div className="container mt-24 md:mt-36 px-12 py-4">
          <Hero />
          <Archive />
          <About />
          <Project />
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}
