import { useEffect } from 'react';
import { ExternalLink, Github, TrendingUp, Users, Clock, Award } from 'lucide-react';

function Portfolio() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, { threshold: 0.1 });
    
    const cards = document.querySelectorAll('.portfolio-card');
    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'ShopEase E-Commerce',
      category: 'Full-stack multi-vendor marketplace',
      description: 'Full-stack multi-vendor marketplace with real-time inventory, Stripe payments, and admin analytics.',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      result: '3x increase in conversion rate post-launch',
      icon: '🛒',
      color: 'green'
    },
    {
      title: 'FinTrack Dashboard',
      category: 'Real-time financial analytics SaaS',
      description: 'Real-time financial analytics SaaS with role-based access, PDF reporting, and API integrations.',
      tags: ['React', 'Python', 'PostgreSQL', 'AWS'],
      result: '70% faster reporting vs legacy system',
      icon: '📊',
      color: 'emerald'
    },
    {
      title: 'EduLearn Mobile App',
      category: 'Cross-platform e-learning app',
      description: 'Cross-platform e-learning app with video streaming, progress tracking, and offline content access.',
      tags: ['React Native', 'Firebase', 'Node.js'],
      result: '10,000+ active learners in 3 months',
      icon: '📱',
      color: 'teal'
    },
    {
      title: 'MediBook HMS',
      category: 'Hospital management system',
      description: 'Hospital management system with appointment booking, patient records, billing, and inventory modules.',
      tags: ['React', 'Django', 'MySQL', 'Docker'],
      result: 'Deployed across 5 hospital branches',
      icon: '🏥',
      color: 'lime'
    },
    {
      title: 'LogiTrack Fleet App',
      category: 'Real-time fleet management',
      description: 'Real-time fleet management and delivery tracking with GPS, driver assignment, and reporting.',
      tags: ['Flutter', 'Google Maps API', 'Node.js'],
      result: '40% reduction in delivery delays',
      icon: '🚚',
      color: 'green'
    },
    {
      title: 'BrandForge Identity',
      category: 'Complete brand identity system',
      description: 'Complete brand identity system including logo, typography, color palette, and full marketing kit.',
      tags: ['Adobe Illustrator', 'Figma', 'Brand Strategy'],
      result: 'Client raised $500K seed round after rebrand',
      icon: '🎨',
      color: 'emerald'
    }
  ];

  const colors = {
    green: 'bg-green-100 dark:bg-green-900/30 text-green-600',
    emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600',
    teal: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600',
    lime: 'bg-lime-100 dark:bg-lime-900/30 text-lime-600',
  };

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            OUR <span className="text-primary">WORK</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-4"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Projects That Speak for Themselves — A selection of solutions we've built for clients across industries worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="portfolio-card opacity-0 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden"
            >
              {/* Animated Green Border */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full"></div>
              <div className="absolute bottom-0 right-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full"></div>
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary transition-all duration-500 group-hover:h-full"></div>
              <div className="absolute bottom-0 right-0 w-1 h-0 bg-primary transition-all duration-500 group-hover:h-full"></div>
              <div className="absolute inset-0 bg-primary/0 rounded-2xl transition-all duration-500 group-hover:bg-primary/5"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 ${colors[project.color]} rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <span className="text-3xl">{project.icon}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Category */}
                <p className="text-primary text-sm font-medium mb-2">{project.category}</p>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Result */}
                <div className="flex items-center gap-2 pt-3 border-t border-gray-100 dark:border-gray-700">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{project.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;