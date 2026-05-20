import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.contact-animate');
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 contact-animate opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-4"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have questions? We're here to help
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer contact-animate opacity-0 group relative overflow-hidden">
              {/* Green border animation */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-500"></div>
              <div className="absolute top-0 left-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full"></div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform relative z-10">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="relative z-10">
                <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Email Us</h4>
                <p className="text-gray-600 dark:text-gray-400">info@teyzix.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer contact-animate opacity-0 group relative overflow-hidden" style={{ animationDelay: '100ms' }}>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-500"></div>
              <div className="absolute top-0 left-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full"></div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform relative z-10">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div className="relative z-10">
                <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Call Us</h4>
                <p className="text-gray-600 dark:text-gray-400">+92 123 4567890</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer contact-animate opacity-0 group relative overflow-hidden" style={{ animationDelay: '200ms' }}>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-500"></div>
              <div className="absolute top-0 left-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full"></div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform relative z-10">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div className="relative z-10">
                <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Visit Us</h4>
                <p className="text-gray-600 dark:text-gray-400">Lahore, Pakistan</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 contact-animate opacity-0 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden" style={{ animationDelay: '300ms' }}>
            {/* Green border animation for form */}
            <div className="absolute top-0 left-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full"></div>
            <div className="absolute bottom-0 right-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full"></div>
            <div className="absolute top-0 left-0 w-1 h-0 bg-primary transition-all duration-500 group-hover:h-full"></div>
            <div className="absolute bottom-0 right-0 w-1 h-0 bg-primary transition-all duration-500 group-hover:h-full"></div>
            
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:bg-gray-800 dark:text-white hover:scale-105 focus:scale-100" required />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:bg-gray-800 dark:text-white hover:scale-105 focus:scale-100" required />
              <select className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:bg-gray-800 dark:text-white hover:scale-105 focus:scale-100">
                <option>Select Internship Domain</option>
                <option>Frontend Development</option>
                <option>Backend Development</option>
                <option>UI/UX Design</option>
              </select>
              <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:bg-gray-800 dark:text-white hover:scale-105 focus:scale-100" required></textarea>
              <button type="submit" className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primaryDark hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-lg relative overflow-hidden">
                <span className="relative z-10">
                  {submitted ? <><CheckCircle className="w-4 h-4 inline" /> Sent Successfully!</> : <><Send className="w-4 h-4 inline group-hover/btn:translate-x-1 transition-transform" /> Send Message</>}
                </span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;