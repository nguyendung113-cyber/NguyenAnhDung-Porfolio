import React, { Suspense, lazy } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Lazy load các section không cần thiết ngay lập tức
const Introduce = lazy(() => import("./components/Introduce/Introduce"));
const About = lazy(() => import("./components/About/About"));
const Skills = lazy(() => import("./components/Skill/Skill"));
const Projects = lazy(() => import("./components/Project/Project"));
const Contact = lazy(() => import("./components/Contact/Contact"));

/**
 * Loading fallback component
 */
const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-cinnabar border-t-transparent rounded-full animate-spin"></div>
  </div>
);

/**
 * App - Main application component
 * Sử dụng lazy loading cho các section để cải thiện performance
 */
function App() {
  return (
    <div className="bg-darkblue min-h-screen selection:bg-cinnabar selection:text-ivory">
      <Header />

      <Suspense fallback={<SectionLoader />}>
        <Introduce />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
