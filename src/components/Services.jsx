import { Code, Database, Palette, Globe, Smartphone, Settings, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

function Services() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, { threshold: 0.1 });
    
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const services = [
    { icon: Code, title: 'Frontend Development', desc: 'React, Vite, Tailwind CSS', color: 'green' },
    { icon: Database, title: 'Backend Development', desc: 'Node.js, Express, MongoDB', color: 'emerald' },
    { icon: Palette, title: 'UI/UX Design', desc: 'Figma, Adobe XD, Prototyping', color: 'teal' },
    { icon: Globe, title: 'Web Development', desc: 'Full-stack websites, E-commerce', color: 'lime' },
    { icon: Smartphone, title: 'Mobile Development', desc: 'React Native, Flutter', color: 'green' },
    { icon: Settings, title: 'Custom Software', desc: 'Tailored software solutions engineered for your business workflows', color: 'emerald' },
  ];

  const colors = {
    green: 'bg-green-100 dark:bg-green-900/30 text-green-600',
    emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600',
    teal: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600',
    lime: 'bg-lime-100 dark:bg-lime-900/30 text-lime-600',
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-4"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We provide comprehensive training across multiple technology domains
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, i) => (
            <div 
              key={i} 
              className="service-card opacity-0 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full"></div>
              <div className="absolute bottom-0 right-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full"></div>
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary transition-all duration-500 group-hover:h-full"></div>
              <div className="absolute bottom-0 right-0 w-1 h-0 bg-primary transition-all duration-500 group-hover:h-full"></div>
              <div className="absolute inset-0 bg-primary/0 rounded-2xl transition-all duration-500 group-hover:bg-primary/5"></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 ${colors[item.color]} rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{item.desc}</p>
                <a href="#" className="text-primary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300 hover:scale-105">
                  Learn More <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;