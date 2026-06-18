import Navbar from "./layout/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar></Navbar>
        <main>
          <Hero></Hero>
          <About></About>
          <Projects></Projects>
          <Experience></Experience>
          <Testimonials></Testimonials>
          <Contact></Contact>
        </main>
      </div>
    </>
  );
}

export default App;
