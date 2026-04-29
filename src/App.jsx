import React, { Suspense, lazy } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Lazy load các section
const Introduce = lazy(() => import("./components/Introduce/Introduce"));
const About = lazy(() => import("./components/About/About"));
const Skills = lazy(() => import("./components/Skill/Skill"));
const Projects = lazy(() => import("./components/Project/Project"));
const Contact = lazy(() => import("./components/Contact/Contact"));

/**
 * FullScreenLoader - Hiển thị tràn màn hình khi đang tải toàn bộ App
 */
const FullScreenLoader = () => (
  <div className="fixed inset-0 z-[9999] bg-darkblue flex flex-col items-center justify-center">
    <div className="w-12 h-12 border-4 border-cinnabar border-t-transparent rounded-full animate-spin"></div>
    <p className="mt-4 text-ivory font-medium animate-pulse">
      Đang tải Portfolio...
    </p>
  </div>
);

function App() {
  return (
    <div className="bg-darkblue min-h-screen selection:bg-cinnabar selection:text-ivory">
      {/* Bọc tất cả nội dung vào một Suspense duy nhất. 
          Loading sẽ chỉ biến mất khi TẤT CẢ các component bên trong đã tải xong.
      */}
      <Suspense fallback={<FullScreenLoader />}>
        <Header />

        <main>
          <Introduce />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
