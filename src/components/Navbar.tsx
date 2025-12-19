import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Pizza } from 'lucide-react';

function Navbar() {
  const [cartCount] = useState(0);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Pizza className="w-8 h-8 text-red-600" />
            <span className="text-2xl font-bold text-gray-900">Bella Pizza</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Home
            </Link>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              About
            </button>
            <Link 
              to="/blog" 
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Blog
            </Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="hidden sm:block bg-red-600 text-white px-6 py-2.5 rounded-full hover:bg-red-700 transition-colors font-medium">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
