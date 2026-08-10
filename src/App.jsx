import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Navbar from './components/layout/Navbar';
import About from './components/sections/About';
import Stack from './components/sections/Stack';
import ProjectShowcase from './components/sections/ProjectShowcase';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow flex items-center justify-center pt-20">
      </main>
      <Hero/>
      <About/>
      <Stack/>
      <ProjectShowcase/>
      <Footer />
    </div>
  )
}

export default App