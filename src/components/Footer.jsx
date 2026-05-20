import { Facebook, Twitter, Linkedin, Instagram, ChevronUp, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

function Footer({ darkMode }) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={`${darkMode ? 'bg-gray-900' : 'bg-white'} pt-16 pb-6 relative overflow-hidden transition-colors duration-300`}>
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/15 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          
          <div className="animate-fade-up group">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-primaryDark rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">
                <span className="text-primary">TEYZIX</span>
                <span className={darkMode ? 'text-white' : 'text-gray-800'}> CORE</span>
              </h3>
            </div>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm leading-relaxed mb-4`}>
              Bridging the gap between academic learning and industry application.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className={`w-9 h-9 ${darkMode ? 'bg-gray-800 hover:bg-primary' : 'bg-gray-100 hover:bg-primary'} rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-white`}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - with hover green line + green text */}
          <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
            <h4 className={`text-lg font-semibold mb-5 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Quick Links
              <div className="w-12 h-0.5 bg-primary rounded-full mt-2"></div>
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, i) => (
                <li key={i}>
                  <a href={`#${item.toLowerCase()}`} className={`${darkMode ? 'text-gray-400 hover:text-primary' : 'text-gray-500 hover:text-primary'} transition-all duration-300 inline-block group relative overflow-hidden`}>
                    <span className="relative z-10 group-hover:text-primary transition-colors duration-300">{item}</span>
                    <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Domains - with hover green line + green text */}
          <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h4 className={`text-lg font-semibold mb-5 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Domains
              <div className="w-12 h-0.5 bg-primary rounded-full mt-2"></div>
            </h4>
            <ul className="space-y-3">
              {['Frontend Development', 'Backend Development', 'UI/UX Design', 'Mobile Development', 'Custom Software'].map((item, i) => (
                <li key={i}>
                  <span className={`${darkMode ? 'text-gray-400 hover:text-primary' : 'text-gray-500 hover:text-primary'} transition-all duration-300 inline-block cursor-pointer group relative overflow-hidden`}>
                    <span className="relative z-10 group-hover:text-primary transition-colors duration-300">{item}</span>
                    <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - with hover green line + green text */}
          <div className="animate-fade-up" style={{ animationDelay: '300ms' }}>
            <h4 className={`text-lg font-semibold mb-5 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Get in Touch
              <div className="w-12 h-0.5 bg-primary rounded-full mt-2"></div>
            </h4>
            <ul className="space-y-4">
              <li className={`flex items-center gap-3 ${darkMode ? 'text-gray-400 hover:text-primary' : 'text-gray-500 hover:text-primary'} transition-all duration-300 cursor-pointer group relative overflow-hidden`}>
                <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform relative z-10" />
                <span className="relative z-10 group-hover:text-primary transition-colors duration-300">info@teyzix.com</span>
                <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className={`flex items-center gap-3 ${darkMode ? 'text-gray-400 hover:text-primary' : 'text-gray-500 hover:text-primary'} transition-all duration-300 cursor-pointer group relative overflow-hidden`}>
                <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform relative z-10" />
                <span className="relative z-10 group-hover:text-primary transition-colors duration-300">+92 123 4567890</span>
                <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className={`flex items-center gap-3 ${darkMode ? 'text-gray-400 hover:text-primary' : 'text-gray-500 hover:text-primary'} transition-all duration-300 cursor-pointer group relative overflow-hidden`}>
                <MapPin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform relative z-10" />
                <span className="relative z-10 group-hover:text-primary transition-colors duration-300">Lahore, Pakistan</span>
                <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
            
            <div className="mt-6">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className={`w-full px-4 py-2 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-100 border-gray-200 text-gray-800'} border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm hover:scale-105 focus:scale-100`}
              />
              <button className="w-full mt-2 px-4 py-2 bg-primary text-white rounded-xl font-semibold hover:bg-primaryDark hover:scale-105 transition-all duration-300 text-sm shadow-md hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`pt-6 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} text-center`}>
          <p className={`${darkMode ? 'text-gray-500' : 'text-gray-400'} text-sm`}>
            {new Date().getFullYear()} TEYZIX CORE. All rights reserved.
          </p>
        </div>

        {/* Back to Top Button */}
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full shadow-xl hover:bg-primaryDark hover:scale-110 hover:-translate-y-2 transition-all duration-300 z-50"
        >
          <ChevronUp className="w-5 h-5 mx-auto" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;