import { Target, Eye, Lightbulb, TrendingUp } from 'lucide-react';
import { useEffect } from 'react';

function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, { threshold: 0.1 });
    
    const cards = document.querySelectorAll('.about-card');
    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: Target, title: 'Our Mission', desc: 'To cultivate next-generation technology professionals through real-world experience', color: 'green' },
    { icon: Eye, title: 'Our Vision', desc: 'Bridge the gap between academic learning and industry application', color: 'emerald' },
    { icon: Lightbulb, title: 'Innovation', desc: 'Work on cutting-edge technologies and build portfolio-ready projects', color: 'teal' },
    { icon: TrendingUp, title: 'Growth', desc: 'Enhance technical proficiency through progressive real-world tasks', color: 'lime' },
  ];

  const colors = {
    green: 'bg-green-100 dark:bg-green-900/30 text-green-600',
    emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600',
    teal: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600',
    lime: 'bg-lime-100 dark:bg-lime-900/30 text-lime-600',
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="text-primary">TEYZIX CORE</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-4"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A structured, industry-aligned professional development initiative designed to equip aspiring technology professionals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <div 
              key={i} 
              className="about-card opacity-0 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 text-center group relative overflow-hidden"
            >
              {/* Animated Green Border - Top */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full"></div>
              {/* Animated Green Border - Bottom */}
              <div className="absolute bottom-0 right-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full"></div>
              {/* Animated Green Border - Left */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary transition-all duration-500 group-hover:h-full"></div>
              {/* Animated Green Border - Right */}
              <div className="absolute bottom-0 right-0 w-1 h-0 bg-primary transition-all duration-500 group-hover:h-full"></div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-primary/0 rounded-2xl transition-all duration-500 group-hover:bg-primary/5"></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 ${colors[item.color]} rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-500">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group cursor-pointer">
              <p className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">2+ Hours</p>
              <p className="text-gray-600 dark:text-gray-400">Daily Commitment</p>
            </div>
            <div className="group cursor-pointer">
              <p className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">7-10 Days</p>
              <p className="text-gray-600 dark:text-gray-400">Program Duration</p>
            </div>
            <div className="group cursor-pointer">
              <p className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">100%</p>
              <p className="text-gray-600 dark:text-gray-400">Certificate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;