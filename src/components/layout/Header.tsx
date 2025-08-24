import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Visa Services', path: '/visa-services' },
    { name: 'Passport Services', path: '/passport-services' },
    { name: 'Contact', path: '/contact' },
  ];
  
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container-custom">
        <div className="hidden lg:flex justify-between py-2 text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <Globe size={16} className="text-primary-700" />
              <span>Languages:</span>
              <a href="#" className="hover:text-primary-600">English</a>
              <span>|</span>
              <a href="#" className="hover:text-primary-600">हिन्दी</a>
              <span>|</span>
              <a href="#" className="hover:text-primary-600">मराठी</a>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <Phone size={16} className="text-primary-700" />
              <span>Call us: <a href="tel:+919920928938" className="font-medium hover:text-primary-600">+91 9920-928-938</a></span>
            </div>
            <div>
              <a href="mailto:yatrivisaconsultant@gmail.com" className="hover:text-primary-600">yatrivisaconsultant@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      
      <nav className={`container-custom py-4 ${isScrolled ? 'py-3' : 'py-5'}`}>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/yatrivisaconsultant-logo.png" 
              alt="Yatri Visa Consultant Logo" 
              className="h-8 sm:h-10 w-auto"
            />
            <div>
              <div className="text-lg sm:text-xl font-bold text-primary-800">Yatri</div>
              <div className="text-xs sm:text-sm text-accent-600 -mt-1">Visa Consultant</div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`font-medium hover:text-primary-600 transition-colors text-sm xl:text-base ${location.pathname === link.path ? 'text-primary-600' : 'text-gray-700'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu} 
              className="p-2 text-gray-600 hover:text-primary-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white h-full overflow-y-auto pt-16">
            <div className="px-4 py-2 absolute top-4 right-4">
              <button 
                onClick={toggleMenu} 
                className="p-2 text-gray-600 hover:text-primary-600 focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col space-y-4 p-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`py-2 font-medium text-lg border-b border-gray-100 ${location.pathname === link.path ? 'text-primary-600' : 'text-gray-700'}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 flex flex-col space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone size={16} className="text-primary-700" />
                  <span>Call us: <a href="tel:+919920928938" className="font-medium">+91 9920-928-938</a></span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe size={16} className="text-primary-700" />
                  <span>Languages:</span>
                  <div className="flex space-x-1">
                    <a href="#" className="hover:text-primary-600">English</a>
                    <span>|</span>
                    <a href="#" className="hover:text-primary-600">हिन्दी</a>
                    <span>|</span>
                    <a href="#" className="hover:text-primary-600">मराठी</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;