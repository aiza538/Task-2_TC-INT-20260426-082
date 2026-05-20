import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PORTFOLIO', href: '#portfolio' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-white dark:bg-gray-900 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        <a href="#home" className="text-2xl font-bold group relative overflow-hidden">
          <span className="text-primary">TEYZIX</span>
          <span className="text-gray-800 dark:text-white">CORE</span>
          {/* Green border bottom animation */}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </a>
        
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-all duration-300 relative group overflow-hidden py-1"
            >
              {link.name}
              {/* Green underline animation */}
              <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button className="bg-primary text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-primaryDark hover:scale-105 transition-all duration-300 relative overflow-hidden group">
            <span className="relative z-10">Get in Touch</span>
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </button>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 group relative overflow-hidden"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>
          
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden bg-white dark:bg-gray-900 ${
        isOpen ? 'max-h-96 opacity-100 shadow-lg' : 'max-h-0 opacity-0'
      }`}>
        <div className="flex flex-col gap-3 px-4 pb-5">
          {links.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-primary py-2 transition-colors relative group overflow-hidden inline-block">
              {link.name}
              <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button className="bg-primary text-white px-5 py-2 rounded-full font-semibold text-sm w-full hover:bg-primaryDark transition-all duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;