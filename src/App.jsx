import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow flex items-center justify-center pt-20">
      </main>
      <Hero/>
      <Footer />
    </div>
  )
}

export default App