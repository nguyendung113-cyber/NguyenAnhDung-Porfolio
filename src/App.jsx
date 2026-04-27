import About from "./components/About/About";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="bg-darkblue min-h-screen selection:bg-cinnabar selection:text-ivory">
      <Header />
      <About />

      {/* Các phần khác sẽ tiếp tục ở đây */}
      <section id="about" className="py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-black text-darkblue mb-8">VỀ TÔI.</h2>
          <div className="w-20 h-2 bg-cinnabar mb-12"></div>
          {/* Nội dung giới thiệu */}
        </div>
      </section>
    </div>
  );
}

export default App;
