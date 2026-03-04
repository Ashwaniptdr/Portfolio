import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Navigation */}
      <nav className={`glass-nav transition-all duration-300 ${isScrolled ? 'py-4 shadow-xl shadow-black/20' : 'py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tighter text-white hover:text-primary-glow transition-colors">
            AP<span className="text-primary">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-primary transition-colors px-2 py-1"
              >
                {link.name}
              </a>
            ))}
            <button className="px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary-glow transition-all shadow-lg shadow-primary/20">
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-6 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full py-4 bg-primary text-white font-bold rounded-xl">
              Contact Me
            </button>
          </div>
        )}
      </nav>

      <main>
        <Hero onShowResume={() => setShowResume(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </main>

      {showResume && <Resume onClose={() => setShowResume(false)} />}

      <Footer />
    </div>
  );
}

export default App;
