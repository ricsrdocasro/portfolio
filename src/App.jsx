import React, { useEffect, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Academics from './components/Academics'
import Contact from './components/Contact'
import Hobbies from './components/Hobbies'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { MusicProvider } from './context/MusicContext'
import StarsCanvas from './components/canvas/Stars'
import DynamicBackground from './components/DynamicBackground'
import Lenis from 'lenis'

const MainContent = () => {
  const { isTransitioning } = useLanguage();
  
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative">
      <DynamicBackground />
      <Suspense fallback={<div className="fixed inset-0 bg-neutral-950 flex items-center justify-center text-white">Loading...</div>}>
        <StarsCanvas />
        
        <div className={`transition-all duration-300 ease-in-out ${isTransitioning ? 'blur-sm opacity-50' : 'blur-0 opacity-100'}`}>
                  <div className="container mx-auto px-8 relative z-10 pt-24 lg:pt-40">
                    <Navbar />
          
            <Hero />
            <About />
            <Projects />
            <Academics />
            <Hobbies />
            <Contact />
          </div>
        </div>  
      </Suspense>
    </div>
  );
};

const App = () => {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <LanguageProvider>
      <MusicProvider>
        <MainContent />
      </MusicProvider>
    </LanguageProvider>
  )
}

export default App

