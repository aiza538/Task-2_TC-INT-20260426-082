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
        
        <a href="#home" className="text-2xl font-bold">
          <span className="text-primary">TEYZIX</span>
          <span className="text-gray-800 dark:text-white">CORE</span>
        </a>
        
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-700 dark:text-gray-300 hover:text-primary transition-all duration-300">
              {link.name}
            </a>
          ))}
          <button className="bg-primary text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-primaryDark transition-all duration-300">
            Get in Touch
          </button>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
          >
            {darkMode ? (
              <Moon className="w-5 h-5 text-gray-300" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-500" />
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
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-primary py-2">
              {link.name}
            </a>
          ))}
          <button className="bg-primary text-white px-5 py-2 rounded-full font-semibold text-sm w-full">
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;