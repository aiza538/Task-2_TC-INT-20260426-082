import { ArrowRight, Play } from 'lucide-react';
import { useEffect, useRef } from 'react';

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, { threshold: 0.1 });
    
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 dark:from-primary/10 dark:via-transparent dark:to-primary/5"></div>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 dark:bg-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/15 dark:bg-primary/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div ref={heroRef} className="opacity-0">
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-gray-900 dark:text-white">We Build Digital</span><br />
            <span className="text-gray-900 dark:text-white">Solutions That</span><br />
            <span className="bg-gradient-to-r from-primary to-primaryDark bg-clip-text text-transparent">Drive Growth</span>
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            TezyixCore is a modern tech studio crafting scalable, high-performance web apps, 
            mobile solutions, and custom software for businesses worldwide.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primaryDark hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group relative overflow-hidden">
              <span className="relative z-10">Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </button>
            <button className="border-2 border-primary text-primary dark:text-white px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 group relative overflow-hidden">
              <span className="relative z-10">View Our Work</span>
              <Play className="w-4 h-4 relative z-10" />
              <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0"></span>
            </button>
          </div>
          
          <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="group cursor-pointer relative overflow-hidden">
              <p className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">100+</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Projects Delivered</p>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </div>
            <div className="group cursor-pointer relative overflow-hidden">
              <p className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">50+</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Happy Clients</p>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </div>
            <div className="group cursor-pointer relative overflow-hidden">
              <p className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">10+</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Years Experience</p>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </div>
            <div className="group cursor-pointer relative overflow-hidden">
              <p className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">24/7</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Support</p>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;