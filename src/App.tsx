import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThreeScene } from "@/components/ThreeScene";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
// import { AdminConsole } from "@/components/AdminConsole";
import { AllWork } from "@/pages/AllWork";

const Home = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
    {/* <AdminConsole /> */}
  </>
);

function App() {
  return (
    <Router>
      <SmoothScroll>
        <CustomCursor />
        <Navbar />
        <main className="relative">
          <ThreeScene />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<AllWork />} />
          </Routes>
          <Footer />
        </main>
      </SmoothScroll>
    </Router>
  )
}

export default App
