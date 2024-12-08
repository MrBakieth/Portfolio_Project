import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import ThemeToggle from './components/ThemeToggle'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      <ScrollProgress />
      <Navbar />
      
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
      <ThemeToggle />
      <ScrollToTop />
    </div>
  )
}

export default App
