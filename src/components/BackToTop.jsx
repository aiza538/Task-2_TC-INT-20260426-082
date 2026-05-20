import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setVisible(window.scrollY > 500));
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return visible ? (
    <button onClick={scrollTop} className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-primaryDark hover:scale-110 hover:-translate-y-1 transition-all duration-300 z-50 animate-bounce-slow">
      <ChevronUp className="w-5 h-5 mx-auto" />
    </button>
  ) : null;
}

export default BackToTop;